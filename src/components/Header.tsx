"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { NavLinks } from "@/components/NavLinks";
import { CartActionButton } from "@/components/cart-action";

interface HProps {
  userId: string | null;
}

export const Header = ({ userId }: HProps) => {
  const [scroller, setScroller] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScroll = window.scrollY > 0;
      setScroller(isScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "z-50 w-full transition",
        scroller ? "fixed left-0 top-0 bg-white shadow-lg" : "bg-transparent",
      )}
    >
      <Container>
        <div className="relative flex h-16 items-center px-4 sm:px-6 lg:px-12">
          {/* Logo */}
          <Link
            href="/"
            className="flex gap-x-2 text-lg font-bold uppercase text-neutral-700 md:text-xl"
          >
            foodide
          </Link>

          {/* Nav Links Here */}
          <NavLinks scroller={scroller} />

          {/* Signin Signup & User Button */}
          {userId ? (
            <div className="ml-4 flex items-center space-x-4">
              <UserButton afterSwitchSessionUrl="/" />
            </div>
          ) : (
            <div className="ml-4 flex items-center space-x-2">
              <Link href="/sign-in">
                <Button variant="outline" size="sm">
                  Login
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button
                  size="sm"
                  className="bg-green-400 text-black hover:bg-green-500"
                >
                  Sign-Up
                </Button>
              </Link>
            </div>
          )}

          {userId && <CartActionButton />}
        </div>
      </Container>
    </header>
  );
};
