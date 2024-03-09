import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button } from "../components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from 'react-hook-form';
import { z } from "zod";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { Textarea } from "../components/ui/textarea";
import LinkingPage from "../components/ui/LinkingPage";
import Link from "next/link";
import { cn } from "../components/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectLabel,
  SelectValue,
} from "../components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import { toast } from "../components/ui/use-toast";
import { Input } from "../components/ui/input";
import { Checkbox } from "../components/ui/checkbox";
import { Calendar } from "../components/ui/calendar";
import { Switch } from "../components/ui/switch";
import { Label } from "../components/ui/label";
import { MultiSelect } from "../components/ui/multi-select";
import { DataTableFacetedFilter } from "../components/ui/faceted-filter";
import { SheetRow as ImportedSheetRow } from '../types/types';

const formSchema = z.object({
  drosNumber: z.string(),
  drosCancel: z.boolean(),
  salesRep: z.string(),
  auditType: z.array(z.string()),
  transDate: z.date(),
  auditDate: z.date(),
  errorLocation: z.array(z.string()),
  errorDetails: z.array(z.string()),
  errorNotes: z.string(),
});

type OptionType = {
  label: string;
  value: string;
};
type FormData = z.infer<typeof formSchema>;

// Example type definition, adjust based on your actual data structure
type DataItem = string[]; // If `data` is an array of arrays of strings
type Data = DataItem[];
type DataRow = string[]; // or more specific type reflecting your data structure
type SheetRow = string[];

const DROS = () => {
  const [data, setData] = useState([]);
  const [selections, setSelections] = useState(Array(7).fill(null)); // Use null for uninitialized selections
  const [errorLocationOptions, setErrorLocationOptions] = useState<OptionType[]>([]);
  const [errorDetailsOptions, setErrorDetailsOptions] = useState<OptionType[]>([]);
  const [salesRepOptions, setSalesRepOptions] = useState<OptionType[]>([]);
  const [auditTypeOptions, setAuditTypeOptions] = useState<OptionType[]>([]);

  useEffect(() => {
    const fetchOptions = async () => {
        // Assuming your API returns data in the structure of a 2D array, matching your Google Sheet's rows and columns
        const response = await fetch(`/api/sheetData?range=List!A:D`);
        const data = await response.json();

        // Map Google Sheets data to OptionType format for each category
        const fetchedSalesRepOptions = data.map((row: SheetRow) => ({
            value: row[0], // Column 1 (Column A) for salesRep
            label: row[0],
        }));
        const fetchedAuditTypeOptions = data.map((row: SheetRow) => ({
            value: row[1], // Column 2 (Column B) for auditType
            label: row[1],
        }));
        const fetchedErrorLocationOptions = data.map((row: SheetRow) => ({
            value: row[2], // Column 3 (Column C) for errorLocation
            label: row[2],
        }));
        const fetchedErrorDetailsOptions = data.map((row: SheetRow) => ({
            value: row[3], // Column 4 (Column D) for errorDetail
            label: row[3],
        }));

        // Update state with the fetched and mapped options
        setSalesRepOptions(fetchedSalesRepOptions);
        setAuditTypeOptions(fetchedAuditTypeOptions);
        setErrorLocationOptions(fetchedErrorLocationOptions);
        setErrorDetailsOptions(fetchedErrorDetailsOptions);
    };

    fetchOptions();
}, []);

  

const form = useForm<FormData>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    drosCancel: false, // Adjust according to your default values
    drosNumber: '',
    salesRep: '',
    auditType: [],
    transDate: new Date(), // You might need to handle date default values appropriately
    auditDate: new Date(),
    errorLocation: [],
    errorDetails: [],
    errorNotes: '',
  },
});

