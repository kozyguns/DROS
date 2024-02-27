import React, { useEffect, useState } from 'react';
import DialogTest from "./../components/ui/DialogTest";
import SmoothNavMenu from "../components/ui/SmoothNavMenu";
import { useRouter } from "next/router";
import { Button } from "../components/ui/button";
import NavMenu from './Navigation/NavMenu';
import MappedDynamicMenu from '../components/ui/MappedDynamicMenu';
import DynamicMenu from '../components/ui/DynamicMenu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

// Example type definition, adjust based on your actual data structure
type DataItem = string[]; // If `data` is an array of arrays of strings
type Data = DataItem[];
type DataRow = string[]; // or more specific type reflecting your data structure

const DialogPage = () => {
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
     <div className="flex flow-row items-center justify-center max w-full mb-12">
         <DynamicMenu />
         </div>
    <div className="flex flex-col items-center justify-center p-4 space-y-4 mt-12">
        
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
      <div className="flex flex-row justify-center mt-10 md:mt-10 lg:mt-12">
      <Button onClick={resetSelections} className="mr-1 flex-shrink mt-10 py-2">
          Reset Selections
        </Button>
      </div>
    </div>
    </div>
  );
};
export default DialogPage;
