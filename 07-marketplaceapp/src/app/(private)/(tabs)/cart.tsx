import { CartView } from "../../viewModels/Cart/view";
import { useCartViewModel } from "../../viewModels/Cart/view-model";

export default function Cart() {
  const viewModal = useCartViewModel();

  return <CartView {...viewModal} />;
}
