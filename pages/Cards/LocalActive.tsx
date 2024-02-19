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
                <CardTitle>Local Active Duty Info</CardTitle>
                <CardDescription>
                <span className="text-orange-500">Before Moving Forward - </span><br/>
                    <span className="text-orange-500">PRINT</span> THE Federal Doc Worksheet In The Link Below
                    </CardDescription>
                </CardHeader>
                <CardContent>
                <span>
                Photo Copy | Scan CA DL | CA ID<br/>
                      Write Down DOD ID#, Rank & Branch<br/>
                      Proof Of CA Residence (Anything Listed In "Address Correction Docs")
                      <hr/>
                      FSC Exemption Code<br/>
                      (X21 - Military - Active Duty | X22 - Military - Active Reserve)
                      <hr/>
                      Military Are <span className="text-red-500">NOT</span> Roster | 30 Day Exempt
                </span>
                </CardContent>
                <CardFooter className="flex justify-between">
                    
                </CardFooter>
            </Card>
        </div>
    )
  }
  export default IDsCard;