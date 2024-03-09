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

const formSchema = z.object({
  drosCancel: z.boolean().optional(),
  salesRep: z.string().optional(),
  auditType: z.string().optional(),
  transDate: z.date().optional(),
  auditDate: z.date().optional(),
  errorLocation: z.array(z.string()).optional(),
  errorDetails: z.array(z.string()).optional(),
  errorNotes: z.string().optional(),
});

type OptionType = {
  label: string;
  value: string;
};

// Example type definition, adjust based on your actual data structure
type DataItem = string[]; // If `data` is an array of arrays of strings
type Data = DataItem[];
type DataRow = string[]; // or more specific type reflecting your data structure

const DROS = () => {
  const [data, setData] = useState([]);
  const [selections, setSelections] = useState(Array(7).fill(null)); // Use null for uninitialized selections
  const router = useRouter();
  const [active, setActive] = useState<string | null>(null);
  const [activeDialog, setActiveDialog] = useState(null);
  const [selected, setSelected] = useState([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      drosCancel: false,
      salesRep: '',
      auditType: '',
      transDate: new Date(),
      auditDate: new Date(),
      errorLocation: [],
      errorDetails: [],
      errorNotes: '',
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  // Simulated options for MultiSelect components
  const errorLocationOptions: OptionType[] = [
    { value: 'location1', label: 'Location 1' },
    { value: 'location2', label: 'Location 2' },
  ];
  const errorDetailOptions: OptionType[] = [
    { value: 'detail1', label: 'Detail 1' },
    { value: 'detail2', label: 'Detail 2' },
  ];

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
    <main>
      <header>
        <div className="flex flow-row items-center justify-center max w-full mb-24">
          <LinkingPage />
        </div>
      </header>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col justify-center mx-auto p-4 space-y-8 max-w-md"
        >
          <FormField
            control={form.control}
            name="drosCancel"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Cancelled DROS</FormLabel>
                  <FormDescription>
                    Select When DROS Was Cancelled
                  </FormDescription>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="salesRep"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sales Rep</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select The Sales Rep" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="AJ">AJ</SelectItem>
                    <SelectItem value="Sammy">Sammy</SelectItem>
                    <SelectItem value="Amanda">Amanda</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  You can manage email addresses in your{" "}
                  <Link href="/examples/forms">email settings</Link>.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="auditType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Audit Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select The Audit Type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Firearms">Firearms</SelectItem>
                    <SelectItem value="Ammo">Ammo</SelectItem>
                    <SelectItem value="AIM">AIM</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  You can manage email addresses in your{" "}
                  <Link href="/examples/forms">email settings</Link>.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="transDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
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
              <FormItem className="flex flex-col">
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
          <Controller
            name="errorLocation"
            control={form.control}
            render={({ field: { onChange, value } }) => (
              <DataTableFacetedFilter
                options={errorLocationOptions}
                title="Error Location"
                selectedValues={value || []}
                onSelectionChange={(newSelectedValues) => onChange(newSelectedValues)}
              />
            )}
          />
          <Controller
            name="errorDetails"
            control={form.control}
            render={({ field: { onChange, value } }) => (
              <DataTableFacetedFilter
                options={errorDetailOptions}
                title="Error Details"
                selectedValues={value || []}
                onSelectionChange={(newSelectedValues) => onChange(newSelectedValues)}
              />
            )}
          />

          <FormField
            control={form.control}
            name="errorNotes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter Error Notes | Details</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Explain Details For Each Audit Type On Their Own Line"
                    // className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  You can <span>@mention</span> other users and organizations.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </main>
  );
};

export default DROS;
