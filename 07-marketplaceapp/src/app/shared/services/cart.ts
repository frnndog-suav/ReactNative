import { TCartProduct } from "../store/use-cart-store";

export const cartService = {
  findExistingProduct: (productList: TCartProduct[], productId: number) =>
    productList.some(({ id }) => id === productId),
  addProductToCart: (
    productList: TCartProduct[],
    newProduct: Omit<TCartProduct, "quantity">,
  ) => {
    const existingProduct = cartService.findExistingProduct(
      productList,
      newProduct.id,
    );

    if (existingProduct) {
      const products = productList.map((product) => {
        if (product.id === newProduct.id) {
          const formatted: TCartProduct = {
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

    const formattedNewProduct: TCartProduct = { ...newProduct, quantity: 1 };

    const products = [...productList, formattedNewProduct];
    const total = cartService.calculateTotal(products);

    return { products, total };
  },
  calculateTotal: (productList: TCartProduct[]) => {
    return productList.reduce((acc, curr) => {
      return acc + Number(curr.price) * curr.quantity;
    }, 0);
  },
  removeProductFromLost: (productList: TCartProduct[], idToRemove: number) => {
    const products = productList.filter((product) => product.id !== idToRemove);
    const total = cartService.calculateTotal(products);

    return { products, total };
  },
  updateProductQuantity: ({
    productId,
    productList,
    quantity,
  }: {
    productList: TCartProduct[];
    productId: number;
    quantity: number;
  }) => {
    if (quantity <= 0) {
      return cartService.removeProductFromLost(productList, productId);
    }

    const updatedProducts = productList.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity };
      }

      return product;
    });

    const total = cartService.calculateTotal(updatedProducts);

    return { products: updatedProducts, total };
  },
  getItemCount: (productList: TCartProduct[]) => {
    return productList.reduce((acc, curr) => acc + curr.quantity, 0);
  },
};
