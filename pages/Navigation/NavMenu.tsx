import React, { useEffect, useState } from 'react';
import Link from "next/link"
import { cn } from "../../components/lib/utils"
import { Button } from "../../components/ui/button";
import { useRouter } from "next/router";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../../components/ui/navbar-menu";
import { Meteors } from "../../components/ui/meteors";
import IDsCard from "../Cards/IDsCard";
import FedsCard from "../Cards/FedsCard";
import FedLimits from "../Cards/FedLimits";
import FedLimsName from "../Cards/FedLimsName";
import ProofDocs from "../Cards/ProofDocs";
import CorrectionDocs from "../Cards/CorrectionDocs";
import DelayedDeliveries from "../Cards/DelayedDeliveries";
import LeoPPT from "../Cards/LeoPPT";
import PeaceOfficer from "../Cards/PeaceOfficer";
import ReserveOfficer from "../Cards/ReserveOfficer";
import FederalAgent from "../Cards/FederalAgent";
import ActiveDuty from "../Cards/ActiveDuty";
import LocalActive from "../Cards/LocalActive";
import RetiredMilitary from "../Cards/RetiredMilitary";
import InterimDl from "../Cards/InterimDl";
import PeaceOfficerDROS from "../Cards/PeaceOfficerDROS";
import ReserveInfo from "../Cards/ReserveInfo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../../components/ui/navigation-menu"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
  } from "../../components/ui/dialog"
  

