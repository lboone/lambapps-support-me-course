import SiteLogo from "@/components/ui/site-logo";
import { PersonStandingIcon } from "lucide-react";
import React from "react";
import MenuItem from "./menu-item";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LightDarkToggle } from "@/components/ui/light-dark-toggle";
import Link from "next/link";
import { cn } from "@/lib/utils";

const menuItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/dashboard/teams", label: "Teams" },
  { href: "/dashboard/employees", label: "Employees" },
  { href: "/dashboard/account", label: "Account" },
  { href: "/dashboard/settings", label: "Settings" },
];

interface Props {
  className?: string;
}

const MainMenu = ({ className }: Props) => {
  return (
    <nav
      className={cn(
        "md:bg-muted overflow-auto p-4 flex flex-col justify-between h-screen",
        className
      )}
    >
      <div className="flex flex-col">
        <header className="border-b dark:border-b-black border-b-zinc-300 pb-4 ">
          <SiteLogo className="text-3xl"></SiteLogo>
        </header>
        <div className="py-4 flex flex-col gap-1">
          <ul>
            {menuItems.map((item, index) => (
              <MenuItem key={index} href={item.href}>
                {item.label}
              </MenuItem>
            ))}
          </ul>
        </div>
      </div>
      <footer className="flex items-center gap-2">
        <Avatar>
          <AvatarFallback className="bg-primary text-primary-foreground">
            LB
          </AvatarFallback>
        </Avatar>
        <Link href="/" className="hover:underline">
          Logout
        </Link>
        <LightDarkToggle className="ml-auto" />
      </footer>
    </nav>
  );
};

export default MainMenu;
