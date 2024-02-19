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
                <CardTitle>Reserve Officer Info</CardTitle>
                <CardDescription>
                    
                    </CardDescription>
                </CardHeader>
                <CardContent>
                <span>
                Reserve Officers CAN Purchase Non-Roster Firearms &<br/>
                They Are FSC Exempt<br/>
                Reserve Officers Are <span className="text-red-500">NOT</span> 30 Day Exempt
                <hr/>
                <br/>If The Transaction Is For A <span className="text-blue-500">Blue Label</span> Firearm,<br/>
                Don't Forget To Fill Out The <span className="text-blue-500">Blue Label</span> Form & Include It In The Pending Packet
                </span>
                </CardContent>
                <CardFooter className="flex justify-between">
                    
                </CardFooter>
            </Card>
        </div>
    )
  }
  export default IDsCard;