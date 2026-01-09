import { IProduct } from "../../../../shared/interface/product";

interface IProps {
  product: IProduct;
}

export const useProductCardViewModel = ({ product }: IProps) => {
  const displayName = formatProductName(product.name);

  function formatProductName(name: string) {
    if (name.length > 17) {
      return `${name.slice(0, 17)}...`;
    }

    return name;
  }

  const formatRating = product.averageRating.toFixed(1).replace(",", ".");

  return { product, displayName, formatRating };
};
