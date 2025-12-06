import { TProduct } from "../../../../shared/types/product";
import { ProductCardView } from "./product-card.view";
import { useProductCardViewModel } from "./use-product-card.viewModel";

type TProps = {
  product: TProduct;
};

export const ProductCard = (props: TProps) => {
  const viewModel = useProductCardViewModel(props);

  return <ProductCardView {...viewModel} />;
};
