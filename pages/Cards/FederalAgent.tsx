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
                <CardTitle>Federal Agent DROS Info</CardTitle>
                <CardDescription>
                <span className="text-amber-500">Before Moving Forward</span>, Ask For A Business Card With Agency | Department Letterhead | Seal<br/>
                And <span className="text-orange-500">PRINT</span> THE Federal Doc Worksheet In The Info Section Below
                <hr/>
                <br/>If The Transaction Is For A <span className="text-blue-500">Blue Label</span> Firearm,<br/>
                Don't Forget To Fill Out The <span className="text-red-500">Blue Label</span> Form & Include It In The Pending Packet
                    </CardDescription>
                </CardHeader>
                <CardContent>
                <span>
                FSC Exemption Code<br/>
                      (X32 - Peace Officer - Federal - Active | X33 - Peace Officer - Federal - Honorably Retired)<br/>
                      <span class="blue-text text-darken-3">ONLY USED FOR FEDERAL AGENTS</span><br/>
                      <br/>Non-Roster Exemption<br/>
                      (AGENCY THEY ARE EMPLOYED WITH)<br/>
                      <br/>You <span class="red-text text-darken-2">CANNOT</span> Copy Federal ID's,<br/>
                      - Here Are The Required Docs:<br/>
                      A Scan | Copy Of CA DL | CA ID<br/>
                      & A Business Card With Agency | Department Letterhead | Seal
                      <br/>
                      Federal Agents Are <span className="text-red-500">NOT</span> 30 Day Exempt
                </span>
                </CardContent>
                <CardFooter className="flex justify-between">
                    
                </CardFooter>
            </Card>
        </div>
    )
  }
  export default IDsCard;