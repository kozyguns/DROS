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
                <CardTitle>Interim ID&apos;s | DL&apos;s Info</CardTitle>
                <CardDescription>
                <p>We <span className="text-red-500">CANNOT</span> Accept &quot;Temporary ID | DL&quot; Printouts Or Cards</p>
                </CardDescription>
                </CardHeader>
                <CardContent>
                <div className="max-w-[425px]">
                <h2>Interim ID | DL&apos;s:</h2>
                 <ul className="list-disc pl-4">
                  <p>We <span className="text-cyan-500">DO</span> Accept &quot;INTERIM ID&apos;s | DL&apos;s&quot;</p>
                    <p>But It Must Be Accompanied By The Old Photo ID | DL</p> 
                    <p>& The Old Photo ID <span className="red-text text-darken-3">CANNOT</span> Have A Hole Punched In It</p>
                    <p>& The Interim ID | DL <span className="text-blue-500">MUST BE SIGNED</span></p>
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