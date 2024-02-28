import React, { useState, useEffect, useRef } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import IDsCard from "../../pages/Cards/IDsCard";
import FedsCard from "../../pages/Cards/FedsCard";
import { string } from "zod";

// Define MenuItem type
type MenuItem = {
  label: string;
  dialogId: string; // Identifier for the content card.
};


// Placeholder content cards for demonstration
const ContentCard1 = () => <div><IDsCard/></div>;
const ContentCard2 = () => <div>This is the content for Dialog ID 2.</div>;
// More content cards as needed...

// Mapping dialog IDs to their content cards
const contentCardsMapping = {
  "dialogId1": <IDsCard />,
  "dialogId2": <FedsCard />,
  // Add more mappings as necessary
};

type DialogId = 'dialogId1' | 'dialogId2'; // Add any additional keys as needed.

const DynamicMenu = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const dialogRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null); // Reference to the menu container
  const [selectedContentCard, setSelectedContentCard] = useState<React.ReactNode>(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch(`/api/sheetData?range=NavMenu!A2:B`);
        const jsonData = await response.json();
        setMenuItems(jsonData.map((item: [string, string]) => ({
          label: item[0],
          dialogId: item[1],
        })));
      } catch (error) {
        console.error("Failed to fetch menu items:", error);
      }
    };
    fetchMenuItems();
  }, []);

  useEffect(() => {
    // Click outside to hide dialog
    const handleClickOutside = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node) && dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
        setSelectedContentCard(null); // Hide the selected content card
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  

  const handleMenuItemEnter = (event: React.MouseEvent<HTMLElement>, dialogId: DialogId) => {
    if (dialogRef.current) {
      const menuItemRect = event.currentTarget.getBoundingClientRect();
      dialogRef.current.style.visibility = 'visible';
      dialogRef.current.style.top = `${menuItemRect.bottom + window.scrollY}px`;
      dialogRef.current.style.left = `${menuItemRect.left + window.scrollX}px`;
      // Set the selected content card based on dialogId
      setSelectedContentCard(contentCardsMapping[dialogId]);
    }
};

  

  return (
    <div ref={menuRef} style={{ position: "relative", display: "flex", justifyContent: "center" }}>
      <NavigationMenu.Root>
        <NavigationMenu.List style={{ display: "flex", flexDirection: "row", listStyle: "none", margin: 0, padding: 0 }}>
          {menuItems.map(({ label, dialogId }, index) => (
            <NavigationMenu.Item key={index}>
              <NavigationMenu.Trigger
                onMouseEnter={(e) => handleMenuItemEnter(e, dialogId as DialogId)}
                style={{ padding: '10px' }}
              >
                {label}
              </NavigationMenu.Trigger>
            </NavigationMenu.Item>
          ))}
          <NavigationMenu.Indicator style={{ bottom: 0, height: 5, backgroundColor: "grey", transition: "all 0.5s ease" }} />
        </NavigationMenu.List>
      </NavigationMenu.Root>
      {selectedContentCard && (
        <div
          ref={dialogRef}
          style={{
            position: "absolute",
            padding: "10px",
            backgroundColor: "white",
            border: "1px solid black",
            zIndex: 1000,
            transition: "visibility 0.5s, opacity 0.5s linear",
            visibility: 'visible', // Ensure visibility
          }}
        >
          {selectedContentCard}
        </div>
      )}
    </div>
  );
};

export default DynamicMenu;
