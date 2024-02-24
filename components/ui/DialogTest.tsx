import React, { useState, useEffect, useRef } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

// Define types for your state and ref if needed. For more complex state or refs, define specific interfaces
type OffsetType = number | null;
type ValueType = string | undefined;
type ActiveTriggerType = HTMLElement | null;

const DialogTest = () => {
  const [offset, setOffset] = useState<OffsetType>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [value, setValue] = useState<ValueType>(undefined);
  const [activeTrigger, setActiveTrigger] = useState<ActiveTriggerType>(null);

  useEffect(() => {
    const list = listRef.current;
    if (activeTrigger && list) {
      const listWidth = list.offsetWidth;
      const listCenter = listWidth / 2;

      const triggerOffsetRight =
        listWidth -
        activeTrigger.offsetLeft -
        activeTrigger.offsetWidth / 2;

      setOffset(Math.round(listCenter - triggerOffsetRight));
    } else if (value === "") {
      setOffset(null);
    }
  }, [activeTrigger, value]);

  return (
    <NavigationMenu.Root
      value={value}
      onValueChange={(newValue: string) => setValue(newValue)}
      style={{
        display: "flex",
        justifyContent: "center",
        position: "relative"
      }}
    >
      <NavigationMenu.List
        ref={listRef}
        style={{
          display: "flex",
          listStyle: "none",
          margin: 0,
          marginBottom: 15,
          padding: 1
        }}
      >
        {["Forms Of ID Guide", "Proof Of Residence Docs", "4473 | Fastbound", "Law Enforcement", "Military", "Interim | Temp ID's", "DROS Exemptions Guide", "Ammo Purchases", "VISA's | Submitted Residents | EAD's"].map((item) => (
  <NavigationMenu.Item key={item} value={item}>
    <NavigationMenu.Trigger
      ref={(node: HTMLButtonElement) => {
        if (item === value && activeTrigger !== node) {
          setActiveTrigger(node);
        }
        return node;
      }}
      style={{ padding: '10px' }} // Direct inline styling
    >
      {item}
    </NavigationMenu.Trigger>
    <NavigationMenu.Content style={{ width: 200, height: 100, left: 0 }}>
      <button>{item} content</button>
    </NavigationMenu.Content>
  </NavigationMenu.Item>
))}


        <NavigationMenu.Indicator
          style={{
            bottom: 0,
            height: 5,
            backgroundColor: "grey",
            transition: "all 0.5s ease"
          }}
        />
      </NavigationMenu.List>

      <div
        style={{
          position: "absolute",
          left: 0,
          top: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          columns: 2,
        }}
      >
        <NavigationMenu.Viewport
          style={{
            left: 0,
            display: !offset ? "none" : undefined,
            transform: `translateX(${offset}px)`,
            top: "100%",
            width: "var(--radix-navigation-menu-viewport-width)",
            transition: "all 0.5s ease"
          }}
        />
      </div>
    </NavigationMenu.Root>
  );
}
export default DialogTest;