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
  
  function FedsCard ({ className }: { className?: string }) {
  const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center w-full" >
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Federal Limits Apply</CardTitle>
          <CardDescription>
          If The Purchaser&apos;s VALID CA DL | CA ID States <span className="text-blue-500">&quot;Federal Limits Apply&quot;</span> In The Top Right Corner,<br/> 
          We Need One Of The Docs Below
          </CardDescription>
        </CardHeader>
        <CardContent>
        <div className="max-w-[425px]">
        <h2>Required Documents:</h2>
          <ul className="list-disc pl-4">
            <li>Valid, Unexpired U.S. Passport Or Passport Card</li>
            <li>Certified Copy Of U.S. Birth Certificate, Or One Of The Following, As Long As They Are Issued By The U.S. Department Of State</li>
              <ul className="list-disc pl-4">
                <li>- Certification Of Birth Abroad (FS-545)</li>
                <li>- Certification Of Report Of Birth (DS-1350)</li>
                <li>- Consular Report Of Birth Abroad Of A Citizen Of The United States Of America (FS240)</li>
              </ul>
            <li>Student | Work VISA Holders Must Have All Of The Following:</li>
              <ul className="list-disc pl-4">
                <li>- Unexpired Foreign Passport</li>
                <li>- Valid U.S. Immigrant VISA</li>
                <li>- Approved Record Of Arrival|Departure (I-94) Form</li>
                <li>Certified Copy Of Birth Certificate From A U.S. Territory</li>
                <li>Certificate Of Naturalization Or U.S. Citizenship</li>
                <li>Valid, Unexpired Permanent Resident Card</li>
              </ul>
          </ul>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">

        </CardFooter>
      </Card>
</div>
    )
  }
  export default FedsCard;