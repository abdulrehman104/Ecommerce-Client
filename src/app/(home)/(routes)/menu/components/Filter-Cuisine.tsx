"use client";

import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

import { Cuisines } from "../../../../../../types-db";
import { Box } from "@/components/Box";
import { cn } from "@/lib/utils";

interface FilterCuisinesProps {
  cuisines: Cuisines[];
}

export const FilterCuisine = ({ cuisines }: FilterCuisinesProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleOnClick = (cuisine: string) => {
    const currentParams = Object.fromEntries(searchParams.entries());

    if (currentParams.cuisine === cuisine) {
      delete currentParams.cuisine;
    } else {
      currentParams.cuisine = cuisine;
    }

    const href = qs.stringifyUrl({
      url: "/menu",
      query: currentParams,
    });

    router.push(href);
  };

  return (
    <Box className="cursor-pointer flex-col gap-2 border-b border-gray-200 pb-4">
      <h1 className="text-xl font-semibold text-neutral-700">Cuisines</h1>
      <Box className="mt-2 flex-col gap-2">
        {cuisines?.map((cuisines) => (
          <div
            onClick={() => handleOnClick(cuisines.name)}
            key={cuisines.id}
            className={cn(
              "flex items-center gap-2 text-sm font-semibold text-neutral-500",
              cuisines.name === searchParams.get("cuisines") && "text-hero",
            )}
          >
            <p>{cuisines.name}</p>
          </div>
        ))}
      </Box>
    </Box>
  );
};
