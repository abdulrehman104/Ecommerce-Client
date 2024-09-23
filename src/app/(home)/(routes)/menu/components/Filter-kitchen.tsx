"use client";

import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

import { Kitchens } from "../../../../../../types-db";
import { Box } from "@/components/Box";
import { cn } from "@/lib/utils";

interface FilterKitchenProps {
  kitchens: Kitchens[];
}

export const Filterkitchen = ({ kitchens }: FilterKitchenProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleOnClick = (kitchen: string) => {
    const currentParams = Object.fromEntries(searchParams.entries());

    if (currentParams.kitchen === kitchen) {
      delete currentParams.kitchen;
    } else {
      currentParams.kitchen = kitchen;
    }

    const href = qs.stringifyUrl({
      url: "/menu",
      query: currentParams,
    });

    router.push(href);
  };

  return (
    <Box className="cursor-pointer flex-col gap-2 border-b border-gray-200 pb-4">
      <h1 className="text-xl font-semibold text-neutral-700">Kitchens</h1>
      <Box className="mt-2 flex-col gap-2">
        {kitchens?.map((kitchen) => (
          <div
            onClick={() => handleOnClick(kitchen.name)}
            key={kitchen.id}
            className={cn(
              "flex items-center gap-2 text-sm font-semibold text-neutral-500",
              kitchen.name === searchParams.get("kitchen") && "text-hero",
            )}
          >
            <p>{kitchen.name}</p>
          </div>
        ))}
      </Box>
    </Box>
  );
};
