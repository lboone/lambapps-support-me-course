import { LightDarkToggle } from "@/components/ui/light-dark-toggle";

interface Props {
  children: React.ReactNode;
}
export default function LoggedOutLayout({ children }: Props) {
  return (
    <>
      <div className="flex flex-col min-h-screen items-center justify-center p-24 gap-4">
        {children}
      </div>
      <LightDarkToggle className="fixed top-[calc(50%-12px)] right-4" />
    </>
  );
}
