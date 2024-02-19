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
          <CardTitle>State ID Verification</CardTitle>
          <CardDescription>CA DOJ States The Following As Required Docs For Purchase</CardDescription>
        </CardHeader>
        <CardContent>
          <span>
          A Valid CA DL | CA ID Issued By The DMV<br />
          OR A Military ID With The Following:<br />
          - PCS Orders
          </span>
        </CardContent>
        <CardFooter className="flex justify-between">
          <span>
          Temporary DL | ID's Are <span className="text-red-500">NOT</span> Accepted Forms Of Proof Of Identity And Age
          </span>
        </CardFooter>
      </Card>
</div>
    )
  }
  export default IDsCard;