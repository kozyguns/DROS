import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { Button } from "../../components/ui/button";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../../components/ui/navbar-menu";
import { cn } from "../../components/lib/cn";
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import NavMenu from './NavMenu';
import Link from "next/link";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../../components/ui/navigation-menu"

// Example type definition, adjust based on your actual data structure
type DataItem = string[]; // If `data` is an array of arrays of strings
type Data = DataItem[];
type DataRow = string[]; // or more specific type reflecting your data structure


const DROSDropdowns = () => {
  const [data, setData] = useState([]);
  const [selections, setSelections] = useState(Array(7).fill(null)); // Use null for uninitialized selections
  const router = useRouter();
  const [active, setActive] = useState<string | null>(null);
  const [activeDialog, setActiveDialog] = useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/sheetData?range=Drops!A:H`);
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);

  const handleSelectionChange = (selectIndex: number, value: string) => {
    let updatedSelections = [...selections];
    updatedSelections[selectIndex] = value === 'none' ? null : value; // Handle 'none' as null
    for (let i = selectIndex + 1; i < updatedSelections.length; i++) {
      updatedSelections[i] = null; // Reset selections for dropdowns that follow
    }
    setSelections(updatedSelections);
  };

  const getOptionsForSelect = (index: number) => {
    if (!data.length) return [];
    let filteredData = data;
    for (let i = 0; i <= index; i++) {
      if (selections[i] !== null) {
        filteredData = filteredData.filter(row => row[i] === selections[i]);
      }
    }
    return [...new Set(filteredData.map(row => row[index]))].filter(Boolean);
  };

  // Function to reset the selections
  const resetSelections = () => {
    setSelections(Array(7).fill(null)); // Reset to initial state
  };

  // Check if we have made all necessary selections to potentially show Column "H"
  const canShowColumnH = () => {
    // Find the index of the first select that either has no options following a selection or is the last select to make a selection
    const indexToCheck = selections.findIndex((selection, index) => selection !== null && getOptionsForSelect(index + 1).length === 0);
    // Ensure all selections up to this index are made
    const allSelectionsMade = selections.slice(0, indexToCheck + 1).every(selection => selection !== null);
    return allSelectionsMade && indexToCheck !== -1;
  };

  const columnHText = canShowColumnH() ? data.find(row => selections.every((selection, index) => !selection || row[index] === selection))?.[7] : '';

  return (
    <div >
      <header className="sticky top-0 z-10 flex items-center justify-between p-4">
        <div className="relative w-full flex items-center justify-center">
          <NavMenu />
        </div>
      </header>
    <div className="flex flex-col items-center justify-center p-4 space-y-4 mt-8">
      {selections.map((selection, index) => (
        <Select key={index}
                disabled={index > 0 && selections[index - 1] === null}
                onValueChange={(value) => handleSelectionChange(index, value)}
                value={selection || 'none'}>
          <SelectTrigger className="flex max-w-[300px]">
            <SelectValue placeholder={`Select from ${String.fromCharCode('A'.charCodeAt(0) + index)}`} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">Select...</SelectItem>
            {getOptionsForSelect(index).map((option, optionIndex) => (
              <SelectItem key={optionIndex} value={option}>{option}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      ))}
      {columnHText && (columnHText as string).split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
      <div className="flex flex-row justify-center">
      <Button onClick={resetSelections} className="mr-1 flex-shrink">
          Reset Selections
        </Button>
        <Button onClick={() => router.push("/")} className="mr-1 flex-shrink px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
          Home Page
        </Button>
      </div>
    </div>
    </div>
  );
};



export default DROSDropdowns;
