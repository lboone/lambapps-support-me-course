"use client";
import React from "react";
import MainMenu from "./components/main-menu";
import MobileMenu from "./components/mobile-menu";
import { useMediaQuery } from "@/hooks/use-media-query";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isDesktop = useMediaQuery("(min-width:768px)");
  return (
    <div className="md:grid md:grid-cols-[250px_1fr] h-screen">
      <MainMenu className="hidden md:flex" />
      {!isDesktop && <MobileMenu />}

      <div className="overflow-auto py-2 px-4">
        <h1 className="pb-4 border-b border-b-zinc-300 dark:border-b-black mb-2">
          Welcom back, Lloyd!
        </h1>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
