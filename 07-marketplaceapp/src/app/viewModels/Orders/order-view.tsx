import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { OrderItem } from "./components/OrderItem";
import { useOrderViewModel } from "./use-orders-view-model";

interface IProps extends ReturnType<typeof useOrderViewModel> {}

export const OrdersView = ({ orders }: IProps) => {
  return (
    <SafeAreaView className="flex-1">
      <FlatList
        contentContainerClassName="px-[16px] pb-[120px]"
        data={orders}
        renderItem={({ item: order }) => <OrderItem order={order} />}
        keyExtractor={({ id }) => `order-${id}`}
      />
    </SafeAreaView>
  );
};
