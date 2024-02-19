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
          <CardTitle>Federal Limits Apply With Name Change</CardTitle>
          <CardDescription>
            If The CA DL | CA ID States <span className="text-blue-500">"Federal Limits Apply"</span> <span className="text-red-500">AND</span> Their Name Doesn't Match The Proof Document,<br/>
            We Need One Of The Docs Below
            </CardDescription>
        </CardHeader>
        <CardContent>
          <span>
          <dl>
            <dt>An Adoption Document That Contains The Legal Name Of The Applicant As A Result Of The Adoption</dt>
            <dt>A Name Change Document That Contains The Applicant’s Legal Name Both Before And, As A Result Of, The Name Change</dt>
            <dt>Married | Divorced:</dt>
            <dd>- A Marriage Certificate</dd>
            <dd>- A Dissolution Of Marriage Document That Contains The Legal Name Of The Applicant As A Result Of The Court Action</dd>
            <dt>Domestic Partnerships:</dt>
            <dd>- A Certificate, Declaration Or Registration Document Verifying The Formation Of A Domestic Partnership</dd>
            <dd>- A Dissolution Of Domestic Partnership Document That Contains The Legal Name Of The Applicant As A Result Of The Court Action</dd>
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