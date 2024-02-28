import React, { useState, useEffect, useRef } from "react"; // This version is the closest to the intended goal
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

// type MenuItem = {
//   label: string;
//   dialogId: string; // Contains content for display.
// };

const SmoothNavMenu = () => {
  return null;
  // const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  // const dialogRef = useRef<HTMLDivElement>(null);
  // const menuRef = useRef<HTMLDivElement>(null); // Reference to the menu container

  // useEffect(() => {
  //   const fetchMenuItems = async () => {
  //     try {
  //       const response = await fetch(`/api/sheetData?range=NavMenu!A:B`);
  //       const jsonData = await response.json();
  //       setMenuItems(jsonData.map(item => ({
  //         label: item[0],
  //         dialogId: item[1],
  //       })));
  //     } catch (error) {
  //       console.error("Failed to fetch menu items:", error);
  //     }
  //   };
  //   fetchMenuItems();
  // }, []);

  // useEffect(() => {
  //   // Click outside to hide dialog
  //   const handleClickOutside = (event) => {
  //     if (!menuRef.current.contains(event.target) && dialogRef.current && !dialogRef.current.contains(event.target)) {
  //       // Hide the dialog if clicking outside the menu or dialog
  //       dialogRef.current.style.visibility = 'hidden';
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);

  // const handleMenuItemEnter = (event, dialogId) => {
  //   if (dialogRef.current) {
  //     const menuItemRect = event.currentTarget.getBoundingClientRect();
  //     dialogRef.current.style.visibility = 'visible';
  //     dialogRef.current.style.top = `${menuItemRect.bottom + window.scrollY}px`;
  //     dialogRef.current.style.left = `${menuItemRect.left + window.scrollX}px`;
  //     dialogRef.current.innerHTML = dialogId; // For demonstration; replace with safer content setting
  //   }
  // };

  // return(
  //   <div ref={menuRef} style={{ position: "relative", display: "flex", justifyContent: "center" }}>
  //     <NavigationMenu.Root>
  //       <NavigationMenu.List style={{ display: "flex", flexDirection: "row", listStyle: "none", margin: 0, padding: 0 }}>
  //         {menuItems.map(({ label, dialogId }, index) => (
  //           <NavigationMenu.Item key={index}>
  //             <NavigationMenu.Trigger
  //               onMouseEnter={(e) => handleMenuItemEnter(e, dialogId)}
  //               style={{ padding: '10px' }}
  //             >
  //               {label}
  //             </NavigationMenu.Trigger>
  //           </NavigationMenu.Item>
  //         ))}
  //         <NavigationMenu.Indicator
  //         style={{
  //           bottom: 0,
  //           height: 5,
  //           backgroundColor: "grey",
  //           transition: "all 0.5s ease"
  //         }}
  //       />
  //       </NavigationMenu.List>
  //     </NavigationMenu.Root>
  //     <div
  //       ref={dialogRef}
  //       style={{
  //         position: "absolute",
  //         visibility: 'hidden', // Initially hidden, made visible on hover
  //         padding: "1px",
  //         zIndex: 1000,
  //         transition: "all 0.5s ease",
  //       }}
  //     >
  //       {/* Content dynamically set based on hovered item */}
  //     </div>
  //   </div>
  // );
};

export default SmoothNavMenu;
