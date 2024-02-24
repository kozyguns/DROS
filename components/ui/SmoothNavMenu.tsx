import React, { useState, useEffect, useRef } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

type MenuItem = {
  label: string;
  dialogId: string;
};

const SmoothNavMenu = () => {
  const [value, setValue] = useState<string | undefined>(undefined);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [currentDialogContent, setCurrentDialogContent] = useState<string>("");
  const [offset, setOffset] = useState<number | null>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch(`/api/sheetData?range=NavMenu!A:B`);
        const jsonData = await response.json();
        setMenuItems(jsonData.map((item: any) => ({
          label: item[0],
          dialogId: item[1],
        })));
      } catch (error) {
        console.error("Failed to fetch menu items:", error);
      }
    };
    fetchMenuItems();
  }, []);

  const handleMenuItemClick = (label: string) => {
    const menuItem = menuItems.find(item => item.label === label);
    if (menuItem) {
      setCurrentDialogContent(menuItem.dialogId);
    } else {
      console.error("Dialog content not found for label:", label);
      setCurrentDialogContent("");
    }
  };

  return (
    <NavigationMenu.Root
      value={value}
      onValueChange={(newValue: string) => setValue(newValue)}
      style={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <NavigationMenu.List
        ref={listRef}
        style={{
          display: "flex",
          listStyle: "none",
          margin: 0,
          marginBottom: 15,
          padding: 0,
          flexDirection: "row",
        }}
      >
        {menuItems.map(({ label }, index) => (
          <NavigationMenu.Item key={index} value={label}>
            <NavigationMenu.Trigger
              onClick={() => handleMenuItemClick(label)}
              style={{ padding: '10px' }}
            >
              {label}
            </NavigationMenu.Trigger>
          </NavigationMenu.Item>
        ))}
        <NavigationMenu.Indicator
          style={{
            bottom: 0,
            height: 5,
            backgroundColor: "grey",
            transition: "all 0.5s ease",
          }}
        />
      </NavigationMenu.List>
      {/* Assuming this div is for additional styled content related to the selected item */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* Content that should be dynamically shown based on interaction, adjusted to your needs */}
        {currentDialogContent && (
          <div style={{ marginTop: "20px" }}>
            <p>{currentDialogContent}</p>
          </div>
        )}
      </div>
    </NavigationMenu.Root>
  );
};

export default SmoothNavMenu;
