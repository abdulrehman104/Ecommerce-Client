import { cn } from "@/lib/utils";

interface BoxProps {
  children: React.ReactNode;
  className: string;
}
export const Box = ({ className, children }: BoxProps) => {
  return (
    <div
      className={cn(
        "mx-auto flex w-full items-start justify-normal",
        className,
      )}
    >
      {children}
    </div>
  );
};