const onSubmit = async (formData: FormData) => {
  try {
    // Prepare the single row to be appended, with multiple selections separated by newlines
    const values = [[
      formData.drosNumber,
      formData.drosCancel ? "Yes" : "No",
      formData.salesRep,
      formData.auditType.join(",\n"),
      formData.transDate ? format(formData.transDate, "M-d-yyyy") : "",
      formData.auditDate ? format(formData.auditDate, "M-d-yyyy") : "",
      formData.errorLocation.join(",\n"), // Join multiple selections with a newline
      formData.errorDetails.join(",\n"),  // Join multiple selections with a newline
      formData.errorNotes,
      // Add more fields as necessary
    ]];

    const response = await fetch("/api/writeToSheet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        values // Sending the structured data
      }),
    });

    if (response.ok) {
      // Handle successful submission (e.g., resetting form, notifying user)
      console.log("Form submitted successfully");
      form.reset(); // Reset the form fields to initial values, if you're using React Hook Form or similar
    } else {
      // Handle server-side or network error
      console.error("Form submission failed");
    }
  } catch (error) {
    // Handle client-side error
    console.error("An error occurred during form submission:", error);
  }
};




  const handleSelectionChange = (selectIndex: number, value: string) => {
    let updatedSelections = [...selections];
    updatedSelections[selectIndex] = value === "none" ? null : value; // Handle 'none' as null
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
        filteredData = filteredData.filter((row) => row[i] === selections[i]);
      }
    }
    return [...new Set(filteredData.map((row) => row[index]))].filter(Boolean);
  };

  // Function to reset the selections
  const resetSelections = () => {
    setSelections(Array(7).fill(null)); // Reset to initial state
  };

  // Check if we have made all necessary selections to potentially show Column "H"
  const canShowColumnH = () => {
    // Find the index of the first select that either has no options following a selection or is the last select to make a selection
    const indexToCheck = selections.findIndex(
      (selection, index) =>
        selection !== null && getOptionsForSelect(index + 1).length === 0
    );
    // Ensure all selections up to this index are made
    const allSelectionsMade = selections
      .slice(0, indexToCheck + 1)
      .every((selection) => selection !== null);
    return allSelectionsMade && indexToCheck !== -1;
  };

  const columnHText = canShowColumnH()
    ? data.find((row) =>
        selections.every(
          (selection, index) => !selection || row[index] === selection
        )
      )?.[7]
    : "";

  return (
    <main >
      <header>
        <div className="flex flow-row items-center justify-center max w-full mb-24">
          <LinkingPage />
        </div>
      </header>
      <div className="flex flex-row item-center justify-center w-full max-w-[2250px] p-4">
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
            {/* Controllers with DataTableFacetedFilter */}
          <FormField
            control={form.control}
            name="drosCancel"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md mb-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Cancelled DROS</FormLabel>
                  <FormDescription>
                    Only Select When DROS Was Cancelled
                  </FormDescription>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
          <FormField
          control={form.control}
          name="drosNumber"
          render={({ field }) => (
            <FormItem className="flex flex-col mb-4 w-full">
              <FormLabel>DROS | Acquisition # </FormLabel>
              <FormControl>
                <Input placeholder="Enter The 'Dash' In The DROS #" {...field} />
              </FormControl>
              <FormDescription>
                Enter The DROS # Or Acquisition # For Consignments
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
            control={form.control}
            name="salesRep"
            render={({ field: { onChange, value } }) => (
              <FormItem className="flex flex-col mb-4 w-full">
                <FormLabel>Sales Rep</FormLabel>
                <Select onValueChange={onChange} defaultValue={value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select A Sales Rep" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {salesRepOptions.filter(option => option.value !== "").map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  You can manage email addresses in your <Link href="/examples/forms">email settings</Link>.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Controller
                name="auditType"
                control={form.control}
                render={({ field: { onChange, value } }) => (
                    <DataTableFacetedFilter
                        options={auditTypeOptions}
                        title="Audit Category"
                        selectedValues={value || []}
                        onSelectionChange={onChange}
                    />
                )}
            />
          </div>
          <div className="flex flex-row md:flex-row md:space-x-4 mb-4">
          <FormField
            control={form.control}
            name="transDate"
            render={({ field }) => (
              <FormItem className="flex flex-col mb-4">
                <FormLabel>Transaction Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Select A Date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  The Transaction Date (Purchase Date)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="auditDate"
            render={({ field }) => (
              <FormItem className="flex flex-col mb-4">
                <FormLabel>Audit Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Select Date Of Audit</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  The Date That You Are Auditing
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          </div>
          <div className="flex flex-row md:flex-row md:space-x-4 mb-4">
          <Controller
                name="errorLocation"
                control={form.control}
                render={({ field: { onChange, value } }) => (
                    <DataTableFacetedFilter
                        options={errorLocationOptions}
                        title="Error Location"
                        selectedValues={value || []}
                        onSelectionChange={onChange}
                    />
                )}
            />
            <Controller
                name="errorDetails"
                control={form.control}
                render={({ field: { onChange, value } }) => (
                    <DataTableFacetedFilter
                        options={errorDetailsOptions}
                        title="Error Details"
                        selectedValues={value || []}
                        onSelectionChange={onChange}
                    />
                )}
            />
          </div>
          <FormField
            control={form.control}
            name="errorNotes"
            render={({ field }) => (
              <FormItem className="flex flex-col mb-4">
                <FormLabel>Enter Error Notes | Details</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Explain Details For Each Audit Type On Their Own Line"
                    // className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Press The Enter Key For New Line
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      </div>
    </main>
  );
};

export default DROS;
