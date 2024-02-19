import * as React from "react"
import { useRouter } from "next/router";
  import { Button } from "../../components/ui/button"
import { cn } from "../../components/lib/cn";

  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../../components/ui/card"
  import { Input } from "../../components/ui/input"
  import { Label } from "../../components/ui/label"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "../../components/ui/select"
  
  function IDsCard ({ className }: { className?: string }) {
  const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center w-full" >
            <Card className="flex flex-col w-full">
                <CardHeader>
                <CardTitle>Active Duty Out Of State Info</CardTitle>
                <CardDescription>
                <span className="text-orange-500">Before Moving Forward - </span><br/>
                    <span className="text-orange-500">PRINT</span> THE Federal Doc Worksheet In The Link Below<br/>
                    <hr/>
                      <br/>If The Transaction Is For A <span className="text-blue-500">Blue Label</span> Firearm,<br/>
                      Don't Forget To Fill Out The <span className="text-blue-500">Blue Label</span> Form & Include It In The Pending Packet
                    </CardDescription>
                </CardHeader>
                <CardContent>
                <span>
                <div>
                  <h2>Required Documents:</h2>
                  <ul className="list-disc pl-4">
                    <li>PCS Orders Containing Effective Date & Order Number</li>
                    <li>Proof Of CA Residence (Anything Listed In "Address Correction Docs")</li>
                    <li>
                      Photo Copy Out Of State DL / ID As Normal
                      <ul className="list-disc pl-4">
                        <li>Write Down DOD ID#, Rank & Branch</li>
                      </ul>
                    </li>
                  </ul><br/>
                  <hr /><br/>
                  <p>FSC Exemption Code</p>
                  <p>(X21 - Military - Active Duty)</p><br/>
                  <hr /><br/>
                  <p>Military Are <span className="text-red-500">NOT</span> Roster | 30 Day Exempt</p>
                </div>
                </span>
                </CardContent>
                <CardFooter className="flex justify-between">
                    
                </CardFooter>
            </Card>
        </div>
    )
  }
  export default IDsCard;