import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { cartService } from "../services/cart.service";

export interface ICartProduct {
  id: number;
  name: string;
  price: string;
  quantity: number;
  image?: string;
}

interface ICartStore {
  products: ICartProduct[];
  total: number;
  addItem: (product: Omit<ICartProduct, "quantity">) => void;
  removeProduct: (productId: number) => void;
  updateQuantity: (params: { productId: number; quantity: number }) => void;
  clearCart: () => void;
  getItemCount: () => number;
}

export const useCartStore = create<ICartStore>()(
  persist(
    (set, get) => ({
      products: [],
      total: 0,
      addItem: (newProduct) =>
        set((state) => {
          const newItems = cartService.addProductToCart(
            state.products,
            newProduct
          );

          return {
            products: newItems,
            total: 1,
          };
        }),
      clearCart: () => set({ products: [], total: 0 }),
      getItemCount: () => 0,
      removeProduct: () => set({}),
      updateQuantity: () => set({}),
    }),
    {
      name: "marketplace-cart",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
