import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { colors } from "../../../../../styles/colors";
import { AppButton } from "../../app-button";

interface IProps {
  title: string;
  message?: string;
  buttonText?: string;
  onButtonPress?: () => void;
}

export { IProps as ISuccessModalProps };

export const SuccessModal = ({
  title,
  message,
  buttonText = "Fechar",
  onButtonPress,
}: IProps) => {
  return (
    <View className="bg-white rounded-2xl p-6 w-[85%] mx-w-sm mx-auto">
      <View className="items-center">
        <View className="mb-4 w-16 h-16 bg-green-100 rounded-full items-center justify-center">
          <Ionicons name="checkmark-circle" color={colors.success} size={40} />
        </View>

        <Text className="text-xl font-bold text-gray-900 text-center mb-3">
          {title}
        </Text>

        {message && (
          <Text className="text-gray-700 text-center mb-4">{message}</Text>
        )}

        <AppButton onPress={onButtonPress}>{buttonText}</AppButton>
      </View>
    </View>
  );
};
