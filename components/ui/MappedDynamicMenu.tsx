import React, { useState, useEffect, useRef, Suspense } from "react";
import { useRouter } from "next/router";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../../components/ui/navbar-menu";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport
} from "../../components/ui/navigation-menu"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
  } from "../../components/ui/dialog"

// Correctly use React.lazy for dynamic imports
const IDsCard = React.lazy(() => import("../../pages/Cards/IDsCard"));
const FedsCard = React.lazy(() => import("../../pages/Cards/FedsCard"));
const FedLimits = React.lazy(() => import("../../pages/Cards/FedLimits"));
// Continue with React.lazy for other dynamic imports

// Mapping dialog IDs to their content cards
const contentCardsMapping = {
  "dialogId1": IDsCard,
  "dialogId2": FedsCard,
  // Add more mappings as necessary
};

// Define MenuItem type to include subItems
type MenuItemType = {
  label: string;
  subItems: {
    label: string;
    dialogId: string; // Identifier for the content card.
  }[];
};

const MappedDynamicMenu = () => {

  const dialogRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null); // Reference to the menu container
  const [selectedContentCard, setSelectedContentCard] = useState<React.ReactNode>(null);
  const [menuItems, setMenuItems] = useState([]);

  // Initial structure for menu items and sub-items
useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch(`/api/sheetData?range=NavMenu!A:D`);
        const jsonData = await response.json();
        // Assuming jsonData is an array where each item represents a row from the sheet
        const processedMenuItems = jsonData.map(item => ({
          label: item[0], // Main menu item label
          subItems: [
            {
              label: item[1], // Sub-item label
              dialogId: item[2], // Assuming the dialog ID for the sub-item is in the third column
              // If your data structure allows for multiple sub-items, you'll need to adjust accordingly
            },
            // Potentially add more sub-items here based on your actual data structure
          ],
        }));
        setMenuItems(processedMenuItems);
      } catch (error) {
        console.error("Failed to fetch menu items:", error);
      }
    };
    fetchMenuItems();
  }, []);
  

  useEffect(() => {
    // Click outside to hide dialog
    const handleClickOutside = (event) => {
      if (!menuRef.current.contains(event.target) && dialogRef.current && !dialogRef.current.contains(event.target)) {
        setSelectedContentCard(null); // Hide the selected content card
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubItemEnter = (dialogId: string) => {
    const ContentComponent = contentCardsMapping[dialogId];
    if (ContentComponent) {
      // Dynamically set the content card based on dialogId
      setSelectedContentCard(<ContentComponent />);
    }
  };

  return (
    
    <div ref={menuRef} style={{ position: "relative", display: "flex", justifyContent: "center" }}>
      <NavigationMenu.Root>
        <NavigationMenuList style={{ display: "flex", flexDirection: "row", listStyle: "none", margin: 0, padding: 0 }}>
          {menuItems.map(({ label, subItems }, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuTrigger style={{ padding: '10px' }}>
                {label}
              </NavigationMenuTrigger>
              <NavigationMenuContent style={{ display: "flex", flexDirection: "column" }}>
                {subItems.map((subItem, subIndex) => (
                  <div
                    key={subIndex}
                    onMouseEnter={() => handleSubItemEnter(subItem.dialogId)}
                    style={{ padding: '10px', cursor: 'pointer' }}
                  >
                    {subItem.label}
                  </div>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
          <NavigationMenu.Indicator style={{ bottom: 0, height: 5, backgroundColor: "grey", transition: "all 0.5s ease" }} />
        </NavigationMenuList>
      </NavigationMenu.Root>
      {selectedContentCard && (
  <Suspense fallback={<div>Loading...</div>}>
    <div
      ref={dialogRef}
      style={{
        position: "absolute",
        padding: "10px",
        backgroundColor: "white",
        border: "1px solid black",
        zIndex: 1000,
        visibility: 'visible', // Ensure visibility
        // Additional styling for transition if needed
      }}
    >
      {selectedContentCard}
    </div>
  </Suspense>
)}
    </div>
  );
};
  

export default MappedDynamicMenu;
