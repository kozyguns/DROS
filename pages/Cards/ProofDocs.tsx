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
          <CardTitle>Accepted Proof Of Residence Docs</CardTitle>
          <CardDescription>
          <p>Don&apos;t Forget To Check For Valid CA DL | ID Along With Either Their FSC, Or One Of The Many Exemptions,</p> 
          <p>Such As Their Officer ID, CCW, Etc. Along With One Of The Following From Below:</p>
            </CardDescription>
        </CardHeader>
        <CardContent>
        <div className="max-w-[425px]">
        <h2>Required Documents:</h2>
          <ul className="list-disc pl-4">
            <li>Signed & Dated Lease Agreement For A Duration Of 1 Year</li>
            <li>Most Recent Property Tax Bill (Meets ATF Federal Req)</li>
            <li>Property Deed (Meets DOJ State Req)</li>
            <li>Current Utility Bill</li>
            <li>Most Recent W-2 + Current Utility Bill</li>
            <li>Current & Valid CA DMV Disabled Placard</li>
            <li>Valid CA CCW Permit</li>
            <li>Valid CA Hunting License</li>
            <li>Valid CA Fishing License</li>
            <li>Current & Valid Guard Card + Exposed Carry Card</li>
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