import type { NextPage } from "next";
import React, { ChangeEvent } from 'react';
import { FormEvent, useState } from "react";
import { Button } from "../components/ui/button";
import { useRouter } from "next/router";
import { Textarea } from "../components/ui/textarea"
import { Label } from "../components/ui/label"
import { Input } from "../components/ui/input"
import { Checkbox } from "../components/ui/checkbox";

const Home: NextPage = () => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);

  const handleButtonClick = (path: string) => {
    router.push(path);
  };

  const [cancel, setCancel] = useState(false);
  const [dros, setDROS] = useState("");
  const [salesrep, setRep] = useState("");
  const [error, setError] = useState("");
  const [details, setDetails] = useState("");
  const [notes, setNotes] = useState("");
  const [options, setOptions] = useState("");

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    let form = {
      cancel: cancel ? "TRUE" : "FALSE",
      dros,
      salesrep,
      error,
      details,
      notes,
      options,
      sheetName: "Test1"
  };  
  
  
    const sheetName = "Test1"; // supposed to be dynamic but this doesnt work either - reference submit.ts
  
    const rawResponse = await fetch("/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const content = await rawResponse.json();
  
    // print to screen
    // alert(content.data.tableRange);
  
    // Reset the form fields
    setCancel(false);
    setDROS("");
    setRep("");
    setError("");
    setDetails("");
    setNotes("");
    setOptions("");
  };

  return (

      <main>
      <div className="flex flex-row justify-center">
            {/* <Button onClick={() => handleButtonClick("/Navigation/NavMenu")} className="ml-1 flex-shrink">
                Navigation Menu
            </Button> */}
            {/* <Button onClick={() => handleButtonClick("/Profiles/Jimathy")} className="ml-2 flex-shrink">
              Slim Jim&apos;s Page
            </Button> */}
            <Button onClick={() => handleButtonClick("/NewAudits")} className="ml-2 flex-shrink px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
              New Audit Test Page
            </Button>
            <Button onClick={() => handleButtonClick("/DialogHover")} className="ml-2 flex-shrink px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
              Menu & Short Form
            </Button>
            <Button onClick={() => handleButtonClick("/DROSGuide")} className="ml-2 flex-shrink">
              DROS Guide
            </Button>
            <Button onClick={() => handleButtonClick("/Profiles/DROSDropdowns")} className="ml-2 flex-shrink px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
              Beta DROS Support Page
            </Button>
            {/* </div>
            <div className="flex flex-row justify-center mt-5"> */}
            <Button onClick={() => handleButtonClick("/Profiles/GeneratePage")} className="ml-2 flex-shrink">
              Text Generation Page
            </Button>
        <Button onClick={() => handleButtonClick("/DROSAudits")} className="ml-2 flex-shrink px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
              DROS Auditing
            </Button>
            </div>
        <div className="max-w-8xl mx-auto py-10">
          <form className="py-5 space-y-5" onSubmit={handleSubmit}>
            <div className="flex items-center justify-center">
              <label htmlFor="dros" className="sr-only">
                DROS
              </label>
              <Input
                value={dros}
                onChange={(e) => setDROS(e.target.value)}
                type="text"
                name="dros"
                id="dros"
                className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md"
                placeholder="Enter DROS Number"
                style={{ padding: "0.5rem" }}
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="email" className="sr-only">
                Sales Rep
              </label>
              <Input
                value={salesrep}
                onChange={(e) => setRep(e.target.value)}
                type="text"
                name="salesrep"
                id="salesrep"
                className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md"
                placeholder="Which Sales Rep"
                style={{ padding: "0.5rem" }}
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="error" className="sr-only">
              Error Location
              </label>
              <Input
                value={error}
                onChange={(e) => setError(e.target.value)}
                type="text"
                name="error"
                id="error"
                className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md"
                placeholder="Error Location"
                style={{ padding: "0.5rem" }}
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="details" className="sr-only">
                Error Details
              </label>
              <Textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                id="details"
                className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md"
                placeholder="Error Details"
                style={{ padding: "0.5rem" }}
              />
            </div>
            <div className="flex items-center justify-center ">
              <Textarea 
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                name="notes" // Add the name attribute
                placeholder="Error Notes | Details" 
                id="notes" 
                className="w-64 gap-1.5"
              />
            </div>
            {/* <div className="flex items-center justify-center">
            <Select>
              <SelectTrigger 
                name="options" 
                className="w-[180px]" 
                id="options"
              >
                <SelectValue placeholder="Count" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="A" onClick={() => handleSelectChange("A")}>One</SelectItem>
                <SelectItem value="B" onClick={() => handleSelectChange("B")}>Two</SelectItem>
                <SelectItem value="C" onClick={() => handleSelectChange("C")}>Three</SelectItem>
              </SelectContent>
            </Select>
            </div> */}
            <div className="flex items-center justify-center">
              <Button type="submit">Save</Button>
            </div>
          </form>
        </div>

      </main>

  );
};

export default Home;
