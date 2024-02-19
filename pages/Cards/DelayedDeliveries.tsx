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
          <CardTitle>Delayed Deliveries | Undetermined</CardTitle>
          <CardDescription>
          Follow These Steps To Process A Delayed Delivery & Release Out Of Fastbound
            </CardDescription>
        </CardHeader>
        <CardContent>
          <span>
          27.a. Enter The New Earliest Delivery Date<br/>
            If That Date Doesn’t Work,<br/> 
            Remove 3 Days From The Current Date (The Day You Are Disposing The Firearm)<br/>
            <hr/>
            <br/> 27.b. DROS Number<br/>
            In State Of CA, DOJ Submits All NICS FBI Background Checks, We Are To Utilize The Dros Number In Place Of The Nics Number<br/>
            <hr/>
            <br/> 27.c. Only “Delayed” Should Be Marked Here, Do Not Enter A Date For The “Firearms May Be Transferred On” Entry Field<br/>
            This Question Is Asking For A Date To Be Entered If The “Delayed Delivery” Notice Specifies A Date That We Are Given As The Release Date (This Has Yet To Happen)<br/>
            <hr/>
            <br/>27.d. Select “Proceed” Then Enter The New Earliest Delivery Date<br/>
            <hr/>
            <br/>32. Enter “DOJ Undetermined, Extended BG Check 30 Days”<br/>
            Continue With Normal Process To Complete The 4473<br/>
            After Saving - Have Customer Recertify, Then Save, Print, Continue As Normal<br/>
            <span className="text-red-500">REMEMBER TO DISPOSE THE FIREARM AFTER YOU PRINT A COPY OF THE 4473!</span>
          </span>
        </CardContent>
        <CardFooter className="flex justify-between">

        </CardFooter>
      </Card>
</div>
    )
  }
  export default IDsCard;