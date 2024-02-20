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
                <CardTitle>Retired Military Info</CardTitle>
                <CardDescription>
                <span className="text-orange-500">Before Moving Forward - </span><br/>
                    <span className="text-orange-500">PRINT</span> THE Federal Doc Worksheet In The Link Below
                    </CardDescription>
                </CardHeader>
                <CardContent>
                <div className="max-w-[425px]">
                <h2>Required Documents:</h2>
                <ul className="list-disc pl-4">
                <p>If The Veteran&apos;s DL | ID Doesn&apos;t Indicate VETERAN Status, We Need The Following:</p>
                  <ul className="list-disc pl-4">
                    <li>We Need A Copy Of Their DD-214 (Condition Of Discharge)</li>
                    <li>Make A Copy | Scan The DD-214 To Qualify For Blue Label &</li>
                    <li>Write Down DOD ID#, Rank & Branch On Fed Doc Worksheet (Print From Link Below)</li>
                  </ul>
                  <hr className="my-4" />
                      <p>FSC Exemption Code</p>
                        <ul className="list-disc pl-4">
                          <li>(X25 - Military - Honorably Retired)</li>
                        </ul>
                        <hr className="my-4" />
                      <p>Veterans Are <span className="text-red-500">NOT</span> Non-Roster | 30 Day Exempt</p>
                  </ul>
                </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    
                </CardFooter>
            </Card>
        </div>
    )
  }
  export default IDsCard;