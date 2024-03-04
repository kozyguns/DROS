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

  
  function PeaceOfficerDROS ({ className }: { className?: string }) {
  const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center w-[515px]" >  
        <Card className="flex flex-col w-full">
            <CardHeader>
            <CardTitle>Peace Officer DROS Guide</CardTitle>
            <CardDescription>
                <p>This Is A Reference Guide On How To Fill Out Your DROS Exemption Fields</p><br/>
                <p>If The Transaction Is For A <span className="text-blue-500">Blue Label</span> Firearm,</p>
                <p>Fill Out The <span className="text-blue-500">Blue Label</span> Form & INCLUDE It In Your Pending Packet</p>
                <hr className="my-4" />
                <p><span className="text-red-500">We Can NO LONGER Accept 10 Day Wait Exemption Letters For CDCR</span></p>
                <p>This Means <span className="text-blue-500">NO MORE</span> Same-Day Sales For CDCR</p>
                </CardDescription>
            </CardHeader>
            <CardContent>
            <Tabs defaultValue="" className="w-full">
          <TabsList>
            <TabsTrigger value="account">Without 10 Day Exemption Letter</TabsTrigger>
            <TabsTrigger value="password">With 10 Day Exemption Letter</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
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
          <TabsContent value="password">
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
            <HoveredLink href="https://law.justia.com/codes/california/2022/code-pen/part-2/title-3/chapter-4-5/"><span className="text-orange-500">Penal Codes Defined</span></HoveredLink>  
            </CardFooter>
            </Card>
            
        </div>
    )
  }
  export default PeaceOfficerDROS;