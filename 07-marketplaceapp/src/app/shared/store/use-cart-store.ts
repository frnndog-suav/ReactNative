import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { cartService } from "../services/cart";

export type TCartProduct = {
  id: number;
  name: string;
  price: string;
  quantity: number;
  image?: string;
};

interface ICartStore {
  products: TCartProduct[];
  total: number;
  addProduct: (product: Omit<TCartProduct, "quantity">) => void;
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
      addProduct: (newProduct) =>
        set((state) => {
          return cartService.addProductToCart(state.products, newProduct);
        }),
      clearCart: () => set({ products: [], total: 0 }),
      getItemCount: () => cartService.getItemCount(get().products),
      removeProduct: (productId) =>
        set((state) => {
          const newProductList = cartService.removeProductFromLost(
            state.products,
            productId
          );

          return newProductList;
        }),
      updateQuantity: ({ productId, quantity }) =>
        set((state) =>
          cartService.updateProductQuantity({
            productId,
            productList: state.products,
            quantity,
          })
        ),
    }),
    {
      name: "marketplace-cart",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
