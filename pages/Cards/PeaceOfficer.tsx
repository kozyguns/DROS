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
            <CardTitle>Peace | Public Officer Info</CardTitle>
            <CardDescription>
                There Are A Couple Ways To Understand If The Officer Is A Peace Officer, Or A Public Officer<br/>
                You Will Need To Scan The Front And Rear Of Their Department ID Card (Including ID Number), For Documentation<br/>
                <hr/>
                <br/>If The Transaction Is For A <span className="text-blue-500">Blue Label</span> Firearm,<br/>
                Don&apos;t Forget To Fill Out The <span className="text-blue-500">Blue Label</span> Form & Include It In The Pending Packet
                </CardDescription>
            </CardHeader>
            <CardContent>
            <div className="max-w-[425px]">
            <h2>Required Documents:</h2>
            <ul className="list-disc pl-4">
            <li>Any County Probation Or Parole Officer = PEACE OFFICER</li>
              <ul className="list-disc pl-4">
              <li>(PENAL CODE 830.x Found On Rear Of Department ID Card Typically)</li>
              </ul>
            <li>Any County Correctional Officer = PUBLIC OFFICER</li>
              <ul className="list-disc pl-4">
              <li>These Officers Are Considered "Particular And Limited Authority Peace Officers"</li>
              <li>(PENAL CODE 831.x Found On Rear Of Department ID Card Typically)</li>
              </ul>
            <li>You Can Verify Any Other PC Code Variations In The Link Below</li>
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