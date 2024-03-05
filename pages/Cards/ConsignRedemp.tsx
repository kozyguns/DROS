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
import { HoveredLink, Menu, MenuItem, ProductItem } from "../../components/ui/navbar-menu";

  
  function ConsignRedemp ({ className }: { className?: string }) {
  const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center w-[515px]" >
            <Card className="flex flex-col w-full">
                <CardHeader>
                <CardTitle>FFL03 With COE DROS Guide</CardTitle>
                <CardDescription>
                    <h2><span className="text-red-500">NOTE:</span><br/>
                    This Is Only Utilized In Cases Where We Are Returning The Consignment Seller&apos;s Firearm Back To Them</h2>
                </CardDescription>
                </CardHeader>
                <CardContent>
                <div className="max-w-full">
                <p>FSC Exemption Code</p>
                  <ul className="list-none pl-4">
                  <li>(X03 - Return To Owner)</li>
                  </ul>
                <p>Utilize This FSC Exemption Code For All Consignment Redemptions</p>
                </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    
                </CardFooter>
            </Card>
        </div>
    )
  }
  export default ConsignRedemp;