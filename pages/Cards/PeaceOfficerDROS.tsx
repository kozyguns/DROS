import * as React from "react"
import { useRouter } from "next/router";
import { Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "../../components/ui/tabs"
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../../components/ui/card"
import { HoveredLink, Menu, MenuItem, ProductItem } from "../../components/ui/navbar-menu";
import styled from 'styled-components';


const StyledTabsList = styled(TabsList)`
  display: flex;
  flex-wrap: nowrap; // Prevent wrapping of tabs
  overflow-x: auto; // Allow horizontal scrolling
  -webkit-overflow-scrolling: touch; // Smooth scrolling on touch devices
  border-bottom: 1px solid #ccc; // Optional: adds a line under your tabs
  &::-webkit-scrollbar {
    display: none; // Optionally hide the scrollbar
  }
`;

  
  function PeaceOfficerDROS ({ className }: { className?: string }) {
  const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center w-[515px]" >  
        <Card className="flex flex-col w-full">
            <CardHeader>
            <CardTitle>Peace Officer DROS Guide</CardTitle>
            <CardDescription>
                <p>There Are A Couple Ways To Understand If The Officer Is A Peace Officer, Or A Public Officer. 
                  You Will Need To Scan The Front And Rear Of Their Department ID Card (Including ID Number), For Documentation</p><br/>
                <p>If The Transaction Is For A <span className="text-blue-500">Blue Label</span> Firearm,</p>
                <p>Fill Out The <span className="text-blue-500">Blue Label</span> Form & INCLUDE It In Your Pending Packet</p>
                <hr className="my-4" />
                <p><span className="text-red-500">We Can NO LONGER Accept 10 Day Wait Exemption Letters For CDCR</span></p>
                <p>This Means <span className="text-blue-500">NO MORE</span> Same-Day Sales For CDCR</p>
                </CardDescription>
            </CardHeader>
            <CardContent>
            <Tabs defaultValue="" className="w-full">
          <TabsList className="flex flex-wrap mb-16 w-full">
            <div className="flex flex-row w-full justify-center mb-6">
            <TabsTrigger value="info">General Info</TabsTrigger>
            </div>
            <TabsTrigger value="withoutletter">Without 10 Day Exemption</TabsTrigger>
            <TabsTrigger value="withletter">With 10 Day Exemption</TabsTrigger>
          </TabsList>
          <TabsContent value="info">
          <div className="max-w-full">
            <h2>Required Documents:</h2>
            <ul className="list-none pl-4">
            <li>Any County Probation Or Parole Officer = PEACE OFFICER</li>
              <ul className="list-none pl-4">
              <li>(PENAL CODE 830.x Found On Rear Of Department ID Card Typically)</li>
              </ul>
            <li>Any County Correctional Officer = PUBLIC OFFICER</li>
              <ul className="list-none pl-4">
              <li>These Officers Are Considered &quot;Particular And Limited Authority Peace Officers&quot;</li>
              <li>(PENAL CODE 831.x Found On Rear Of Department ID Card Typically)</li>
              </ul>
            <li>You Can Verify Any Other PC Code Variations In The Link Below</li>
            </ul>
            </div>
            <hr className="my-4" />
            </TabsContent>
          <TabsContent value="withoutletter">
          <div className="flex flex-col w-full">
            <h2><span className="text-amber-500">Start By Selecting &quot;Exempt Handgun Sale&quot;</span></h2>
            <hr className="my-4" />
            <ul className="list-none pl-4">
                  <p>FSC Exemption Code</p>
                    <ul className="list-none pl-4">
                      <li>(X31 - PEACE OFFICER - CALIFORNIA - ACTIVE)</li>
                      </ul>
                      <p>30-Day Restriction Exemption</p>
                      <ul className="list-none pl-4">
                        <li>(PEACE OFFICER - CALIFORNIA - ACTIVE)</li>
                      </ul>
                      <p>Waiting Period Exemption | 10 Day Wait</p>
                      <ul className="list-none pl-4">
                        <li>(Letter Required Dated Within 30 Days)</li>
                      </ul>
                  <p>Non-Roster Exemption</p>
                      <ul className="list-none pl-4">
                        <li>(AGENCY THEY ARE EMPLOYED WITH)</li>
                      </ul>
                      </ul>
            </div>
            <hr className="my-4" />
            </TabsContent>
          <TabsContent value="withletter">
          <div className="flex flex-col w-full">
            <h2><span className="text-amber-500">Start By Selecting &quot;Peace Officer Non-Roster Handgun Sale (Letter Required)&quot;</span></h2>
            <hr className="my-4" />
            <ul className="list-none pl-4">
                  <p>FSC Exemption Code</p>
                    <ul className="list-none pl-4">
                      <li>(X31 - PEACE OFFICER - CALIFORNIA - ACTIVE)</li>
                      </ul>
                      <p>30-Day Restriction Exemption</p>
                      <ul className="list-none pl-4">
                        <li>(PEACE OFFICER - ACTIVE - LETTER REQUIRED)</li>
                      </ul>
                      <p>Waiting Period Exemption | 10 Day Wait</p>
                      <ul className="list-none pl-4">
                        <li>(PEACE OFFICER (LETTER REQUIRED))</li>
                      </ul>
                  <p>Non-Roster Exemption</p>
                      <ul className="list-none pl-4">
                        <li>(AGENCY THEY ARE EMPLOYED WITH)</li>
                      </ul>
                      </ul>
            </div>
            <hr className="my-4" />
            </TabsContent>
            
            </Tabs>
            </CardContent>
            <CardFooter className="flex justify-between">
            <a href="https://law.justia.com/codes/california/2022/code-pen/part-2/title-3/chapter-4-5/"><span className="text-orange-500">Penal Codes Defined</span></a>
            <a href="https://oag.ca.gov/firearms/exemptpo"><span className="text-orange-500">Agency Group Info</span></a>  
            </CardFooter>
            </Card>
            
        </div>
    )
  }
  export default PeaceOfficerDROS;