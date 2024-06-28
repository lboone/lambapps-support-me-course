import { cn } from "@/lib/utils";
import { PersonStandingIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface SiteLogoProps {
  className?: string;
}
const SiteLogo = ({ className }: SiteLogoProps) => {
  return (
    <Link href="/">
      <h1 className={cn("flex gap-2 items-center", className)}>
        <PersonStandingIcon size={50} className="text-pink-500" /> Support.Me
      </h1>
    </Link>
  );
};

export default SiteLogo;
