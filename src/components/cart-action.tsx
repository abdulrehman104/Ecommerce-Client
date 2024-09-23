"use client";

import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";

export const CartActionButton = () => {
  const [isMounted, setIsMounted] = useState(false);

  const cart = useCart();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Button
      className="ml-4 flex items-center justify-center gap-x-2 rounded-full"
      onClick={() => router.push("/cart")}
    >
      <ShoppingBag className="size-4" />
      <span className="text-sm font-medium text-white ">
        {cart.items.length}
      </span>
    </Button>
  );
};
