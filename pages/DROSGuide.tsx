import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { Button } from "../components/ui/button";
import SupportMenu from "../components/ui/SupportMenu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import IDsCard from './Cards/IDsCard';
import FedsCard from './Cards/FedsCard';

// Example type definition, adjust based on your actual data structure
type DataItem = string[]; // If `data` is an array of arrays of strings
type Data = DataItem[];
type DataRow = string[]; // or more specific type reflecting your data structure

const DROSGuide = () => {
  const [data, setData] = useState([]);
  const [selections, setSelections] = useState(Array(7).fill(null)); // Use null for uninitialized selections
  const router = useRouter();
  const [active, setActive] = useState<string | null>(null);
  const [activeDialog, setActiveDialog] = useState(null);
  const [activeDialogContentId, setActiveDialogContentId] = useState<string | null>(null);

  // Function to handle clicks on sub-item labels in MappedDynamicMenu
  const handleSubItemClick = (contentId: string) => {
    setActiveDialogContentId(contentId);
  };

  // Render the appropriate content based on activeDialogContentId
  const renderDialogContent = () => {
    switch(activeDialogContentId) {
      case 'IDsCard':
        return <IDsCard />;
      case 'FedsCard':
        return <FedsCard />;
      // Handle other cases...
      default:
        return null;
    }
  };
  
  useEffect(() => {
    const fetchData = async () => {
      // Update the request to use the /api/sheetOps endpoint, specifying operation, sheetName, and range
      const response = await fetch(`/api/sheetOps`, {
        method: 'POST', // Using POST to include body data
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          operation: 'read',
          sheetName: 'DEFAULT', // Assuming 'GUIDE' maps to GOOGLE_SHEET_ID_GUIDE in sheetOps.js
          range: 'Drops!A:H', // Specify the exact range you want to read from
        }),
      });
  
      if (!response.ok) {
        console.error('Failed to fetch data');
        return;
      }
  
      const { data } = await response.json();
      setData(data); // Assuming setData updates your component's state with the fetched data
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
     <div className="flex flow-row items-center justify-center max w-full mb-48">
         <SupportMenu />
         {/* Render dialog content */}
      {activeDialogContentId && renderDialogContent()}
         </div>
    <div className="flex flex-col justify-center px-4 space-y-6 mx-auto max-w-lg">
      {selections.map((selection, index) => (
        <Select key={index}
                disabled={index > 0 && selections[index - 1] === null}
                onValueChange={(value) => handleSelectionChange(index, value)}
                value={selection || 'none'}>
          <SelectTrigger className="flex max-w-full">
            <SelectValue placeholder={`Select from ${String.fromCharCode('A'.charCodeAt(0) + index)}`} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">...</SelectItem>
            {getOptionsForSelect(index).map((option, optionIndex) => (
              <SelectItem key={optionIndex} value={option}>{option}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      ))}
      </div>
      <br/>
      <div className="flex flex-row justify-center mx-auto max-w-[700px]">
      {columnHText && (columnHText as string).split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
      </div>
      <div className="flex flex-row justify-center mt-10 md:mt-10 lg:mt-12">
      <Button onClick={resetSelections} className="mb-6 flex-shrink mt-10 py-2">
          Reset Selections
        </Button>
      </div>
    </div>

  );
};
export default DROSGuide;
