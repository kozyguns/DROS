import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../../components/ui/navbar-menu";
import { cn } from "../../components/lib/cn";
import { useRouter } from "next/router";
import { Button } from "../../components/ui/button";
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
import Image from 'next/image';
import { Meteors } from "../../components/ui/meteors";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "../../components/ui/dialog"

const MenuTest = () => {
  const router = useRouter();


  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}



function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [activeDialog, setActiveDialog] = useState<string | null>(null);

  const handleDialogOpen = (dialog: string) => {
    setActiveDialog(dialog);
  };

  const handleDialogClose = () => {
    setActiveDialog(null);
  };

  return (

    
    <div className={cn("fixed top-10 inset-x-0 max-w-6xl mx-auto z-50 text-sm", className)}>
      <Dialog>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Forms Of ID">
          <div className="flex flex-col space-y-4 text-sm">
            <DialogTrigger asChild>
            <HoveredLink onClick={() => handleDialogOpen('stateIdVerification')} href="#">State ID Verification</HoveredLink>
            </DialogTrigger>
            {activeDialog === 'stateIdVerification' && (
            <DialogContent className="sm:max-w-[425px]">
              <IDsCard />
              <DialogClose asChild>
              <Button type="button" variant="secondary" onClick={handleDialogClose}>
                Close
              </Button>
            </DialogClose>
            </DialogContent>
            )}
            </div>

              <div className="flex flex-col space-y-4 text-sm">
                <DialogTrigger asChild>
                <HoveredLink onClick={() => handleDialogOpen('fedLimits')} href="#">Federal Limits Apply</HoveredLink>
                </DialogTrigger>
                {activeDialog === 'fedLimits' && (
                <DialogContent className="sm:max-w-[425px]">
                  <FedLimits />
                  <DialogClose asChild>
                  <Button type="button" variant="secondary" onClick={handleDialogClose}>
                    Close
                  </Button>
                </DialogClose>
                </DialogContent>
                )}
                </div>

                <div className="flex flex-col space-y-4 text-sm">
                <DialogTrigger asChild>
                <HoveredLink onClick={() => handleDialogOpen('fedLimits')} href="#">Federal Limits Apply <span className="text-red-500">WITH Name Change</span></HoveredLink>
                </DialogTrigger>
                {activeDialog === 'fedLimits' && (
                <DialogContent className="sm:max-w-[425px]">
                  <FedLimsName />
                  <DialogClose asChild>
                  <Button type="button" variant="secondary" onClick={handleDialogClose}>
                    Close
                  </Button>
                </DialogClose>
                </DialogContent>
                )}
                </div>

            </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Proof Of Residence Docs">
        <div className="flex flex-col space-y-4 text-sm">
            <DialogTrigger asChild>
            <HoveredLink onClick={() => handleDialogOpen('proofResDocs')} href="#"><span className="text-cyan-500">Accepted Proof Of Residence Docs</span></HoveredLink>
            </DialogTrigger>
            {activeDialog === 'proofResDocs' && (
            <DialogContent className="sm:max-w-[425px]">
              <ProofDocs />
              <DialogClose asChild>
              <Button type="button" variant="secondary" onClick={handleDialogClose}>
                Close
              </Button>
            </DialogClose>
            </DialogContent>
            )}
          </div>

          <div className="flex flex-col space-y-4 text-sm">
            <DialogTrigger asChild>
            <HoveredLink onClick={() => handleDialogOpen('correctionDocs')} href="#">Accepted Address Correction Docs</HoveredLink>
            </DialogTrigger>
            {activeDialog === 'correctionDocs' && (
            <DialogContent className="sm:max-w-[425px]">
              <CorrectionDocs />
              <DialogClose asChild>
              <Button type="button" variant="secondary" onClick={handleDialogClose}>
                Close
              </Button>
            </DialogClose>
            </DialogContent>
            )}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="4473 | Fastbound">
        <div className="flex flex-col space-y-4 text-sm">
            <DialogTrigger asChild>
            <HoveredLink onClick={() => handleDialogOpen('delayedDeliveries')} href="#">Delayed Deliveries</HoveredLink>
            </DialogTrigger>
            {activeDialog === 'delayedDeliveries' && (
            <DialogContent className="sm:max-w-[425px]">
              <DelayedDeliveries />
              <DialogClose asChild>
              <Button type="button" variant="secondary" onClick={handleDialogClose}>
                Close
              </Button>
            </DialogClose>
            </DialogContent>
            )}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Law Enforcement">
        <div className="flex flex-col space-y-4 text-sm">
            <DialogTrigger asChild>
            <HoveredLink onClick={() => handleDialogOpen('leoPPT')} href="#">Off-Roster LEO PPT Info</HoveredLink>
            </DialogTrigger>
            {activeDialog === 'leoPPT' && (
            <DialogContent className="sm:max-w-[425px]">
              <LeoPPT />
            <HoveredLink href="https://oag.ca.gov/firearms/exemptpo"><span className="text-blue-500">Agency Group Details</span></HoveredLink>
              <DialogClose asChild>
              <Button type="button" variant="secondary" onClick={handleDialogClose}>
                Close
              </Button>
            </DialogClose>
            </DialogContent>
            )}
          </div>

          <div className="flex flex-col space-y-4 text-sm">
            <DialogTrigger asChild>
            <HoveredLink onClick={() => handleDialogOpen('peaceOfficer')} href="#">Peace | Public Officer Info</HoveredLink>
            </DialogTrigger>
            {activeDialog === 'peaceOfficer' && (
            <DialogContent className="sm:max-w-[425px]">
              <PeaceOfficer />
            <HoveredLink href="https://law.justia.com/codes/california/2022/code-pen/part-2/title-3/chapter-4-5/"><span className="text-green-500">Penal Codes Defined</span></HoveredLink>
              <DialogClose asChild>
              <Button type="button" variant="secondary" onClick={handleDialogClose}>
                Close
              </Button>
            </DialogClose>
            </DialogContent>
            )}
          </div>

          <div className="flex flex-col space-y-4 text-sm">
            <DialogTrigger asChild>
            <HoveredLink onClick={() => handleDialogOpen('reserveOfficer')} href="#">Reserve Officer Info</HoveredLink>
            </DialogTrigger>
            {activeDialog === 'reserveOfficer' && (
            <DialogContent className="sm:max-w-[425px]">
              <ReserveOfficer />
              <DialogClose asChild>
              <Button type="button" variant="secondary" onClick={handleDialogClose}>
                Close
              </Button>
            </DialogClose>
            </DialogContent>
            )}
          </div>

          <div className="flex flex-col space-y-4 text-sm">
            <DialogTrigger asChild>
            <HoveredLink onClick={() => handleDialogOpen('federalAgent')} href="#">Federal Agent DROS Info</HoveredLink>
            </DialogTrigger>
            {activeDialog === 'federalAgent' && (
            <DialogContent className="sm:max-w-[425px]">
              <FederalAgent />
            <HoveredLink href="https://oag.ca.gov/firearms/exemptpo"><span className="text-blue-500">Agency Group Details</span></HoveredLink>
            <HoveredLink href="https://drive.google.com/file/d/1ruAqN1-iRgUtTeSfiVmYZHOiosLzFjmE/view?usp=drive_link"><span className="text-orange-500">Federal Doc Worksheet</span></HoveredLink>
              <DialogClose asChild>
              <Button type="button" variant="secondary" onClick={handleDialogClose}>
                Close
              </Button>
            </DialogClose>
            </DialogContent>
            )}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Military">
        <div className="flex flex-col space-y-4 text-sm">
            <DialogTrigger asChild>
            <HoveredLink onClick={() => handleDialogOpen('activeDuty')} href="#">Active Duty Out Of State Info</HoveredLink>
            </DialogTrigger>
            {activeDialog === 'activeDuty' && (
            <DialogContent className="sm:max-w-[425px]">
              <ActiveDuty />
            <HoveredLink href="https://drive.google.com/file/d/1ruAqN1-iRgUtTeSfiVmYZHOiosLzFjmE/view?usp=drive_link"><span className="text-orange-500">Federal Doc Worksheet</span></HoveredLink>
              <DialogClose asChild>
              <Button type="button" variant="secondary" onClick={handleDialogClose}>
                Close
              </Button>
            </DialogClose>
            </DialogContent>
            )}
          </div>

          <div className="flex flex-col space-y-4 text-sm">
            <DialogTrigger asChild>
            <HoveredLink onClick={() => handleDialogOpen('localActive')} href="#">Local Active Duty Info</HoveredLink>
            </DialogTrigger>
            {activeDialog === 'localActive' && (
            <DialogContent className="sm:max-w-[425px]">
              <LocalActive />
            <HoveredLink href="https://drive.google.com/file/d/1ruAqN1-iRgUtTeSfiVmYZHOiosLzFjmE/view?usp=drive_link"><span className="text-orange-500">Federal Doc Worksheet</span></HoveredLink>
              <DialogClose asChild>
              <Button type="button" variant="secondary" onClick={handleDialogClose}>
                Close
              </Button>
            </DialogClose>
            </DialogContent>
            )}
          </div>

          <div className="flex flex-col space-y-4 text-sm">
            <DialogTrigger asChild>
            <HoveredLink onClick={() => handleDialogOpen('retiredMilitary')} href="#">Retired Military Info</HoveredLink>
            </DialogTrigger>
            {activeDialog === 'retiredMilitary' && (
            <DialogContent className="sm:max-w-[425px]">
              <RetiredMilitary />
            <HoveredLink href="https://drive.google.com/file/d/1ruAqN1-iRgUtTeSfiVmYZHOiosLzFjmE/view?usp=drive_link"><span className="text-orange-500">Federal Doc Worksheet</span></HoveredLink>
              <DialogClose asChild>
              <Button type="button" variant="secondary" onClick={handleDialogClose}>
                Close
              </Button>
            </DialogClose>
            </DialogContent>
            )}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Interim | Temp ID's">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="DROS Exemptions Guide">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Ammo Purchases">
          <div className="flex flex-col space-y-4 text-sm">
          <DialogTrigger asChild>
            <HoveredLink href="/hobby">Hobby</HoveredLink>
          </DialogTrigger>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="VISA Documents Guide">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
      </Dialog>
      <Meteors number={20} />
    </div>
  );
}
export default MenuTest;