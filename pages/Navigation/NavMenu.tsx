
import * as React from "react"
import Link from "next/link"
import { cn } from "../../components/lib/utils"
import { Button } from "../../components/ui/button";
import { useRouter } from "next/router";
import IDsCard from "../Cards/IDsCard";
import FedsCard from "../Cards/FedsCard";
import FedLimits from "../Cards/FedLimits";
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
  

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

const NavMenu = () => {
  const router = useRouter();

  const handleButtonClick = (path: string) => {
    router.push(path);
  };

  return (
    <div>
    <div className="top-2 flex flex-col items-center justify-center space-y-4 p-4 md:p-8 lg:p-12">
        <Dialog>
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Forms Of ID Guide</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <div>
              <DialogTrigger id="diag1">
              <ListItem title="State ID Verification">
                State ID Requirement Details
              </ListItem>
                </DialogTrigger>
                <DialogContent id="diagcontent1" className="sm:max-w-[425px]">
                <IDsCard />
                <DialogClose asChild>
                <Button type="button" variant="secondary">
                    Close
                </Button>
                </DialogClose>
                </DialogContent>
            </div>
            <div>
              <DialogTrigger id="diag2">
              <ListItem title="Federal ID Verification">
                Federal ID Requirement Details
              </ListItem>
                </DialogTrigger>
                <DialogContent id="diagcontent2" className="sm:max-w-[425px]">
                <FedsCard />
                <DialogClose asChild>
                <Button type="button" variant="secondary">
                    Close
                </Button>
                </DialogClose>
                </DialogContent>
            </div>
            <div>
              <DialogTrigger id="diag3">
              <ListItem title="Federal Limits Apply">
                Federal ID Requirement Details
              </ListItem>
                </DialogTrigger>
                <DialogContent id="diagcontent3" className="sm:max-w-[425px]">
                <FedLimits />
                <DialogClose asChild>
                <Button type="button" variant="secondary">
                    Close
                </Button>
                </DialogClose>
                </DialogContent>
            </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Proof Of Residence Docs</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
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
