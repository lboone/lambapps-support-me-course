import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  headerClassName?: string;
  cardTitleClassName?: string;
  contentClassName?: string;
  footerClassName?: string;
}

const EmployeesStatsCard = ({
  title,
  children,
  footer,
  className,
  headerClassName,
  cardTitleClassName,
  contentClassName,
  footerClassName,
}: Props) => {
  console.log({ footerClassName });
  return (
    <Card className={cn("", className)}>
      <CardHeader className={cn("pb-2", headerClassName)}>
        <CardTitle className={cn("text-base", cardTitleClassName)}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className={cn("", contentClassName)}>{children}</CardContent>
      {footer && (
        <CardFooter className={cn("", footerClassName)}>{footer}</CardFooter>
      )}
    </Card>
  );
};

export default EmployeesStatsCard;
