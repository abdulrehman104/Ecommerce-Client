"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ChevronRight, Home, X } from "lucide-react";
import qs from "query-string";
import Link from "next/link";

import { Product } from "../../../../../../types-db";
import { Box } from "@/components/Box";
import { PopularContent } from "@/components/Popular-content ";

interface PageContentProps {
  product: Product[];
}

export const PageContent = ({ product }: PageContentProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentParams = Object.fromEntries(searchParams.entries());

  const handleOnClick = (param: string) => {
    if (currentParams.hasOwnProperty(param)) {
      const newParam = { ...currentParams };
      delete newParam[param];
      const href = qs.stringifyUrl({
        url: "/menu",
        query: newParam,
      });

      router.push(href);
    }
  };

  return (
    <>
      <Box className="flex-col items-start pb-24 pt-4">
        <Box className="items-center text-sm text-neutral-700">
          <Link href={"/"} className="flex items-center gap-2">
            <Home className="size-4" />
            Main Page
          </Link>
          <ChevronRight className="size-5" />
          <Link href={"/menu"}>Products</Link>

          {searchParams.get("category") && (
            <>
              <ChevronRight className="size-5" />
              {searchParams.get("category")}
            </>
          )}
        </Box>
        <Box className="mt-8 flex-col items-start">
          {searchParams.get("category") && (
            <>
              <h2 className="text-3xl font-semibold text-neutral-700">
                {searchParams.get("category")}
              </h2>
            </>
          )}

          <Box className="my-4 gap-3">
            {currentParams &&
              Object.entries(currentParams).map(([key, value]) => (
                <div
                  key={key} // Ensure each element has a unique key
                  className="flex cursor-pointer items-center gap-1 rounded-md bg-emerald-500/10 px-4 py-1 text-neutral-600 hover:shadow-md"
                  onClick={() => handleOnClick(key)}
                >
                  {value}
                  <X className="size-4" />
                </div>
              ))}
          </Box>
        </Box>
      </Box>

      <div className="grid size-full grid-cols-2 gap-4 gap-y-24 lg:grid-cols-3">
        {product.length > 0 ? (
          <>
            {product.map((item) => (
              <PopularContent key={item.id} data={item} />
            ))}
          </>
        ) : (
          <>
            <Box className="text-muted-foreground col-span-12 items-center justify-center py-12 text-xl font-bold">
              No Product Avaliable
            </Box>
          </>
        )}
      </div>
    </>
  );
};
