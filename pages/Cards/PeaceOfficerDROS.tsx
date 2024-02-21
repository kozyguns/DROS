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
            <CardTitle>Peace Officer DROS Guide</CardTitle>
            <CardDescription>
                <p>This Is A Reference Guide On How To Fill Out Your DROS Exemption Fields</p><br/>
                <p>If The Transaction Is For A <span className="text-blue-500">Blue Label</span> Firearm,</p>
                <p>Fill Out The <span className="text-blue-500">Blue Label</span> Form & INCLUDE It In Your Pending Packet</p>
                <hr className="my-4" />
                <p><span className="text-red-500">We Can NO LONGER Accept 10 Day Wait Exemption Letters For CDCR</span></p>
                <p>This Means <span className="text-blue-500">NO MORE</span> Same-Day Sales For CDCR</p>
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
              <li>These Officers Are Considered &quot;Particular And Limited Authority Peace Officers&quot;</li>
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