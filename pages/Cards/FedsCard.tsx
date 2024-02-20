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
        <div className="flex flex-col items-center justify-center mb-10" >
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Federal Limits Apply</CardTitle>
          <CardDescription>
          If The Purchaser&apos;s VALID CA DL | CA ID States <span className="text-blue-500">"Federal Limits Apply"</span> In The Top Right Corner,<br/> 
          We Need One Of The Docs Below
          </CardDescription>
        </CardHeader>
        <CardContent>
          <span>
          <dl>
            <dt>Valid, Unexpired U.S. Passport Or Passport Card</dt>
            <dt>Certified Copy Of U.S. Birth Certificate, Or One Of The Following, As Long As They Are Issued By The U.S. Department Of State</dt>
            <dd>- Certification Of Birth Abroad (FS-545)</dd>
            <dd>- Certification Of Report Of Birth (DS-1350)</dd>
            <dd>- Consular Report Of Birth Abroad Of A Citizen Of The United States Of America (FS240)</dd>
            <dt>Student | Work VISA Holders Must Have All Of The Following:</dt>
            <dd>- Unexpired Foreign Passport</dd>
            <dd>- Valid U.S. Immigrant VISA</dd>
            <dd>- Approved Record Of Arrival|Departure (I-94) Form</dd>
            <dt>Certified Copy Of Birth Certificate From A U.S. Territory</dt>
            <dt>Certificate Of Naturalization Or U.S. Citizenship</dt>
            <dt>Valid, Unexpired Permanent Resident Card</dt>
          </dl>
          </span>
        </CardContent>
        <CardFooter className="flex justify-between">

        </CardFooter>
      </Card>
</div>
    )
  }
  export default IDsCard;