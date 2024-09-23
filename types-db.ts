export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  isFeatured: boolean;
  size: Size;
  category: Category;
  kitchen: Kitchens;
  cuisines: Cuisines;
  images: Image[];
  qty: number;
}

export interface Image {
  id: string;
  url: string;
}

export interface Size {
  id: string;
  name: string;
  value: String;
}

export interface Kitchens {
  id: string;
  name: string;
  value: String;
}

export interface Cuisines {
  id: string;
  name: string;
  value: String;
}

export interface Order {
  id: string;
  storeId: string;
  isPaid: boolean;
  orderStatus: string;
  phone: string;
  adress: string;
  orderItems: Product[];
}
