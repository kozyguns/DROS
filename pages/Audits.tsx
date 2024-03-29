import type { NextPage } from "next";
import React from "react";
import { FormEvent, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { Button } from "../components/ui/button";
import { useRouter } from "next/router";
import { Checkbox } from "../components/ui/checkbox";
import { Switch } from "../components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";

const Audits = () => {
  const router = useRouter();

  const handleButtonClick = (path: string) => {
    router.push(path);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [whateva, setWhateva] = useState("");
  const [options, setOptions] = useState("");

  const handleSelectChange = (value: string) => {
    setOptions(value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    let form = {
      email,
      phone,
      message,
      whateva,
      options,
      sheetName: "Audits" // supposed to be dynamic but this doesn't actually affect it for some reason
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
    setMessage("");
    setPhone("");
    setName("");
    setEmail("");
    setWhateva("");
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
            <Button onClick={() => handleButtonClick("/DROSInWorks")} className="ml-2 flex-shrink">
              Future DROS
            </Button>
            <Button onClick={() => handleButtonClick("/DialogHover")} className="ml-2 flex-shrink px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
              Hovering Page
            </Button>
            <Button onClick={() => handleButtonClick("/DialogPage")} className="ml-2 flex-shrink">
              Dialog Page
            </Button>
            <Button onClick={() => handleButtonClick("/Profiles/DROSDropdowns")} className="ml-2 flex-shrink px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
              DROS Support Page
            </Button>
            {/* </div>
            <div className="flex flex-row justify-center mt-5"> */}
            <Button onClick={() => handleButtonClick("/Profiles/GeneratePage")} className="ml-2 flex-shrink">
              Text Generation Page
            </Button>
        <Button onClick={() => handleButtonClick("/DROS")} className="ml-2 flex-shrink px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
              DROS
            </Button>
            </div>
        <div className="flex flex-col max-w-8xl mx-auto py-10">
          <form className="py-5 space-y-5" onSubmit={handleSubmit}>
          <div className="flex flex-row justify-start items-center space-x-4">
            {/* Switch and its Label */}
            <div className="flex flex-row items-center space-x-2">
                <Switch id="dros-switch" />
                <Label htmlFor="dros-switch">DROS Audits</Label>
            </div>

            {/* Checkbox, its Label, and Description */}
            <div className="flex items-center space-x-2">
                <Checkbox id="cancelled" />
                <div className="grid gap-1.5">
                    <label
                        htmlFor="cancelled"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        DROS Has Been Cancelled
                    </label>
                    <p className="text-sm">
                        Only Check If DROS Was Cancelled
                    </p>
                    </div>
                </div>
            </div>


              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="dros"
                id="dros"
                className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md"
                placeholder="Include '-' From DROS"
                style={{ padding: "0.5rem" }}
              />
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Accept terms and conditions
                </Label>
                </div>

            <div className="flex items-center justify-center">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md"
                placeholder="Email Shawty"
                style={{ padding: "0.5rem" }}
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="phone" className="sr-only">
                Phone
              </label>
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                name="phone"
                id="phone"
                className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md"
                placeholder="Dem Digitz"
                style={{ padding: "0.5rem" }}
              />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md"
                placeholder="Yo Message"
                style={{ padding: "0.5rem" }}
              />
            </div>
            <div className="flex items-center justify-center ">
              <Textarea 
                value={whateva}
                onChange={(e) => setWhateva(e.target.value)}
                name="whateva" // Add the name attribute
                placeholder="YeahKWhateva." 
                id="whateva" 
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

export default Audits;
