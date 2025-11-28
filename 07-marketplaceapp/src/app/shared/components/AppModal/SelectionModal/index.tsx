import { Ionicons } from "@expo/vector-icons";
import clsx from "clsx";
import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../../../styles/colors";
import {
  TSelectionOptions,
  TSelectionVariant,
} from "../../../hooks/useAppModal";

type TProps = {
  title: string;
  message?: string;
  options: TSelectionOptions[];
};

export type { TProps as TSelectionModalProps };

export const SelectionModal: FC<TProps> = ({ title, options, message }) => {
  const getButtonClass = (variant: TSelectionVariant) =>
    clsx(
      "w-full py-3 px-4 rounded-lg items-center flex-row justify-center mb-2",
      {
        "bg-danger": variant === "danger",
        "bg-primary": variant === "primary",
        "bg-secondary": variant === "secondary",
      }
    );

  return (
    <View className="bg-white rounded-xl shadow-2xl w-[85%] mx-auto max-w-sm p-6">
      <View className="items-center">
        <Text className="text-lg font-bold text-gray-900 mb-3">{title}</Text>

        {message && (
          <Text className="text-base text-gray-600 mb-6 leading-6">
            {message}
          </Text>
        )}
      </View>

      <View className="gap-3">
        {options.map((option) => (
          <TouchableOpacity
            onPress={option.onPress}
            className={getButtonClass(option.variant ?? "primary")}
          >
            {option.icon && (
              <Ionicons
                name={option.icon}
                size={20}
                colors={colors.white}
                className="mr-2"
              />
            )}
            <Text className="font-semibold text-white">{option.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
