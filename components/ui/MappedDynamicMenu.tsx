import React, { useState, useEffect, useRef } from "react"; // This version is the closest to the intended goal
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import styles from './SubItemsContainer.module.css';
import styled from 'styled-components';
import IDsCard from "../../pages/Cards/IDsCard";
import FedsCard from "../../pages/Cards/FedsCard";
import FedLimits from "../../pages/Cards/FedLimits";
import FedLimsName from "../../pages/Cards/FedLimsName";
import ProofDocs from "../../pages/Cards/ProofDocs";
import CorrectionDocs from "../../pages/Cards/CorrectionDocs";
import DelayedDeliveries from "../../pages/Cards/DelayedDeliveries";
import LeoPPT from "../../pages/Cards/LeoPPT";
import PeaceOfficer from "../../pages/Cards/PeaceOfficer";
import ReserveOfficer from "../../pages/Cards/ReserveOfficer";
import FederalAgent from "../../pages/Cards/FederalAgent";
import ActiveDuty from "../../pages/Cards/ActiveDuty";
import LocalActive from "../../pages/Cards/LocalActive";
import RetiredMilitary from "../../pages/Cards/RetiredMilitary";
import InterimDl from "../../pages/Cards/InterimDl";
import PeaceOfficerDROS from "../../pages/Cards/PeaceOfficerDROS";
import ReserveInfo from "../../pages/Cards/ReserveInfo";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
  } from "../../components/ui/dialog"

  // Assuming each contentId maps directly to a component
const dialogContentComponents = {
    IDsCard: IDsCard,
    FedsCard: FedsCard,
    // Add mappings for other IDs to components
  };

type SubItem = {
    label: string;
    contentId: string;
  };
  
  type MenuItem = {
    label: string;
    dialogId: string;
    subItems: SubItem[];
  };

  type DialogContentMapping = {
    [key: string]: JSX.Element;
  }

  const dialogContentMapping: DialogContentMapping = {
    dialog1: <IDsCard />,
    dialog2: <FedsCard />,
    // Add more mappings as necessary
  };

  const SubItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;
  

const MappedDynamicMenu = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const dialogRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null); // Reference to the menu container
  const [hoveredMenuItem, setHoveredMenuItem] = useState<string | null>(null);
  const [detailedContent, setDetailedContent] = useState<string | null>(null);
  const [activeDialogContent, setActiveDialogContent] = useState<React.ReactNode | null>(null);
  const [activeDialog, setActiveDialog] = useState<string | null>(null);
//   const [menuItems, setMenuItems] = useState([]);


const handleOpenDialog = (dialogId: string) => {
    setActiveDialog(dialogId);
    // Additional logic to position and show the dialog as needed...
  };

  const handleCloseDialog = () => {
    setActiveDialog(null);
  };



  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch(`/api/sheetData?range=NavMenu!A2:D`);
        const jsonData = await response.json();
        const itemsMap = new Map();
  
        jsonData.forEach((item: Array<any>) => {
          const [label, dialogId, subItemLabel, contentId] = item;
          let menuItem = itemsMap.get(label);
  
          if (!menuItem) {
            menuItem = { label, dialogId, subItems: [] };
            itemsMap.set(label, menuItem);
          }
  
          menuItem.subItems.push({ label: subItemLabel, contentId });
        });
  
        setMenuItems(Array.from(itemsMap.values()));
      } catch (error) {
        console.error("Failed to fetch menu items:", error);
      }
    };
    fetchMenuItems();
  }, []);
  
  // Function to dynamically generate the dialog content component
  const getDialogContentComponent = (contentId: string) => {
    const ContentComponent = dialogContentComponents[contentId as keyof typeof dialogContentComponents];
    return ContentComponent ? <ContentComponent /> : <p>Content not found</p>;
  };

  useEffect(() => {
    // Click outside to hide dialog
    const handleClickOutside = (event: MouseEvent) => {
        if (event.target && menuRef.current?.contains(event.target as Node) && dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
            // Hide the dialog if clicking outside the menu or dialog
            dialogRef.current.style.visibility = 'hidden';
        }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMenuItemEnter = (event: React.MouseEvent, dialogId: string) => {
    if (dialogRef.current) {
      const menuItemRect = event.currentTarget.getBoundingClientRect();
      dialogRef.current.style.visibility = 'visible';
      dialogRef.current.style.top = `${menuItemRect.bottom + window.scrollY}px`;
      dialogRef.current.style.left = `${menuItemRect.left + window.scrollX}px`;
  
      // Set the active dialog content based on dialogId
      const contentToDisplay = dialogContentMapping[dialogId];
      if (contentToDisplay) {
        setActiveDialogContent(contentToDisplay);
      } else {
        // Handle the case where there is no content for the given dialogId
        setActiveDialogContent("Content not found.");
      }
    }
  };
  
  const handleSubItemClick = (contentId: string) => {
    const dialogContent = dialogContentMapping[contentId];
    if (dialogRef.current) {
      setActiveDialogContent(dialogContent);
      // Additional logic to position and show the dialog as needed
      dialogRef.current.style.visibility = 'visible';
    } else {
      console.error("Content not found for id:", contentId);
      setActiveDialogContent(null);
    }
  };
  

  return (
    <div ref={menuRef} style={{ position: "relative", display: "flex", justifyContent: "center" }}>
      <NavigationMenu.Root>
        <NavigationMenu.List style={{ display: "flex", flexDirection: "row", listStyle: "none", margin: 0, padding: 0 }}>
          {menuItems.map((menuItem, index) => (
            <NavigationMenu.Item key={index} onMouseEnter={() => setHoveredMenuItem(menuItem.label)} onMouseLeave={() => setHoveredMenuItem(null)}>
              <NavigationMenu.Trigger style={{ padding: '10px' }}>
                {menuItem.label}
              </NavigationMenu.Trigger>
              {hoveredMenuItem === menuItem.label && (
                <div style={{ position: 'absolute', padding: '10px', display: 'flex', flexDirection: 'column' }}>
                  <div className={`styles.subItemsContainer ${menuItem.subItems.length > 4 ? 'twoColumns' : ''}`}>
                    {menuItem.subItems.map((subItem, subIndex) => (
                      <div key={subIndex} onClick={() => handleSubItemClick(subItem.contentId)} style={{ cursor: 'pointer' }}>
                        {subItem.label}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </NavigationMenu.Item>
          ))}
          <NavigationMenu.Indicator style={{ bottom: 0, height: 5, backgroundColor: "grey", transition: "all 0.5s ease" }} />
        </NavigationMenu.List>
      </NavigationMenu.Root>
      {/* Active dialog content rendering */}
      {activeDialogContent && (
        <div ref={dialogRef} style={{ position: "absolute", visibility: 'visible', padding: "10px", zIndex: 1000, transition: "all 0.5s ease" }}>
          {activeDialogContent}
        </div>
      )}
    </div>
  );
};

export default MappedDynamicMenu;
