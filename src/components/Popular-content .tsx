"use client";

import { Heart, HeartCrack, ShoppingCart } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { Product } from "../../types-db";

interface PopularContentProps {
  data: Product;
}

export const PopularContent = ({ data }: PopularContentProps) => {
  const cart = useCart();

  const [isLiked, setIsLiked] = useState(false);
  const IsLikedIcon = isLiked ? Heart : HeartCrack;

  const addToCard = (data: Product) => {
    cart.addItems({ ...data, qty: 1 });
  };

  return (
    <Card className="relative flex h-[340px] w-full flex-col items-center justify-center border-none py-6 pt-24 shadow-lg md:pt-28 ">
      {/* Image Backgroud */}
      <div className="bg-hero absolute -top-[4%] flex size-24 items-center justify-center overflow-hidden rounded-full p-1 md:-top-[20%] md:size-40 md:p-2">
        <div className="relative size-full rounded-full bg-white">
          <Image
            src={data?.images[0]?.url as string}
            alt="Product Image"
            fill
            className="size-full object-contain"
          />
        </div>
      </div>

      {/* Product Name */}
      <Link href={`/menu/${data?.id}`} className="w-full px-2 text-center">
        <CardTitle className="w-full truncate text-neutral-700">
          {data?.name}
        </CardTitle>
      </Link>

      {/* Size , category, cuisines, kittchen part */}
      <div className="mt-4 flex w-full flex-wrap items-center justify-center gap-2 px-2">
        {data.cuisines && (
          <div className="rounded-md bg-emerald-500/20 px-2 py-[2px] text-[11px] font-semibold capitalize">
            {data.cuisines.value}
          </div>
        )}

        {data.category && (
          <div className="rounded-md bg-blue-500/20 px-2 py-[2px] text-[11px] font-semibold capitalize">
            {data.category.name}
          </div>
        )}

        {data.kitchen && (
          <div className="rounded-md bg-red-500/20 px-2 py-[2px] text-[11px] font-semibold capitalize">
            {data.kitchen.value}
          </div>
        )}

        {data.size && (
          <div className="rounded-md bg-yellow-500/20 px-2 py-[2px] text-[11px] font-semibold capitalize">
            {data.size.value}
          </div>
        )}
      </div>

      {/* Product Description */}
      <CardDescription className="my-2 px-2 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vero quas
        explicabo quam.
      </CardDescription>

      {/* Prize & Order Button */}
      <div className="mt-4 flex w-full items-center gap-3 px-2">
        <Button
          variant="outline"
          className="text-muted-foreground rounded-full text-lg font-bold"
        >
          ${data.price}
        </Button>
        <Link href={`/menu/${data.id}`} className="w-full">
          <Button className="bg-hero w-full rounded-full">Order Now</Button>
        </Link>
      </div>

      {/* Add To Cart Button */}
      <Button
        className="absolute right-0 top-0 rounded-bl-lg rounded-br-none rounded-tl-none rounded-tr-lg p-2  px-3"
        onClick={() => addToCard(data)}
      >
        <ShoppingCart className="size-4" />
      </Button>

      {/* Like Button */}
      <Button
        variant="outline"
        className="absolute left-0 top-0 p-2 px-3  "
        onClick={() => setIsLiked((prev) => !prev)}
      >
        <IsLikedIcon
          className={`size-4 ${isLiked ? "text-red-500" : "text-black"}`}
        />
      </Button>
    </Card>
  );
};
