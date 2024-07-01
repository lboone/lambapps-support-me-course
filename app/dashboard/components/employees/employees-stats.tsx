import React from "react";
import EmployeesStatsCard from "./employees-stats-card";
import {
  AlertTriangleIcon,
  BadgeCheckIcon,
  LaptopIcon,
  PartyPopperIcon,
  UserCheck2Icon,
  UserIcon,
  UserRoundXIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import cm from "@/public/images/cm.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import WorkLocationTrends from "./work-location-trends";

const totalEmployees = 100;
const employeesPresent = 80;
const employeesPresentPercentage = (employeesPresent / totalEmployees) * 100;

const employeesStatsData = [
  {
    title: "Total employees",
    className: undefined,
    headerClassName: undefined,
    cardTitleClassName: undefined,
    footerClassName: undefined,
    contentClassName: undefined,
    children: (
      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-2">
          <UserIcon />
          <span className="text-5xl font-bold">{totalEmployees}</span>
        </div>
        <div>
          <Button asChild variant="default" size="xs">
            <Link href="/dashboard/employees">View all</Link>
          </Button>
        </div>
      </div>
    ),
    footer: undefined,
  },
  {
    title: "Employees present",
    className: undefined,
    headerClassName: undefined,
    cardTitleClassName: undefined,
    footerClassName: undefined,
    contentClassName: undefined,
    children: (
      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-2">
          {employeesPresentPercentage > 75 ? (
            <UserCheck2Icon />
          ) : (
            <UserRoundXIcon />
          )}
          <span className="text-5xl font-bold">{employeesPresent}</span>
        </div>
      </div>
    ),
    footer: (
      <span
        className={cn(
          "text-xs flex gap-2 items-center",
          employeesPresentPercentage > 75 ? "text-green-500" : "text-red-500"
        )}
      >
        {employeesPresentPercentage > 75 ? (
          <BadgeCheckIcon />
        ) : (
          <AlertTriangleIcon />
        )}
        <span>
          {employeesPresentPercentage > 75
            ? `${employeesPresentPercentage}% of employees are present`
            : `Only ${employeesPresentPercentage}% of employees are present`}
        </span>
      </span>
    ),
  },
  {
    title: "Employee of the month",
    className: "border-primary flex flex-col ",
    headerClassName: undefined,
    cardTitleClassName: undefined,
    footerClassName:
      "flex gap-2 items-center text-xs text-muted-foreground mt-auto",
    contentClassName: undefined,
    children: (
      <div className="flex gap-2 items-center">
        <Avatar>
          <Image src={cm} alt="Employee of the month avatar" />
          <AvatarFallback>CM</AvatarFallback>
        </Avatar>
        <span className="text-2xl">Colin Murray!</span>
      </div>
    ),
    footer: (
      <>
        <PartyPopperIcon className="text-pink-500" />
        <span>Congratulations Colin!</span>
      </>
    ),
  },
];
const EmployeesStats = () => {
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4">
        {employeesStatsData.map((card, index) => (
          <EmployeesStatsCard
            key={index}
            title={card.title}
            footer={card?.footer}
            className={card?.className}
            headerClassName={card?.headerClassName}
            footerClassName={card?.footerClassName}
          >
            {card.children}
          </EmployeesStatsCard>
        ))}
      </div>
      <Card className="my-4">
        <CardHeader>
          <CardTitle className="flex gap-2 items-center text-lg">
            <LaptopIcon />
            <span>Employee work location trends</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <WorkLocationTrends />
        </CardContent>
      </Card>
    </>
  );
};

export default EmployeesStats;
