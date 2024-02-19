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
                <CardTitle>Off-Roster LEO PPT's</CardTitle>
                <CardDescription>
                Check Which Group Their Agency Is BEFORE Starting LEO Off-Roster PPT Transactions
                    </CardDescription>
                </CardHeader>
                <CardContent>
                <span>
                If You Haven't Already Asked If They Were With A Differenct Agency When They Purchased The Firearm,<br/> 
                Do So Now, Before Moving Any Further<br/>
                <br/>If They Were NOT Employed By A Different Agency, Look Up The Current Agency's Info Below<br/>
                If They WERE Employed With A Different Agency, Reference That Agency's Group Info, Not The Current Agency's Group Info
                </span>
                </CardContent>
                <CardFooter className="flex justify-between">

                </CardFooter>
            </Card>
        </div>
    )
  }
  export default IDsCard;