import { TProduct } from "../../../../shared/types/product";

type TProps = {
  product: TProduct;
};

export const useProductCardViewModel = ({ product }: TProps) => {
  return { product };
};
