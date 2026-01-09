import { TCartProduct } from "../../../../shared/store/use-cart-store";
import { ProductCardCardView } from "./view";
import { useProductCartCardViewModel } from "./view-model";

interface IProps {
  product: TCartProduct;
}

export const ProductCartCard = ({ product }: IProps) => {
  const viewModel = useProductCartCardViewModel();

  return <ProductCardCardView product={product} {...viewModel} />;
};
