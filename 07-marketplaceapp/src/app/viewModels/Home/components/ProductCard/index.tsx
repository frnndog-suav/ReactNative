import { TProduct } from "../../../../shared/types/product";
import { ProductCardView } from "./ProductCard.view";
import { useProductCardViewModel } from "./useProductCard.viewModel";

type TProps = {
  product: TProduct;
};

export const ProductCard = (props: TProps) => {
  const viewModel = useProductCardViewModel(props);

  return <ProductCardView {...viewModel} />;
};
