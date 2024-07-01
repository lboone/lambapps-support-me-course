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
  titleIcon?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  headerClassName?: string;
  cardTitleClassName?: string;
  contentClassName?: string;
  footerClassName?: string;
}

const StatsCard = ({
  title,
  titleIcon,
  children,
  footer,
  className,
  headerClassName,
  cardTitleClassName,
  contentClassName,
  footerClassName,
}: Props) => {
  return (
    <Card className={cn("", className)}>
      <CardHeader className={cn("pb-2", headerClassName)}>
        <CardTitle
          className={cn(
            "text-base flex items-center justify-between",
            cardTitleClassName
          )}
        >
          {title}
          {titleIcon && titleIcon}
        </CardTitle>
      </CardHeader>
      <CardContent className={cn("", contentClassName)}>{children}</CardContent>
      {footer && (
        <CardFooter className={cn("", footerClassName)}>{footer}</CardFooter>
      )}
    </Card>
  );
};

export default StatsCard;
