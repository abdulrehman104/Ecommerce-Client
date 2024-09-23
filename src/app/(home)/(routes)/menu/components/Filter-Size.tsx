"use client";

import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

import { Size } from "../../../../../../types-db";
import { Box } from "@/components/Box";
import { cn } from "@/lib/utils";

interface FilterSizeProps {
  sizes: Size[];
}

export const FilterSize = ({ sizes }: FilterSizeProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleOnClick = (size: string) => {
    const currentParams = Object.fromEntries(searchParams.entries());

    if (currentParams.size === size) {
      delete currentParams.size;
    } else {
      currentParams.size = size;
    }

    const href = qs.stringifyUrl({
      url: "/menu",
      query: currentParams,
    });

    router.push(href);
  };

  return (
    <Box className="cursor-pointer flex-col gap-2 border-b border-gray-200 pb-4">
      <h1 className="text-xl font-semibold text-neutral-700">Sizes</h1>
      <Box className="mt-2 flex-col gap-2">
        {sizes?.map((size) => (
          <div
            onClick={() => handleOnClick(size.name)}
            key={size.id}
            className={cn(
              "flex items-center gap-2 text-sm font-semibold text-neutral-500",
              size.name === searchParams.get("size") && "text-hero",
            )}
          >
            <p>{size.name}</p>
          </div>
        ))}
      </Box>
    </Box>
  );
};
