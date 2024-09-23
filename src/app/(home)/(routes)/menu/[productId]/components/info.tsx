"use client";

import { useState } from "react";
import {
  CookingPot,
  ShoppingCart,
  Soup,
  SquareActivity,
  StethoscopeIcon,
  Utensils,
} from "lucide-react";

import { Product } from "../../../../../../../types-db";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";

interface InfoProps {
  product: Product;
}
export const Info = ({ product }: InfoProps) => {
  const [qty, setQty] = useState(1);
  const cart = useCart();

  const updateItemQuantity = (num: number) => {
    setQty(num);
    cart.updateItemQuantity(product.id, num);
  };

  return (
    <div>
      {/* Product Title */}
      <h1 className="text-3xl font-bold text-neutral-800">{product.name}</h1>

      {/* Product Description */}
      <p className="mt-6 text-left text-base text-neutral-600">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat,
        consequatur aut dolorum, exercitationem dicta totam ipsa inventore odio
        ducimus, odit ipsam natus eveniet commodi consectetur harum in deserunt
        sed dolorem!
      </p>

      {/* Size , category, cuisines, kittchen part */}
      <div className="mt-12 flex w-full flex-wrap items-start justify-start gap-2 px-2">
        {product.cuisines && (
          <div className="flex items-center gap-2 rounded-md bg-emerald-500/20 px-3 py-2 text-base font-semibold capitalize">
            <CookingPot classNamew-4 h-4 />
            {product.cuisines.value}
          </div>
        )}

        {product.category && (
          <div className="flex items-center gap-2 rounded-md bg-blue-500/20 px-3 py-2 text-base font-semibold capitalize">
            <Soup className="size-4" />
            {product.category.name}
          </div>
        )}

        {product.kitchen && (
          <div className="flex items-center gap-2 rounded-md bg-red-500/20 px-3 py-2 text-base font-semibold capitalize">
            <Utensils className="size-4" />
            {product.kitchen.value}
          </div>
        )}

        {product.size && (
          <div className="flex items-center gap-2 rounded-md bg-yellow-500/20 px-3 py-2 text-base font-semibold capitalize">
            <SquareActivity className="size-4" />
            {product.size.value}
          </div>
        )}
      </div>

      {/* Prices & Serves */}
      <div className="mt-14 grid grid-cols-4">
        <div className="col-span-1 flex-col space-y-8">
          <p className="text-xl font-semibold text-neutral-700">Price</p>
          <p className="text-xl font-semibold text-neutral-700">Serves</p>
        </div>
        <div className="col-span-3 space-y-8">
          <p className="text-xl font-bold text-black">${product.price}</p>
          <div className="flex items-start justify-start gap-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <p
                key={num}
                className={cn(
                  "border-hero bg-hero flex size-8 cursor-pointer items-center justify-center rounded-full border text-white shadow-md",
                  qty == num
                    ? "bg-hero text-white"
                    : "bg-transparent text-black",
                )}
                onClick={() => updateItemQuantity(num)}
              >
                {num}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Add to card */}
      <Button
        className="hover:bg-hero mt-16 flex w-full items-center gap-2 text-xl font-semibold"
        onClick={() => {}}
      >
        Add to cart
        <ShoppingCart className="size-5" />
      </Button>
    </div>
  );
};
