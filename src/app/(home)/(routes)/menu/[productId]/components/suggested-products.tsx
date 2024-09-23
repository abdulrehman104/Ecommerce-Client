"use client";

import { useParams } from "next/navigation";
import { Product } from "../../../../../../../types-db";
import { PopularContent } from "@/components/Popular-content ";

interface SuggestedProductsProps {
  product: Product[];
}

export const SuggestedProducts = ({ product }: SuggestedProductsProps) => {
  const { productId } = useParams();

  return (
    <>
      <h2 className="text-3xl font-semibold text-neutral-700">
        Related Products
      </h2>
      <div className="my-6 grid grid-cols-2 gap-6 gap-y-20 py-12 md:col-span-3 md:gap-x-4 md:gap-y-24 lg:grid-cols-4">
        {product
          .filter((item) => item.id !== productId)
          .map((item) => (
            <PopularContent data={item} key={item.id} />
          ))}
      </div>
    </>
  );
};
