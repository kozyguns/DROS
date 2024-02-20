import type { NextPage } from "next";
import React from "react";
import { FormEvent, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { Button } from "../components/ui/button";
import { useRouter } from "next/router";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"
import { Textarea } from "../components/ui/textarea"
import { Label } from "../components/ui/label"
import { Input } from "../components/ui/input"

const Home: NextPage = () => {
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
      name,
      email,
      phone,
      message,
      whateva,
      options,
      sheetName: "Test1" // supposed to be dynamic but this doesn't actually affect it for some reason
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
            <Button onClick={() => handleButtonClick("/Profiles/MenuTest")} className="mr-1 flex-shrink">
              Menu Test Page
            </Button>
            <Button onClick={() => handleButtonClick("/Navigation/NavMenu")} className="ml-1 flex-shrink">
                Navigation Menu
            </Button>
            <Button onClick={() => handleButtonClick("/Profiles/SelectPage")} className="ml-2 flex-shrink">
              Dynamic Select Page
            </Button>
            <Button onClick={() => handleButtonClick("/Profiles/Jimathy")} className="ml-2 flex-shrink">
              Slim Jim&apos;s Page
            </Button>
            <Button onClick={() => handleButtonClick("/Profiles/CascadingPage")} className="ml-2 flex-shrink">
              Cascading Dropdown Page
            </Button>
            </div>
            <div className="flex flex-row justify-center mt-5">
            <Button onClick={() => handleButtonClick("/Profiles/LampPage")} className="ml-2 flex-shrink">
              Lamp Page
            </Button>
            <Button onClick={() => handleButtonClick("/Profiles/SparksPage")} className="ml-2 flex-shrink">
              Sparks Page
            </Button>
            <Button onClick={() => handleButtonClick("/Profiles/GeneratePage")} className="ml-2 flex-shrink">
              Text Generation Page
            </Button>
            <Button onClick={() => handleButtonClick("/Cards/IDsCard")} className="ml-2 flex-shrink">
              Card Page
            </Button>
            </div>
        <div className="max-w-8xl mx-auto py-10">
          <form className="py-5 space-y-5" onSubmit={handleSubmit}>
            <div className="flex items-center justify-center">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                id="name"
                className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md"
                placeholder="Wuz Yo Name"
                style={{ padding: "0.5rem" }}
              />
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
            <div className="flex items-center justify-center">
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
            </div>
            <div className="flex items-center justify-center">
              <Button type="submit">Save</Button>
            </div>
          </form>
        </div>
        
      </main>

  );
};

export default Home;
