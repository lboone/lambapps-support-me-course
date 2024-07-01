import { useState } from "react";
import SiteLogo from "@/components/ui/site-logo";
import { MenuIcon, PersonStandingIcon } from "lucide-react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import MainMenu from "./main-menu";
const MobileMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="flex justify-between md:hidden sticky top-0 left-0 bg-background border-b border-border p-4">
      <SiteLogo className="text-3xl">
        <PersonStandingIcon size={40} className="text-primary" />
      </SiteLogo>
      <Drawer
        direction="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenChange={(open) => setMobileMenuOpen(open)}
      >
        <DrawerTrigger>
          <MenuIcon />
        </DrawerTrigger>
        <DrawerContent>
          <MainMenu />
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileMenu;
