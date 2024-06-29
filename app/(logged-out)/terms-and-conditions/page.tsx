import { Button } from "@/components/ui/button";
import SiteLogo from "@/components/ui/site-logo";
import Link from "next/link";
import React from "react";

const TermsConditions = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col justify-left">
      <TermsSubHeader>{title}</TermsSubHeader>
      <p>{children}</p>
    </div>
  );
};
const TermsSubHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="text-primary text-lg md:text-2xl mt-3 mb-1">{children}</h3>
  );
};
const TermsAndConditions = () => {
  return (
    <div className="flex flex-col   gap-3 p-4 md:p-0  md:w-2/3 lg:w-1/2">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4 md:mb-2 md:border-b-2 md:border-primary md:pb-2">
        <SiteLogo className="-ml-2" />
        <Button
          asChild
          variant="outline"
          size="sm"
          className="w-full md:w-auto"
        >
          <Link href="/sign-up">Sign up</Link>
        </Button>
      </div>
      <h1 className="text-primary pb-1 text-2xl w-[100%] md:text-4xl">
        Terms and Conditions
      </h1>

      <div className="preserve-whitespace text-justify flex flex-col gap-2">
        <TermsConditions title="Introduction">
          Welcome to Support.Me! These terms and conditions outline the rules
          and regulations for the use of Support.Me's website, located at{" "}
          <Link
            href="http://localhost:3000"
            className="text-primary hover:underline"
          >
            Support.Me
          </Link>
          {".  "}
          By accessing this website, we assume you accept these terms and
          conditions. Do not continue to use Support.Me if you do not agree to
          all the terms and conditions stated on this page.
        </TermsConditions>
        <TermsConditions title="Terminology">
          <>
            The following terminology applies to these Terms and Conditions,
            Privacy Statement, and Disclaimer Notice and all Agreements:
            <ul className="list-disc list-outside flex flex-col gap-2 mt-2 pl-5">
              <li>
                "Client", "You", and "Your" refers to you, the person logging on
                this website and compliant with the Company’s terms and
                conditions.
              </li>
              <li>
                "The Company", "Ourselves", "We", "Our", and "Us", refers to our
                Company.
              </li>
              <li>
                "Party", "Parties", or "Us", refers to both the Client and
                ourselves.
              </li>
            </ul>
          </>
        </TermsConditions>

        <TermsConditions title="Cookies">
          We employ the use of cookies. By accessing Support.Me, you agreed to
          use cookies in agreement with Support.Me's Privacy Policy.
        </TermsConditions>
        <TermsConditions title="License">
          Unless otherwise stated, Support.Me and/or its licensors own the
          intellectual property rights for all material on Support.Me. All
          intellectual property rights are reserved. You may access this from
          Support.Me for your own personal use subjected to restrictions set in
          these terms and conditions.
        </TermsConditions>
        <TermsConditions title="User Comments">
          <>
            <p className="mb-2">
              Parts of this website offer an opportunity for users to post and
              exchange opinions and information in certain areas of the website.
              Support.Me does not filter, edit, publish, or review Comments
              prior to their presence on the website. Comments do not reflect
              the views and opinions of Support.Me, its agents, and/or
              affiliates. Comments reflect the views and opinions of the person
              who posts their views and opinions.
            </p>
            <p>
              Support.Me reserves the right to monitor all Comments and to
              remove any Comments which can be considered inappropriate,
              offensive, or causes a breach of these Terms and Conditions.
            </p>
          </>
        </TermsConditions>
      </div>
    </div>
  );
};

export default TermsAndConditions;
