import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

import getSingleProduct from "@/actions/get-single-product";
import { Container } from "@/components/Container";
import { Box } from "@/components/Box";
import { Gallery } from "./components/gallery/gallery";
import { Info } from "./components/info";
import getProduct from "@/actions/get-product";
import { SuggestedProducts } from "./components/suggested-products";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getSingleProduct(params.productId);
  // @ts-ignore
  const suggestedProducts = await getProduct({ category: product?.category });
  return (
    <Container className="my-10 rounded-md bg-white px-4 md:px-12">
      <Box className="items-center text-sm text-neutral-700">
        <Link href={"/"} className="flex items-center gap-2">
          <Home className="size-4" />
          Main Page
        </Link>
        <ChevronRight className="size-5" />
        <Link href={"/menu"}>Products</Link>
      </Box>

      <div className="space-y-10 py-10">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <Gallery images={product.images} />
          <div>
            <Info product={product} />
          </div>
        </div>
      </div>

      <SuggestedProducts product={suggestedProducts} />
    </Container>
  );
};

export default ProductPage;
