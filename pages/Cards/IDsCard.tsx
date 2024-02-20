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
          <CardTitle>State ID Verification</CardTitle>
          <CardDescription>CA DOJ States The Following As Required Docs For Purchase</CardDescription>
        </CardHeader>
        <CardContent>
        <div className="max-w-[425px]">
        <h2>Required Documents:</h2>
          <ul className="list-disc pl-4">
          <li>A Valid CA DL | CA ID Issued By The DMV</li>
          <li>OR A Military ID With The Following:</li>
            <ul className="list-disc pl-4">
            <li>PCS Orders</li>
            </ul>
          </ul>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p>
          Temporary DL | ID's Are <span className="text-red-500">NOT</span> Accepted Forms Of Proof Of Identity And Age
          </p>
        </CardFooter>
      </Card>
</div>
    )
  }
  export default IDsCard;