import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useOrderViewModel } from "./use-orders-view-model";

interface IProps extends ReturnType<typeof useOrderViewModel> {}

export const OrdersView = ({ orders }: IProps) => {
  return (
    <SafeAreaView className="flex-1">
      <FlatList
        data={orders}
        renderItem={({ item: order }) => <Text>{order.productName}</Text>}
      />
    </SafeAreaView>
  );
};
