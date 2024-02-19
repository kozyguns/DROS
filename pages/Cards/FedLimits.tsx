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
            The ATF Requires A Valid Photo ID Along With One Other Valid Government-Issued Document That Shows The Current Address<br/>
            The Following Are Accepted Documents, And Can Be Combined To Meet The Requirements</CardDescription>
        </CardHeader>
        <CardContent>
          <span>
          <dl>
            <dt>A Valid Photo DL | ID Containing The Following Info:</dt>
            <dd>- Transferee’s Name</dd>
            <dd>- Residence Address</dd>
            <dd>- Date Of Birth</dd>
            <dt>A Valid Passport Which Contains The Following Info:</dt>
            <dd>- Transferee’s Name</dd>
            <dd>- Date Of Birth</dd>
            <dd>- Photograph Of Purchaser</dd>
            <dt>Vehicle Registration Containing The Following Info:</dt>
            <dd>- Current Physical Address</dd>
            <dt>A Valid Hunting License</dt>
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