const NavMenu = () => {
  const router = useRouter();
  const [activeDialog, setActiveDialog] = useState<string | null>(null);

  const handleOpenDialog = (dialogId: string) => setActiveDialog(dialogId);
const handleCloseDialog = () => setActiveDialog(null);


  const handleButtonClick = (path: string) => {
    router.push(path);
  };

  function onNavChange() {
    setTimeout(() => {
      // Select elements with the state "open"
      const triggers = document.querySelectorAll(
        '.submenu-trigger[data-state="open"]'
      );
      const dropdowns = document.querySelectorAll(
        '.nav-viewport[data-state="open"]'
      );
  
      // Check if both triggers and dropdowns are present
      if (!triggers.length || !dropdowns.length) return;
  
      // Simplify the calculation by extracting it into a variable
      const { offsetLeft, offsetWidth } = triggers[0] as HTMLElement;
      const menuWidth = dropdowns[0].children[0].clientWidth;
      const menuLeftPosition = offsetLeft + offsetWidth / 2 - menuWidth / 2;
  
      // Apply the calculated position
      document.documentElement.style.setProperty(
        "--menu-left-position",
        `${menuLeftPosition}px`
      );
    });
  }

  return (
    <div>
    <div className="flex justify-center p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
        <Dialog>
    <NavigationMenu onValueChange={onNavChange}>
      <NavigationMenuList >
        <NavigationMenuItem>
          <NavigationMenuTrigger className="submenu-trigger">Forms Of ID Guide</NavigationMenuTrigger>
          <NavigationMenuContent>
          <ul className="flex grid gap-3 p-6 w-[350px] md:w-[400px] md:grid-cols-2 lg:w-[500px]">
            {/* State ID Verification */}
            <li>
              <DialogTrigger asChild>
              <HoveredLink onClick={() => handleOpenDialog('stateIdVerification')} href="#">State ID Verification</HoveredLink>
              </DialogTrigger>
              {activeDialog === 'stateIdVerification' && (
                <DialogContent>
                  <IDsCard />
                  <DialogClose asChild>
                    <Button onClick={handleCloseDialog}>Close</Button>
                  </DialogClose>
                </DialogContent>
                )}
            </li>
            {/* Additional Dialogs */}
            <li>
              <DialogTrigger asChild>
                <HoveredLink onClick={() => handleOpenDialog('fedsIdVerification')} href="#">Federal ID Verification</HoveredLink>
              </DialogTrigger>
              {activeDialog === 'fedsIdVerification' && (
                <DialogContent>
                  <FedsCard />
                  <DialogClose asChild>
                    <Button type="button" variant="secondary" onClick={handleCloseDialog}>Close</Button>
                  </DialogClose>
                </DialogContent>
              )}
            </li>
            <li>
              <DialogTrigger asChild>
              <HoveredLink onClick={() => handleOpenDialog('fedLimits')} href="#">Federal Limits Apply</HoveredLink>
              </DialogTrigger>
              {activeDialog === 'fedLimits' && (
                <DialogContent>
                  <FedLimits />
                  <DialogClose asChild>
                    <Button onClick={handleCloseDialog}>Close</Button>
                  </DialogClose>
                </DialogContent>
                )}
            </li>
            <li>
              <DialogTrigger asChild>
              <HoveredLink onClick={() => handleOpenDialog('fedLimsName')} href="#">Federal Limits Apply<br/>
                <span className="text-orange-500">With Name Change</span>
              </HoveredLink>
              </DialogTrigger>
              {activeDialog === 'fedLimsName' && (
                <DialogContent>
                  <FedLimsName />
                  <DialogClose asChild>
                    <Button onClick={handleCloseDialog}>Close</Button>
                  </DialogClose>
                </DialogContent>
                )}
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Proof Of Residence Docs</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            <li>
              <DialogTrigger asChild>
              <HoveredLink onClick={() => handleOpenDialog('proofResDocs')} href="#"><span className="text-cyan-500">Accepted Proof Of Residence Docs</span></HoveredLink>
              </DialogTrigger>
              {activeDialog === 'proofResDocs' && (
                <DialogContent>
                  <ProofDocs />
                  <DialogClose asChild>
                    <Button onClick={handleCloseDialog}>Close</Button>
                  </DialogClose>
                </DialogContent>
                )}
            </li>
            <li>
              <DialogTrigger asChild>
              <HoveredLink onClick={() => handleOpenDialog('correctionDocs')} href="#">Accepted Address Correction Docs</HoveredLink>
              </DialogTrigger>
              {activeDialog === 'correctionDocs' && (
                <DialogContent>
                  <CorrectionDocs />
                  <DialogClose asChild>
                    <Button onClick={handleCloseDialog}>Close</Button>
                  </DialogClose>
                </DialogContent>
                )}
            </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>4473 | Fastbound</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            <li>
              <DialogTrigger asChild>
              <HoveredLink onClick={() => handleOpenDialog('delayedDeliveries')} href="#">Delayed Deliveries</HoveredLink>
              </DialogTrigger>
              {activeDialog === 'delayedDeliveries' && (
                <DialogContent>
                  <DelayedDeliveries />
                  <DialogClose asChild>
                    <Button onClick={handleCloseDialog}>Close</Button>
                  </DialogClose>
                </DialogContent>
                )}
            </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Law Enforcement</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            <li>
              <DialogTrigger asChild>
              <HoveredLink onClick={() => handleOpenDialog('leoPPT')} href="#">Off-Roster LEO PPT Info</HoveredLink>
              </DialogTrigger>
              {activeDialog === 'leoPPT' && (
                <DialogContent>
                  <LeoPPT />
                  <DialogClose asChild>
                    <Button onClick={handleCloseDialog}>Close</Button>
                  </DialogClose>
                </DialogContent>
                )}
            </li>
            <li>
              <DialogTrigger asChild>
              <HoveredLink onClick={() => handleOpenDialog('peaceOfficer')} href="#">Peace | Public Officer Info</HoveredLink>
              </DialogTrigger>
              {activeDialog === 'peaceOfficer' && (
                <DialogContent>
                  <PeaceOfficer />
                  <DialogClose asChild>
                    <Button onClick={handleCloseDialog}>Close</Button>
                  </DialogClose>
                </DialogContent>
                )}
            </li>
            <li>
              <DialogTrigger asChild>
              <HoveredLink onClick={() => handleOpenDialog('reserveInfo')} href="#">Reserve Officer Info</HoveredLink>
              </DialogTrigger>
              {activeDialog === 'reserveInfo' && (
                <DialogContent>
                  <ReserveInfo />
                  <DialogClose asChild>
                    <Button onClick={handleCloseDialog}>Close</Button>
                  </DialogClose>
                </DialogContent>
                )}
            </li>
            <li>
              <DialogTrigger asChild>
              <HoveredLink onClick={() => handleOpenDialog('federalAgent')} href="#">Federal Agent DROS Info</HoveredLink>
              </DialogTrigger>
              {activeDialog === 'federalAgent' && (
                <DialogContent>
                  <FederalAgent />
                  <DialogClose asChild>
                    <Button onClick={handleCloseDialog}>Close</Button>
                  </DialogClose>
                </DialogContent>
                )}
            </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Military</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            <li>
              <DialogTrigger asChild>
              <HoveredLink onClick={() => handleOpenDialog('activeDuty')} href="#">Active Duty Out Of State Info</HoveredLink>
              </DialogTrigger>
              {activeDialog === 'activeDuty' && (
                <DialogContent>
                  <ActiveDuty />
                  <HoveredLink href="https://drive.google.com/file/d/1ruAqN1-iRgUtTeSfiVmYZHOiosLzFjmE/view?usp=drive_link"><span className="text-orange-500">Federal Doc Worksheet</span></HoveredLink>
                  <DialogClose asChild>
                    <Button onClick={handleCloseDialog}>Close</Button>
                  </DialogClose>
                </DialogContent>
                )}
            </li>
            <li>
              <DialogTrigger asChild>
              <HoveredLink onClick={() => handleOpenDialog('localActive')} href="#">Local Active Duty Info</HoveredLink>
              </DialogTrigger>
              {activeDialog === 'localActive' && (
                <DialogContent>
                  <LocalActive />
                  <HoveredLink href="https://drive.google.com/file/d/1ruAqN1-iRgUtTeSfiVmYZHOiosLzFjmE/view?usp=drive_link"><span className="text-orange-500">Federal Doc Worksheet</span></HoveredLink>
                  <DialogClose asChild>
                    <Button onClick={handleCloseDialog}>Close</Button>
                  </DialogClose>
                </DialogContent>
                )}
            </li>
            <li>
              <DialogTrigger asChild>
              <HoveredLink onClick={() => handleOpenDialog('retiredMilitary')} href="#">Retired Military Info</HoveredLink>
              </DialogTrigger>
              {activeDialog === 'retiredMilitary' && (
                <DialogContent>
                  <RetiredMilitary />
                  <HoveredLink href="https://drive.google.com/file/d/1ruAqN1-iRgUtTeSfiVmYZHOiosLzFjmE/view?usp=drive_link"><span className="text-orange-500">Federal Doc Worksheet</span></HoveredLink>
                  <DialogClose asChild>
                    <Button onClick={handleCloseDialog}>Close</Button>
                  </DialogClose>
                </DialogContent>
                )}
            </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Interim | Temp ID&apos;s</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            <li>
              <DialogTrigger asChild>
              <HoveredLink onClick={() => handleOpenDialog('interimDl')} href="#">Interim ID&apos;s | DL&apos;s Info</HoveredLink>
              </DialogTrigger>
              {activeDialog === 'interimDl' && (
                <DialogContent>
                  <InterimDl />
                  
                  <DialogClose asChild>
                    <Button onClick={handleCloseDialog}>Close</Button>
                  </DialogClose>
                </DialogContent>
                )}
            </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>DROS Exemptions Guide</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            <li>
              <DialogTrigger asChild>
              <HoveredLink onClick={() => handleOpenDialog('peaceOfficerDROS')} href="#">Peace Officer DROS Guide</HoveredLink>
              </DialogTrigger>
              {activeDialog === 'peaceOfficerDROS' && (
                <DialogContent>
                  <PeaceOfficerDROS />
              <HoveredLink href="https://oag.ca.gov/firearms/exemptpo"><span className="text-blue-500">Agency Group Details</span></HoveredLink>
                  <DialogClose asChild>
                    <Button onClick={handleCloseDialog}>Close</Button>
                  </DialogClose>
                </DialogContent>
                )}
            </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Ammo Purchases</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            <li>
              <DialogTrigger asChild>
              <HoveredLink onClick={() => handleOpenDialog('peaceOfficerDROS')} href="#">Peace Officer DROS Guide</HoveredLink>
              </DialogTrigger>
              {activeDialog === 'peaceOfficerDROS' && (
                <DialogContent>
                  <PeaceOfficerDROS />
              <HoveredLink href="https://oag.ca.gov/firearms/exemptpo"><span className="text-blue-500">Agency Group Details</span></HoveredLink>
                  <DialogClose asChild>
                    <Button onClick={handleCloseDialog}>Close</Button>
                  </DialogClose>
                </DialogContent>
                )}
            </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>VISA&apos;s | Submitted Residents | EAD&apos;s</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            <li>
              <DialogTrigger asChild>
              <HoveredLink onClick={() => handleOpenDialog('peaceOfficerDROS')} href="#">Peace Officer DROS Guide</HoveredLink>
              </DialogTrigger>
              {activeDialog === 'peaceOfficerDROS' && (
                <DialogContent>
                  <PeaceOfficerDROS />
              <HoveredLink href="https://oag.ca.gov/firearms/exemptpo"><span className="text-blue-500">Agency Group Details</span></HoveredLink>
                  <DialogClose asChild>
                    <Button onClick={handleCloseDialog}>Close</Button>
                  </DialogClose>
                </DialogContent>
                )}
            </li>
            <li>
              <DialogTrigger asChild>
              <HoveredLink onClick={() => handleOpenDialog('reserveOfficer')} href="#">Reserve Officer Info</HoveredLink>
              </DialogTrigger>
              {activeDialog === 'reserveOfficer' && (
                <DialogContent>
                  <ReserveOfficer />
              
                  <DialogClose asChild>
                    <Button onClick={handleCloseDialog}>Close</Button>
                  </DialogClose>
                </DialogContent>
                )}
            </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    </Dialog>
    </div>

      </div>
  )
}


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
export default NavMenu;
