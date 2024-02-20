import * as React from "react"
import { useRouter } from "next/router";

  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../../components/ui/card"
  
  function IDsCard ({ className }: { className?: string }) {
  const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center w-full" >
            <Card className="flex flex-col w-full">
                <CardHeader>
                <CardTitle>Federal Agent DROS Info</CardTitle>
                <CardDescription>
                <span className="text-amber-500">Before Moving Forward</span>, Ask For A Business Card With Agency | Department Letterhead | Seal<br/>
                And <span className="text-orange-500">PRINT</span> THE Federal Doc Worksheet In The Info Section Below
                <hr/>
                <br/>If The Transaction Is For A <span className="text-blue-500">Blue Label</span> Firearm,<br/>
                Don&apos;t Forget To Fill Out The <span className="text-red-500">Blue Label</span> Form & Include It In The Pending Packet
                    </CardDescription>
                </CardHeader>
                <CardContent>
                <div className="max-w-[425px]">
                <h2>DROS FSC Exemption Fields:</h2>
                 <ul className="list-disc pl-4">
                  <p>FSC Exemption Code</p>
                    <ul className="list-disc pl-4">
                      <li><p>(X32 - Peace Officer - Federal - Active |</p> 
                      <p>X33 - Peace Officer - Federal - Honorably Retired)</p>
                      <p><span className="blue-text text-darken-3">ONLY USED FOR FEDERAL AGENTS</span></p></li>
                      </ul>
                    <p>Non-Roster Exemption</p>
                      <ul className="list-disc pl-4">
                        <li>(AGENCY THEY ARE EMPLOYED WITH)
                        <br/>You <span className="red-text text-darken-2">CANNOT</span> Copy Federal ID&apos;s,</li>
                        </ul>
                        </ul>
                      <p>Here Are The Required Docs:</p>
                        <ul className="list-disc pl-4">
                        <li>A Scan | Copy Of CA DL | CA ID</li>
                        <li>A Business Card With Agency | Department Letterhead | Seal</li>
                        </ul>
                      
                      
                      <br/>
                      <p>Federal Agents Are <span className="text-red-500">NOT</span> 30 Day Exempt</p>
                </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    
                </CardFooter>
            </Card>
        </div>
    )
  }
  export default IDsCard;