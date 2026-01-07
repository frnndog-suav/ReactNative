import { Image, Text, View } from "react-native";
import { buildImageUrl } from "../../../../shared/helpers/build-image-url";
import { TOrder } from "../../../../shared/types/order";

interface IProps {
  order: TOrder;
}

export const OrderItem = ({ order }: IProps) => {
  console.log("order", order.productPhoto);

  return (
    <View className="flex-row items-center bg-white p-3 pl-0 mb-3 rounded-lg h-[89px]">
      <View className="p-1">
        <Image
          source={{ uri: buildImageUrl(order.productPhoto) }}
          className="w-[88px] h-[80px] rounded-lg mr-4"
          resizeMode="cover"
        />
      </View>

      <View className="flex-1 justify-between py-4">
        <View className="flex-row justify-between items-start">
          <Text
            className="text-base font-semibold text-gray-900 flex-1 mr-2"
            numberOfLines={1}
          >
            {order.productName}
          </Text>

          <Text>{order.createdAt.toString()}</Text>
        </View>

        <Text>
          {order.quantity} - {order.totalPrice}
        </Text>

        <Text>{order.creditCard.maskedNumber}</Text>
      </View>

      <Text>{order.productName}</Text>
    </View>
  );
};
