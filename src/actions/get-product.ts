import qs from "query-string";
import { Product } from "../../types-db";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  size?: string;
  cuisines?: string;
  kitchens?: string;
  category?: string;
  isFeatured?: boolean;
}

const getProduct = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      size: query.size,
      cuisines: query.cuisines,
      kitchens: query.kitchens,
      category: query.category,
    },
  });

  const res = await fetch(URL);
  return res.json();
};

export default getProduct;
