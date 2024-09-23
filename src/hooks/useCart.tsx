import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "react-hot-toast";

import { Product } from "../../types-db";

interface CartProps {
  items: Product[];

  addItems: (data: Product) => void;
  removeItem: (id: String) => void;
  removeAll: () => void;
  updateItemQuantity: (id: string, qty: number) => void;
}

export const useCart = create(
  persist<CartProps>(
    (set, get) => ({
      items: [],

      addItems: (data: Product) => {
        const currentItem = get().items;
        const existingItems = currentItem.find((item) => item.id === data.id);

        if (existingItems) {
          return toast("Item already in the cart");
        }

        set({ items: [...get().items, data] });
      },

      removeItem: (id) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast.success("Item remove from the cart");
      },

      removeAll: () => {
        set({ items: [] });
      },

      updateItemQuantity: (id: string, qty: number) => {
        const updateItems = get().items.map((item) =>
          item.id === id ? { ...item, qty } : item,
        );
        // @ts-ignore
        set({ items: updateItems });
      },
    }),
    {
      name: "Cart-Storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
