import { cn } from "@/lib/utils";
import { PersonStandingIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface SiteLogoProps {
  className?: string;
  title?: string;
  children?: React.ReactNode;
}
const SiteLogo = ({
  className,
  title = "Support.Me",
  children = <PersonStandingIcon size={50} className="text-pink-500" />,
}: SiteLogoProps) => {
  return (
    <Link href="/">
      <h1 className={cn("flex gap-2 items-center", className)}>
        {children} {title}
      </h1>
    </Link>
  );
};

export default SiteLogo;
