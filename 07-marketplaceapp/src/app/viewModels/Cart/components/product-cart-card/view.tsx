import { Image, Text, TouchableOpacity, View } from "react-native";
import { AppPriceText } from "../../../../shared/components/app-price-text";
import { buildImageUrl } from "../../../../shared/helpers/build-image-url";
import { TCartProduct } from "../../../../shared/store/use-cart-store";
import { useProductCartCardViewModel } from "./view-model";

interface IProps extends ReturnType<typeof useProductCartCardViewModel> {
  product: TCartProduct;
}

export const ProductCardCardView = ({
  product,
  handleDecrement,
  handleIncrement,
}: IProps) => {
  return (
    <View className="bg-white h-[71px] w-full flex-row items-center px-2 mb-2 rounded-lg">
      <Image
        className="w-16 h-16 rounded-md mr-4"
        source={{ uri: buildImageUrl(product.image ?? "") }}
        resizeMode="cover"
      />

      <View className="flex-1 mr-3">
        <Text className="text-sm font-normal text-gray-800 mb-1">
          {product.name}
        </Text>
        <AppPriceText
          classNameCurrency="text-sm font-bold"
          classNameValue="text-sm font-bold"
          value={Number(product.price)}
        />
      </View>

      <View className="flex-row items-center">
        <TouchableOpacity
          onPress={() => handleDecrement(product.id, product.quantity)}
          className="w-[18px] h-[18px] border-purple-base rounded-md items-center justify-center border-2"
        >
          <Text className="text-base font-medium text-purple-base text-center leading-none">
            -
          </Text>
        </TouchableOpacity>

        <View className="mx-2 items-center justify-center min-w-[24px] border-b border-b-gray-300">
          <Text className="text-base font-medium text-gray-700">
            {product.quantity}
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => handleIncrement(product.id, product.quantity)}
          className="w-[18px] h-[18px] border-purple-base rounded-md items-center justify-center border-2"
        >
          <Text className="text-base font-medium text-purple-base text-center leading-none">
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
