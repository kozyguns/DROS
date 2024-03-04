import React, { useState, useEffect, useRef } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import styled from 'styled-components';

// Importing dialog content components directly
import IDsCard from "../../pages/Cards/IDsCard";
import FedsCard from "../../pages/Cards/FedsCard";
import FedLimits from "../../pages/Cards/FedLimits";
import FedLimsName from "../../pages/Cards/FedLimsName";
import ProofDocs from "../../pages/Cards/ProofDocs";
import CorrectionDocs from "../../pages/Cards/CorrectionDocs";
import DelayedDeliveries from "../../pages/Cards/DelayedDeliveries";
import LeoPPT from "../../pages/Cards/LeoPPT";
import PeaceOfficer from "../../pages/Cards/PeaceOfficerDROS";
import ReserveOfficer from "../../pages/Cards/ReserveOfficer";
import FederalAgent from "../../pages/Cards/FederalAgent";
import ActiveDuty from "../../pages/Cards/ActiveDuty";
import LocalActive from "../../pages/Cards/LocalActive";
import RetiredMilitary from "../../pages/Cards/RetiredMilitary";
import InterimDl from "../../pages/Cards/InterimDl";
import PeaceOfficerDROS from "../../pages/Cards/PeaceOfficer";
import ReserveInfo from "../../pages/Cards/ReserveInfo";
// Add other imports as needed

const SubItemsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  display: none; // start as hidden
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  padding: 10px;

`;

// Wrapper to position SubItemsContainer absolutely
const SubItemsWrapper = styled.div`
  position: relative;
`;

type SubItem = {
  label: string;
  contentId: string;
};

type MenuItem = {
  label: string;
  dialogId: string;
  subItems: SubItem[];
};

// Assuming you have components like <IDsCard /> and <FedsCard /> etc.
const dialogContentComponents: Record<string, JSX.Element> = {
  IDsCard: <IDsCard />,
  FedsCard: <FedsCard />,
  FedLimits: <FedLimits />,
  FedLimsName: <FedLimsName />,
  ProofDocs: <ProofDocs />,
  CorrectionDocs: <CorrectionDocs />,
  DelayedDeliveries: <DelayedDeliveries />,
  LeoPPT: <LeoPPT />,
  PeaceOfficer: <PeaceOfficer />,
  ReserveOfficer: <ReserveOfficer />,
  FederalAgent: <FederalAgent />,
  ActiveDuty: <ActiveDuty />,
  LocalActive: <LocalActive />,
  RetiredMilitary: <RetiredMilitary />,
  InterimDl: <InterimDl />,
  PeaceOfficerDROS: <PeaceOfficerDROS />,
  ReserveInfo: <ReserveInfo />,
  // Add other mappings as necessary
};

const TestingMapDyn = () => {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
    const dialogRef = useRef<HTMLDivElement>(null);
    const [hoveredMenuItemIndex, setHoveredMenuItemIndex] = useState<number | null>(null);
    const [activeDialogContent, setActiveDialogContent] = useState<React.ReactNode | null>(null);  
    const menuRef = useRef<HTMLDivElement>(null); // Define menuRef here

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

  const handleSubItemClick = (contentId: string) => {
    // Access the content component using contentId from the dialogContentComponents mapping
    const contentComponent = dialogContentComponents[contentId];
    if (contentComponent) {
      setActiveDialogContent(contentComponent);
      if (dialogRef.current) {
        dialogRef.current.style.visibility = 'visible';
      }
    } else {
      console.error("Content not found for id:", contentId);
      setActiveDialogContent(<p>Content not found.</p>);
    }
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

  return (
    <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
      <NavigationMenu.Root>
        <NavigationMenu.List style={{ display: "flex", flexDirection: "row", listStyle: "none" }}>
          {menuItems.map((menuItem, index) => (
            <NavigationMenu.Item key={index} 
              onMouseEnter={() => setHoveredMenuItemIndex(index)} // Set hovered item index
              onMouseLeave={() => setHoveredMenuItemIndex(null)} // Clear hovered item index
            >
              <NavigationMenu.Trigger style={{ padding: '10px' }}>
                {menuItem.label}
              </NavigationMenu.Trigger>
              {hoveredMenuItemIndex === index && ( // Only show when hovered
                <SubItemsWrapper>
                  <SubItemsContainer style={{ display: 'grid' }}> {/* Make visible on hover */}
                    {menuItem.subItems.map((subItem, subIndex) => (
                      <div key={subIndex} onClick={() => handleSubItemClick(subItem.contentId)} style={{ cursor: 'pointer' }}>
                        {subItem.label}
                      </div>
                    ))}
                  </SubItemsContainer>
                </SubItemsWrapper>
              )}
            </NavigationMenu.Item>
          ))}
          <NavigationMenu.Indicator style={{ bottom: 0, height: 5, backgroundColor: "grey", transition: "all 0.5s ease" }} />
        </NavigationMenu.List>
      </NavigationMenu.Root>
      {activeDialogContent && (
        <div ref={dialogRef} style={{ position: "absolute", visibility: 'visible', padding: "10px", zIndex: 1000, transition: "all 0.5s ease" }}>
          {activeDialogContent}
        </div>
      )}
    </div>
  );
};


export default TestingMapDyn;
