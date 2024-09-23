import getCategories from "@/actions/get-categories";
import getSize from "@/actions/get-size";
import getKitchen from "@/actions/get-kitchens";
import getCuisines from "@/actions/get-cuisines";
import getProduct from "@/actions/get-product";
import { Box } from "@/components/Box";
import { Container } from "@/components/Container";
import { FilterCategory } from "./components/Filter-Category";
import { FilterSize } from "./components/Filter-Size";
import { FilterCuisine } from "./components/Filter-Cuisine";
import { FilterContainer } from "@/components/Filter-Container";
import { Filterkitchen } from "./components/Filter-kitchen";
import { PageContent } from "./components/Page-Content";

interface MenuProps {
  searchParams: {
    size?: string;
    isFeatured?: boolean;
    category?: string;
    kitchen?: String;
    cuisines?: string;
  };
}

export const revalidate = 60;

const Menu = async ({ searchParams }: MenuProps) => {
  const categories = await getCategories();
  const sizes = await getSize();
  const kitchens = await getKitchen();
  const cuisines = await getCuisines();
  const product = await getProduct({
    size: searchParams?.size,
    category: searchParams?.category,
    cuisines: searchParams?.cuisines,
    kitchens: searchParams?.kitchen as string,
    isFeatured: searchParams?.isFeatured,
  });

  return (
    <Container className="px-4 md:px-12">
      <div className="grid grid-cols-1 gap-2 py-12 md:grid-cols-12 ">
        <div className="col-span-2 hidden border-r border-gray-200 md:block ">
          <FilterContainer>
            <FilterCategory category={categories} />
            <FilterSize sizes={sizes} />
            <Filterkitchen kitchens={kitchens} />
            <FilterCuisine cuisines={cuisines} />
          </FilterContainer>
        </div>
        <Box className="col-span-12 flex-col items-start justify-start md:col-span-10">
          <PageContent product={product} />
        </Box>
      </div>
    </Container>
  );
};

export default Menu;
