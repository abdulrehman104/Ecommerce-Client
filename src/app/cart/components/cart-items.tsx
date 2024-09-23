import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";

import { Box } from "@/components/Box";
import { Product } from "../../../../types-db";
import { useCart } from "@/hooks/useCart";
import { Trash } from "lucide-react";

interface CartItemsProps {
  item: Product;
}

export const CartItems = ({ item }: CartItemsProps) => {
  const [qty, setQty] = useState(item.qty ?? 1);
  const cart = useCart();

  const updateItemQuantity = (num: number) => {
    setQty(num);
    cart.updateItemQuantity(item.id, num);
  };

  return (
    <Box className="flex items-center gap-4 rounded-lg border border-gray-200 p-3">
      <div className="relative flex aspect-square size-24 min-h-24 min-w-24 items-center justify-center overflow-hidden rounded-md bg-gray-100">
        <Image
          src={item.images[0].url}
          alt=""
          fill
          className="size-full object-contain"
        />
      </div>

      <div>
        <h2 className="w-full min-w-44 truncate whitespace-nowrap text-2xl font-semibold text-neutral-700">
          {item.name}
        </h2>
        <div className="mt-4 flex w-44 flex-wrap items-center justify-start gap-x-4 gap-y-2">
          {item.cuisines && (
            <div className="rounded-md bg-emerald-500/20 px-2 py-[2px] text-[11px] font-semibold capitalize">
              {item.cuisines.value}
            </div>
          )}

          {item.category && (
            <div className="rounded-md bg-blue-500/20 px-2 py-[2px] text-[11px] font-semibold capitalize">
              {item.category.name}
            </div>
          )}

          {item.kitchen && (
            <div className="rounded-md bg-red-500/20 px-2 py-[2px] text-[11px] font-semibold capitalize">
              {item.kitchen.value}
            </div>
          )}

          {item.size && (
            <div className="rounded-md bg-yellow-500/20 px-2 py-[2px] text-[11px] font-semibold capitalize">
              {item.size.value}
            </div>
          )}
        </div>
      </div>

      <Box className="flex h-full items-center justify-center">
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((num) => (
            <div
              key={item.id}
              className={`border-hero flex size-8 cursor-pointer items-center justify-center rounded-full border
                ${qty === num ? "bg-hero text-white" : "bg-transparent text-black"}`}
              onClick={() => updateItemQuantity(num)}
            >
              {num}
            </div>
          ))}
        </div>
      </Box>

      <Box className="flex h-full items-center justify-center">
        <h2>${item.price}</h2>
      </Box>

      <div className="m-auto w-auto">
        <Trash
          className="h-45 text-muted-foreground w-5 cursor-pointer hover:text-red-500"
          onClick={() => cart.removeItem(item.id)}
        />
      </div>
    </Box>
  );
};
