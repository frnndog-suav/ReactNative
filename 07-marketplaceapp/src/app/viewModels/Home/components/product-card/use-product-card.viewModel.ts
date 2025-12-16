import { TProduct } from "../../../../shared/types/product";

type TProps = {
  product: TProduct;
};

export const useProductCardViewModel = ({ product }: TProps) => {
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
