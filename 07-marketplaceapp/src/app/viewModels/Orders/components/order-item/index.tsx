import { format } from "date-fns";
import { Image, Text, View } from "react-native";
import { AppPriceText } from "../../../../shared/components/app-price-text";
import { buildImageUrl } from "../../../../shared/helpers/build-image-url";
import { IOrder } from "../../../../shared/interface/order";

interface IProps {
  order: IOrder;
}

export const OrderItem = ({ order }: IProps) => {
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

          <Text className="text-sm text-gray-600">
            {format(order.createdAt, "dd/MM/yyyy")}
          </Text>
        </View>

        <View className="flex-row mb-2">
          <Text className="text-sm text-gray-600 mr-1">
            {order.quantity} unidade(s) -{" "}
          </Text>
          <AppPriceText
            value={order.totalPrice}
            classNameCurrency="text-sm text-gray-600"
            classNameValue="text-sm text-gray-600"
          />
        </View>

        <Text className="text-sm text-gray-600">
          Cartão final {order.creditCard.maskedNumber.slice(-4)}
        </Text>
      </View>
    </View>
  );
};
