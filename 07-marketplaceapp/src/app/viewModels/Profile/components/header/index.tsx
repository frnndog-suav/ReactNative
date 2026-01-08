import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../../../styles/colors";

interface IProps {
  handleLogout: () => void;
}

export const Header = ({ handleLogout }: IProps) => {
  return (
    <View className="flex-row justify-between items-center  border-shape">
      <TouchableOpacity
        onPress={router.back}
        className="flex-row items-center gap-1"
      >
        <Ionicons name="arrow-back" color={colors["purple-base"]} size={24} />
        <Text className="text-base text-purple-base">Voltar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleLogout}
        className="flex-row items-center gap-1"
      >
        <Ionicons name="log-out-outline" color={colors.danger} size={20} />
        <Text className="text-danger text-base">Sair</Text>
      </TouchableOpacity>
    </View>
  );
};
