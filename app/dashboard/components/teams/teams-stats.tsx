import React from "react";
import StatsCard from "@/app/dashboard/components/stats-card";
import {
  ListChecksIcon,
  PieChartIcon,
  StarIcon,
  UsersIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import cm from "@/public/images/cm.jpg";
import tf from "@/public/images/tf.jpg";
import rl from "@/public/images/rl.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SupportTicketsResolved from "./support-tickets-resolved";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import TeamDistributionChart from "./team-distribution-chart";

const totalTeams = 8;
const teamLeaders = [
  {
    firstName: "Colin",
    lastName: "Murray",
    avatar: cm,
  },
  {
    firstName: "Tom",
    lastName: "Phillips",
  },
  {
    firstName: "Liam",
    lastName: "Fuentes",
  },
  {
    firstName: "Tina",
    lastName: "Fey",
    avatar: tf,
  },
  {
    firstName: "Katie",
    lastName: "Johnson",
  },
  {
    firstName: "Tina",
    lastName: "Jones",
  },
  {
    firstName: "Amy",
    lastName: "Adams",
  },
  {
    firstName: "Ryan",
    lastName: "Lopez",
    avatar: rl,
  },
  {
    firstName: "Jenny",
    lastName: "Jones",
  },
];
const teamsStatsData = [
  {
    title: "Total teams",
    titleIcon: undefined,
    className: undefined,
    headerClassName: undefined,
    cardTitleClassName: undefined,
    footerClassName: undefined,
    contentClassName: undefined,
    children: (
      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-2">
          <UsersIcon />
          <span className="text-5xl font-bold">{totalTeams}</span>
        </div>
        <div>
          <Button asChild variant="default" size="xs">
            <Link href="/dashboard/teams">View all</Link>
          </Button>
        </div>
      </div>
    ),
    footer: undefined,
  },
  {
    title: "Team leaders",
    titleIcon: <StarIcon className="text-yellow-500" />,
    className: undefined,
    headerClassName: undefined,
    cardTitleClassName: undefined,
    footerClassName: undefined,
    contentClassName: undefined,
    children: (
      <div className="flex flex-wrap gap-2 items-center">
        {teamLeaders.map((teamLeader, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Avatar className="cursor-pointer">
                  {!!teamLeader.avatar && (
                    <Image
                      src={teamLeader.avatar}
                      alt={`${teamLeader.firstName} avatar`}
                    />
                  )}
                  <AvatarFallback className="bg-primary text-primary-foreground cursor-pointer">
                    {teamLeader.firstName?.[0]} {teamLeader.lastName?.[0]}
                  </AvatarFallback>
                </Avatar>
              </TooltipTrigger>
              <TooltipContent>
                {teamLeader.firstName} {teamLeader.lastName}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    ),
    footer: undefined,
  },
  {
    title: "Team distribution",
    titleIcon: <PieChartIcon />,
    className: undefined,
    headerClassName: undefined,
    cardTitleClassName: undefined,
    footerClassName: undefined,
    contentClassName: undefined,
    children: <TeamDistributionChart />,
    footer: undefined,
  },
];
const TeamsStats = () => {
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4">
        {teamsStatsData.map((card, index) => (
          <StatsCard
            key={index}
            title={card.title}
            titleIcon={card?.titleIcon}
            footer={card?.footer}
            className={card?.className}
            headerClassName={card?.headerClassName}
            footerClassName={card?.footerClassName}
          >
            {card.children}
          </StatsCard>
        ))}
      </div>
      <Card className="my-4">
        <CardHeader>
          <CardTitle className="flex gap-2 items-center text-lg">
            <ListChecksIcon />
            <span>Support tickets resolved</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <SupportTicketsResolved />
        </CardContent>
      </Card>
    </>
  );
};

export default TeamsStats;
