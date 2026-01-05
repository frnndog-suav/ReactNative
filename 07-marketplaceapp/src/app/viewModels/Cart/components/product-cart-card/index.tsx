import { ICartProduct } from "../../../../shared/store/cart-store";
import { ProductCardCardView } from "./product-card-view";
import { useProductCartCardViewModel } from "./use-product-cart-card-view-model";

interface IProps {
  product: ICartProduct;
}

export const ProductCartCard = ({ product }: IProps) => {
  const viewModel = useProductCartCardViewModel();

  return <ProductCardCardView product={product} {...viewModel} />;
};
