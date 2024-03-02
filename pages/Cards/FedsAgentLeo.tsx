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
  
  function FedsAgentLeo ({ className }: { className?: string }) {
  const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center w-full" >
            <Card className="flex flex-col w-full">
                <CardHeader>
                <CardTitle>Federal Agent Info</CardTitle>
                <CardDescription>
                <span className="text-amber-500">DROS Exemption Support Can Be Found Under &quot;DROS Exemptions Guide&quot; Menu</span>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                <div className="max-w-[425px]">
                <h2>Federal Agents Are Listed As <span className="text-amber-500">Group 1</span></h2>
                <p>You <span className="text-red-500">CANNOT</span> Copy Federal ID&apos;s,</p>
                <p>Make Sure You Print The <span className="text-amber-500">Federal Doc Worksheet</span></p>
                    <p>You Can Print The Federal Doc Worksheet Here:</p>
                      <ul className="list-none pl-4">
                        <li><a href="https://drive.google.com/file/d/1ruAqN1-iRgUtTeSfiVmYZHOiosLzFjmE/view?usp=drive_link"><span className="text-orange-500">Federal Doc Worksheet</span></a></li>
                      </ul>
                      <hr/>
                      <br/>If The Transaction Is For A <span className="text-blue-500">Blue Label</span> Firearm,<br/>
                      Don&apos;t Forget To Fill Out The <span className="text-red-500">Blue Label</span> Form & Include It In The Pending Packet
                </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    
                </CardFooter>
            </Card>
        </div>
    )
  }
  export default FedsAgentLeo;