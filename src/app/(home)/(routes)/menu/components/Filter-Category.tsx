"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { Category } from "../../../../../../types-db";
import { Box } from "@/components/Box";
import { cn } from "@/lib/utils";
import qs from "query-string";

interface FilterCategoryProps {
  category: Category[];
}
export const FilterCategory = ({ category }: FilterCategoryProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleOnClick = (category: string) => {
    const currentParams = Object.fromEntries(searchParams.entries());

    if (currentParams.category == category) {
      delete currentParams.category;
    } else {
      currentParams.category = category;
    }

    const href = qs.stringifyUrl({
      url: "/menu",
      query: currentParams,
    });

    router.push(href);
  };
  return (
    <Box className="cursor-pointer flex-col gap-2 border-b border-gray-200 pb-4 ">
      <h1 className="text-xl font-semibold text-neutral-700">Categories</h1>
      <Box className="mt-2 flex-col gap-2">
        {category?.map((category) => (
          <div
            onClick={() => handleOnClick(category.name)}
            key={category.id}
            className={cn(
              "flex items-center gap-2 text-sm font-semibold text-neutral-500",
              category.name === searchParams.get("category") && "text-hero",
            )}
          >
            <p>{category.name}</p>
          </div>
        ))}
      </Box>
    </Box>
  );
};
