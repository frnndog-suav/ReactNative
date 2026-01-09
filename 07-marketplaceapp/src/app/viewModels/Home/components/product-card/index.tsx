import { IProduct } from "../../../../shared/interface/product";
import { ProductCardView } from "./view";
import { useProductCardViewModel } from "./view-model";

interface IProps {
  product: IProduct;
}

export const ProductCard = (props: IProps) => {
  const viewModel = useProductCardViewModel(props);

  return <ProductCardView {...viewModel} />;
};
