import React from "react";
import MainMenu from "./components/main-menu";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-[250px_1fr] h-screen">
      <MainMenu />
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
