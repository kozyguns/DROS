import React, { useState, useEffect, useRef } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import styled from 'styled-components';
import DOMPurify from 'dompurify';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
  } from "../../components/ui/dialog"
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

// Styled components
const SubItemsContainer = styled.div`
  position: absolute;
  display: none; // Initially hidden
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 10px;
  background: none; // Background color for the sub-items container
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); // Optional: shadow for the sub-items container
  z-index: 10; // Ensure it's above other content
`;

const DialogContainer = styled.div`
  position: absolute;
  padding: 10px;
  background-color: none;
  border: none;
  z-index: 100; // Ensure the dialog is above other content
  // Additional styling as needed
`;

// Close Button - Styled component for the close button
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  // Style your close button as needed
`;

const colorMapping = {
    "Special": "#f00", // Red
    "Important": "#00f", // Blue
    "Note": "#0f0", // Green
    // Add more mappings as needed
  };

  const applyColorToLabel = (label: string) => {
    // function body
  
    const keywords = Object.keys(colorMapping);
    const foundKeyword = keywords.find(keyword => label.includes(keyword));
  
    if (foundKeyword) {
      const parts = label.split(foundKeyword);
      const ColorStyledText = styled.span`
      colorMapping[foundKeyword as keyof typeof colorMapping]
        font-weight: bold; // Optional styling
      `;
  
      return (
        <>
          {parts[0]}
          <ColorStyledText>{foundKeyword}</ColorStyledText>
          {parts.slice(1).join(foundKeyword)}
        </>
      );
    }
  
    // Return the label as is if no keywords are found
    return label;
  };

  const SafeHtmlComponent = ({ htmlContent }: { htmlContent: string }) => {
    const safeHtml = DOMPurify.sanitize(htmlContent);
    return <div dangerouslySetInnerHTML={{ __html: safeHtml }} />;
  };
  
type SubItem = {
  label: string;
  contentId: string;
  link?: string;
};

type MenuItem = {
  label: string;
  dialogId: string;
  subItems: SubItem[];
};

type DialogContentComponents = {
  [key: string]: React.ComponentType<any>;
};

const dialogContentComponents = {
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

const dialogContentComponentss: DialogContentComponents = {
  IDsCard: IDsCard,
  FedsCard: FedsCard,
  FedLimits: FedLimits,
  // ... other component definitions
};

const MappedDynamicMenu = () => {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
    const dialogRef = useRef<HTMLDivElement>(null);
    const [activeDialogContent, setActiveDialogContent] = useState<React.ReactNode | null>(null);
    const [activeDialog, setActiveDialog] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [activeSubItem, setActiveSubItem] = useState<SubItem | null>(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      // Make sure the endpoint and range are correct
      const response = await fetch(`/api/sheetData?range=NavMenu!A2:E`);
      const jsonData = await response.json();
      const itemsMap = new Map();

      jsonData.forEach((item: [string, string, string, string, string]) => {
        const [label, dialogId, subItemLabel, contentId, link] = item;
        if (!itemsMap.has(label)) {
          itemsMap.set(label, { label, dialogId, subItems: [] });
        }
        const menuItem = itemsMap.get(label);
        menuItem.subItems.push({ label: subItemLabel, contentId, link });
      });
  
      setMenuItems(Array.from(itemsMap.values()));
    };
    fetchMenuItems();
  }, []);

    // Close active dialog
    const closeDialog = () => setActiveDialog(null);

    // When rendering the dialog content
const renderDialogContent = () => {
  if (!activeSubItem) return null; // Guard against null values

  // Obtain the component to render based on the contentId
  const DialogContentComponent = dialogContentComponentss[activeSubItem.contentId];


  // Render the component, the link, and any additional elements like a close button
  return (
    <Dialog>
      <DialogContent>
        {DialogContentComponent}
        {activeSubItem.link && (
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <a href={activeSubItem.link} target="_blank" rel="noopener noreferrer">More Info</a>
          </div>
        )}
        <DialogClose asChild>
          <button>Close</button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

  const handleSubItemClick = (contentId: string) => {
    const contentComponent = dialogContentComponents[contentId as keyof typeof dialogContentComponents];
    if (contentComponent) {
      setActiveDialogContent(contentComponent);
    } else {
      console.error("Content not found for id:", contentId);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
        setActiveDialogContent(null); // Hide active dialog content
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const setSubItemsDisplay = (index: number, displayType: 'grid' | 'none') => {
    const subitemsElement = document.getElementById(`subitems-${index}`);
    if (subitemsElement) {
      subitemsElement.style.display = displayType;
    }
  };

  // Define a component to render subitem labels with styles
  const StyledSubItemLabel = ({ label }: { label: string }) => {
    // Simple parser to replace [color] tags with styled spans
    const parsedLabel = label.replace(/\[(.*?)\](.*?)\[\/\1\]/g, (match, p1, p2) => {
      return `<span style="color: ${p1};">${p2}</span>`;
    });
  
    return <span dangerouslySetInnerHTML={{ __html: parsedLabel }} />;
  };

  return (
    <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
      <NavigationMenu.Root>
        <NavigationMenu.List style={{ display: "flex", flexDirection: "row", listStyleType: "none" }}>
          {menuItems.map((menuItem, index) => (
            <NavigationMenu.Item key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <NavigationMenu.Trigger style={{ padding: '10px' }}>
                {menuItem.label}
              </NavigationMenu.Trigger>
              {hoveredIndex === index && (
                <SubItemsContainer style={{ display: 'grid' }}>
                  {menuItem.subItems.map((subItem, subIndex) => (
                    <div key={subIndex} onClick={() => handleSubItemClick(subItem.contentId)} style={{ cursor: 'pointer' }}>
                      <StyledSubItemLabel label={subItem.label} />
                      {renderDialogContent()}
                    </div>
                  ))}
                </SubItemsContainer>
              )}
            </NavigationMenu.Item>
          ))}
          <NavigationMenu.Indicator style={{ bottom: 0, height: 5, backgroundColor: "grey", transition: "all 0.5s ease" }} />
        </NavigationMenu.List>
      </NavigationMenu.Root>
      {activeDialogContent && (
        <div ref={dialogRef} style={{ position: "absolute", display: 'block', padding: "10px", zIndex: 1000, transition: "all 0.5s ease" }}>
          {activeDialogContent}
        </div>
      )}
    </div>
  );
};

export default MappedDynamicMenu;
