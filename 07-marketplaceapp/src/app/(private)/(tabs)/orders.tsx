import { OrdersView } from "../../viewModels/Orders/order-view";
import { useOrderViewModel } from "../../viewModels/Orders/use-orders-view-model";

export default function Orders() {
  const viewModel = useOrderViewModel();

  return <OrdersView {...viewModel} />;
}
