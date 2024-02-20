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
                <CardTitle>Off-Roster LEO PPT's</CardTitle>
                <CardDescription>
                Check Which Group Their Agency Is BEFORE Starting LEO Off-Roster PPT Transactions
                    </CardDescription>
                </CardHeader>
                <CardContent>
                <div className="max-w-[425px]">
                <h2>Required Documents:</h2>
                  <ul className="list-disc pl-4">
                <li><p>If You Haven't Already Asked If They Were With A Differenct Agency When They Purchased The Firearm,</p>
                <p>Do So Now, Before Moving Any Further</p></li>
                <li>If They Were NOT Employed By A Different Agency, Look Up The Current Agency's Info Below</li>
                <li>If They WERE Employed With A Different Agency, Reference That Agency's Group Info, Not The Current Agency's Group Info</li>
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