import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TSelectionOptions } from "../../../hooks/useAppModal";

type TProps = {
  title: string;
  message?: string;
  options: TSelectionOptions[];
};

export type { TProps as TSelectionModalProps };

export const SelectionModal: FC<TProps> = ({ title, options, message }) => {
  return (
    <View className="bg-white rounded-xl shadow-2xl w-[85%] mx-auto max-w-sm p-6">
      <Text>{title}</Text>

      {message && <Text>{message}</Text>}

      <View>
        {options.map((option) => (
          <TouchableOpacity
            onPress={option.onPress}
            className="w-full py-3 px-4 rounded-lg items-center flex-row justify-center mb-2"
          >
            {option.icon && <Ionicons name={option.icon} size={20} />}
            <Text>{option.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
