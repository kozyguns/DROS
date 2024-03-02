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
          <CardTitle>Accepted Address Correction Docs</CardTitle>
          <CardDescription>
          <p>Utilize This List If Their CA DL | CA ID Doesn&apos;t Have Their Current Physical Address</p>
            </CardDescription>
        </CardHeader>
        <CardContent>
        <div className="max-w-[425px]">
        <h2>Any ONE Of The Following Docs Below Will Suffice For A Handgun Purchase:</h2>
        <p>Customer Must Have A Valid FSC Card OR Valid CA CCW Permit</p>
          <ul className="list-none pl-4">
            <li>Valid CA Registration With The Current Physical Address For Any Of The Following:</li>
            <ul className="list-none pl-4">
              <li>Vehicle Registration</li>
              <li>Boat Registration</li>
              <li>Motorcycle Registration</li>
              <li>Off Road Vehicle Registration</li>
            </ul>
            <li>Valid CA CCW Permit</li>
          <li>Valid CA Hunting License</li>
          <li>Valid CA Fishing License</li>
          <li>Current & Valid Guard Card + Exposed Carry Card With Current Physical Address</li>
          <li>Most Recent Property Tax Bill (Meets ATF Federal Req), With One Of The Following:</li>
            <ul className="list-none pl-4">
              <li>Property Deed (Meets DOJ State Req)</li>
              <li>Current (Wtihin 90 Days) Utility Bill</li>
            </ul>
          <li>Most Recent W-2 + Current Utility Bill</li>
          <li>Current & Valid CA DMV Disabled Placard</li>
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