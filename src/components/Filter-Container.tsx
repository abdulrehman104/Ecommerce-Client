import { Box } from "@/components/Box";
import { cn } from "@/lib/utils";

interface FilterContainerProps {
  children: React.ReactNode;
  className?: String;
}

export const FilterContainer = ({
  children,
  className,
}: FilterContainerProps) => {
  return <Box className={cn("flex-col gap-4", className)}>{children}</Box>;
};
