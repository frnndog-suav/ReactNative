import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { EmptyList } from "./components/EmptyList";
import { Error } from "./components/Error";
import { ListHeader } from "./components/ListHeader";
import { Loading } from "./components/Loading";
import { OrderItem } from "./components/OrderItem";
import { useOrderViewModel } from "./use-orders-view-model";

interface IProps extends ReturnType<typeof useOrderViewModel> {}

export const OrdersView = ({ orders, error, isLoading }: IProps) => {
  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <SafeAreaView edges={["top"]} className="flex-1">
      <FlatList
        data={orders}
        contentContainerClassName="px-[16px] pb-[120px]"
        ListEmptyComponent={EmptyList}
        ListHeaderComponent={ListHeader}
        keyExtractor={({ id }) => `order-${id}`}
        renderItem={({ item: order }) => <OrderItem order={order} />}
      />
    </SafeAreaView>
  );
};
