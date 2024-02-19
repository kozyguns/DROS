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
          <CardTitle>Accepted Proof Of Residence Docs</CardTitle>
          <CardDescription>
          Don't Forget To Check For Valid CA DL / ID Along With Either Their FSC, Or One Of The Many Exemptions,<br/> 
          Such As Their Officer ID, CCW, Etc. Along With One Of The Following From Below:
            </CardDescription>
        </CardHeader>
        <CardContent>
          <span>
          Signed & Dated Lease Agreement For A Duration Of 1 Year<br/>
            Most Recent Property Tax Bill (Meets ATF Federal Req)<br/>
            Property Deed (Meets DOJ State Req)<br/>
            Current Utility Bill<br/>
            Most Recent W-2 + Current Utility Bill<br/>
            Current & Valid CA DMV Disabled Placard<br/>
            Valid CA CCW Permit<br/>
            Valid CA Hunting License<br/>
            Valid CA Fishing License<br/>
            Current & Valid Guard Card + Exposed Carry Card
          </span>
        </CardContent>
        <CardFooter className="flex justify-between">

        </CardFooter>
      </Card>
</div>
    )
  }
  export default IDsCard;