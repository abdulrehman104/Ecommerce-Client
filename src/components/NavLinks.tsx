"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

interface NProps extends React.HTMLAttributes<HTMLElement> {
  scroller: boolean;
}

export const NavLinks = ({ scroller, className, ...props }: NProps) => {
  const pathName = usePathname();

  const routes = [
    {
      href: "/",
      label: "Home",
      isActive: pathName === "/",
    },
    {
      href: "/menu",
      label: "Menu",
      isActive: pathName === "/menu",
    },
  ];
  return (
    <div className="ml-auto">
      <nav className="mr-6 flex items-center space-x-4 pl-6 md:space-x-10">
        {routes.map((route) => (
          <Link
            href={route.href}
            key={route.href}
            className={cn(
              "text-primary text-base font-medium transition-colors",
              route.isActive
                ? `${
                    scroller
                      ? "text-hero font-bold"
                      : "text-black dark:text-white"
                  }`
                : `${scroller ? "text-black" : "text-white"}`,
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};
