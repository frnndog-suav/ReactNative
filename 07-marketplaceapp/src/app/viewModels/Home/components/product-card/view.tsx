import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../../../styles/colors";
import { AppPriceText } from "../../../../shared/components/app-price-text";
import { useProductCardViewModel } from "./view-model";

interface IProps extends ReturnType<typeof useProductCardViewModel> {}

export const ProductCardView = ({
  displayName,
  product,
  formatRating,
}: IProps) => {
  return (
    <TouchableOpacity
      onPress={() => router.push(`/product/${product.id}`)}
      className="
      w-[48%] 
      my-1 
      rounded-xl 
      shadow-sm 
      overflow-hidden 
      h-[157px] 
      p-[4px] 
      mb-2 
    bg-white
    "
    >
      <View>
        <Image
          source={{ uri: product.photo }}
          className="w-full h-[96px] rounded-[6px]"
          resizeMode="cover"
        />
        <View
          className="
          absolute 
          top-0 
          right-0 
          flex-row 
          items-center 
          px-2 
          py-1 
          rounded-b-lg 
          rounded-r-none 
          bg-white
          "
        >
          <Ionicons name="star" size={12} color={colors["blue-base"]} />
          <Text className="text-sm font-semibold ml-1">{formatRating}</Text>
        </View>
      </View>

      <View className="p-3">
        <Text className="text-xs font-semibold mb-1" numberOfLines={2}>
          {displayName}
        </Text>
        <View>
          <AppPriceText
            classNameCurrency="text-small"
            classNameValue="text-lg font-bold flex-1"
            value={Number(product.value)}
          />
        </View>
      </View>

      <Text>{product.name}</Text>
    </TouchableOpacity>
  );
};
