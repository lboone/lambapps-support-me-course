import { Button } from "@/components/ui/button";
import SiteLogo from "@/components/ui/site-logo";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <SiteLogo />
      <p>The best dashboard to manager customer support</p>
      <div className="flex items-center justify-center gap-2">
        <Button asChild>
          <Link href="/login">Log in</Link>
        </Button>
        <small>or</small>
        <Button variant="outline" asChild>
          <Link href="/sign-up">Sign up</Link>
        </Button>
      </div>
    </>
  );
}
