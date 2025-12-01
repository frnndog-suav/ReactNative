import { Ionicons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../../../styles/colors";
import { useUserStore } from "../../../../shared/store/user-store";

export const HomeHeader = () => {
  const { user } = useUserStore();

  return (
    <View>
      <TouchableOpacity className="flex-row items-center gap-6">
        <View className="relative ">
          {user?.avatarUrl ? (
            <Image
              source={{ uri: user?.avatarUrl }}
              className="w-[56px] h-[56px] rounded-[12px] border-shape"
            />
          ) : (
            <View className="w-[56px] h-[56px] rounded-[12px] bg-shape border-2 border-gray-200 items-center justify-center">
              <Ionicons name="person" size={24} color={colors.grays["300"]} />
            </View>
          )}
        </View>

        <View>
          <Text>{`Olá, ${user?.name}`}</Text>
          <View className="flex-row items-center gap-2">
            <Text className="color-purple-base font-bold text-sm">
              Ver perfil
            </Text>
            <Ionicons
              size={20}
              name="arrow-forward-outline"
              color={colors["purple-base"]}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
