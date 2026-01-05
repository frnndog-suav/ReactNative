import { CartView } from "../../viewModels/Cart/cart-view";
import { useCartViewModel } from "../../viewModels/Cart/use-cart-view-model";

export default function Cart() {
  const viewModal = useCartViewModel();

  return <CartView {...viewModal} />;
}
