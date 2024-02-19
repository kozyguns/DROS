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
                <CardTitle>Retired Military Info</CardTitle>
                <CardDescription>
                <span className="text-orange-500">Before Moving Forward - </span><br/>
                    <span className="text-orange-500">PRINT</span> THE Federal Doc Worksheet In The Link Below
                    </CardDescription>
                </CardHeader>
                <CardContent>
                <span>
                If The Veteran's DL | ID Doesn't Indicate VETERAN Status,<br/>
                      We Need A Copy Of Their DD-214 (Condition Of Discharge) -<br/>
                      Make A Copy | Scan The DD-214 To Qualify For Blue Label &<br/>
                      Write Down DOD ID#, Rank & Branch On Fed Doc Worksheet (Print From Link Below)
                      <hr/>
                      FSC Exemption Code<br/>
                      (X25 - Military - Honorably Retired)
                      <hr/>
                      Veterans Are <span className="text-red-500">NOT</span> Non-Roster | 30 Day Exempt
                </span>
                </CardContent>
                <CardFooter className="flex justify-between">
                    
                </CardFooter>
            </Card>
        </div>
    )
  }
  export default IDsCard;