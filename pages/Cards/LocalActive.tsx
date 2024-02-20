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
                <CardTitle>Local Active Duty Info</CardTitle>
                <CardDescription>
                <span className="text-orange-500">Before Moving Forward - </span><br/>
                    <span className="text-orange-500">PRINT</span> THE Federal Doc Worksheet In The Link Below
                    </CardDescription>
                </CardHeader>
                <CardContent>
                <div className="max-w-[425px]">
                <h2>Required Documents:</h2>
                <ul className="list-disc pl-4">
                  <li>Photo Copy | Scan CA DL | CA ID</li>
                  <li>Write Down DOD ID#, Rank & Branch</li>
                  <li>Proof Of CA Residence (Anything Listed In &quot;Address Correction Docs&quot;)</li>
                  </ul>
                      <hr className="my-4" />
                      <p>FSC Exemption Code</p>
                      <ul className="list-disc pl-4">
                      <li><p>(X21 - Military - Active Duty |</p> 
                      <p>X22 - Military - Active Reserve)</p></li>
                      </ul><br/>
                      <hr className="my-4" />
                      Military Are <span className="text-red-500">NOT</span> Roster | 30 Day Exempt
                </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    
                </CardFooter>
            </Card>
        </div>
    )
  }
  export default IDsCard;