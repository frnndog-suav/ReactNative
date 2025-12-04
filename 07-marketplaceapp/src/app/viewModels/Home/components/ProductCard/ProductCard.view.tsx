import { Ionicons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../../../styles/colors";
import { useProductCardViewModel } from "./useProductCard.viewModel";

type TProps = ReturnType<typeof useProductCardViewModel>;

export const ProductCardView = (props: TProps) => {
  return (
    <TouchableOpacity
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
          source={{ uri: props.product.photo }}
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
          <Text className="text-sm font-semibold ml-1">
            {props.product.ratingCount}
          </Text>
        </View>
      </View>

      <View className="p-3">
        <Text className="text-xs font-semibold mb-1" numberOfLines={2}>
          {props.product.name}
        </Text>
        <View>
          <Text className="flex-row items-center justify-between">
            R$ {props.product.value}
          </Text>
        </View>
      </View>

      <Text>{props.product.name}</Text>
    </TouchableOpacity>
  );
};
