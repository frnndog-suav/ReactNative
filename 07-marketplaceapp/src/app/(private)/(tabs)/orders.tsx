import { OrdersView } from "../../viewModels/Orders/view";
import { useOrderViewModel } from "../../viewModels/Orders/view-model";

export default function Orders() {
  const viewModel = useOrderViewModel();

  return <OrdersView {...viewModel} />;
}
