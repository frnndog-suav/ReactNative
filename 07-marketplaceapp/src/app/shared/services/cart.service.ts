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
      const products = productList.map((product) => {
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

      const total = cartService.calculateTotal(products);

      return {
        products,
        total,
      };
    }

    const formattedNewProduct: ICartProduct = { ...newProduct, quantity: 1 };

    const products = [...productList, formattedNewProduct];
    const total = cartService.calculateTotal(products);

    return { products, total };
  },
  calculateTotal: (productList: ICartProduct[]) => {
    return productList.reduce((acc, curr) => {
      return acc + Number(curr.price) * curr.quantity;
    }, 0);
  },
  removeProductFromLost: (productList: ICartProduct[], idToRemove: number) => {
    const products = productList.filter((product) => product.id !== idToRemove);
    const total = cartService.calculateTotal(products);

    return { products, total };
  },
};
