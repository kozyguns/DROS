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
                <CardTitle>Peace | Public Officer Info</CardTitle>
                <CardDescription>
                    There Are A Couple Ways To Understand If The Officer Is A Peace Officer, Or A Public Officer<br/>
                    You Will Need To Scan The Front And Rear Of Their Department ID Card (Including ID Number), For Documentation<br/>
                    <hr/>
                    <br/>If The Transaction Is For A <span className="text-blue-500">Blue Label</span> Firearm,<br/>
                    Don't Forget To Fill Out The <span className="text-blue-500">Blue Label</span> Form & Include It In The Pending Packet
                    </CardDescription>
                </CardHeader>
                <CardContent>
                <span>
                Any County Probation Or Parole Officer = PEACE OFFICER<br/>
                (PENAL CODE 830.x Found On Rear Of Department ID Card Typically)<br/>
                <br/>Any County Correctional Officer = PUBLIC OFFICER<br/>
                These Officers Are Considered "Particular And Limited Authority Peace Officers"<br/>
                (PENAL CODE 831.x Found On Rear Of Department ID Card Typically)<br/>
                <br/>You Can Verify Any Other PC Code Variations In The Link Below<br/>
                </span>
                </CardContent>
                <CardFooter className="flex justify-between">
                    
                </CardFooter>
            </Card>
        </div>
    )
  }
  export default IDsCard;