import { ICartProduct } from "../store/cart-store";

export const cartService = {
  findExistingProduct: (productList: ICartProduct[], productId: number) =>
    productList.some(({ id }) => id === productId),
  addProductToCart: (
    productList: ICartProduct[],
    newProduct: Omit<ICartProduct, "quantity">
  ) => {
    const existingProduct = cartService.findExistingProduct(
      productList,
      newProduct.id
    );

    if (existingProduct) {
      return productList.map((product) => {
        if (product.id === newProduct.id) {
          const formatted: ICartProduct = {
            ...product,
            quantity: product.quantity + 1,
          };

          return formatted;
        } else {
          return product;
        }
      });
    }

    const formattedNewProduct: ICartProduct = { ...newProduct, quantity: 1 };

    return [...productList, formattedNewProduct];
  },
  calculateTotal: (productList: ICartProduct[]) => {
    return productList.reduce((acc, curr) => {
      return acc + Number(curr.price) * curr.quantity;
    }, 0);
  },
};
