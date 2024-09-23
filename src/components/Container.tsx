import { cn } from "@/lib/utils";

interface CProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: CProps) => {
  return <div className={cn("mx-auto max-w-7xl", className)}>{children}</div>;
};
