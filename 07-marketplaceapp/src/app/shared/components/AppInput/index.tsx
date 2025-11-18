import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import {
  Pressable,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { appInputVariants, TAppInputVariantsProps } from "./index.variants";

type TProps = TextInputProps &
  TAppInputVariantsProps & {
    label?: string;
    containerClassName?: string;
    mask?: (value: string) => void | string;
    leftIcon?: keyof typeof Ionicons.glyphMap;
    rightIcon?: keyof typeof Ionicons.glyphMap;
  };

export const AppInput: FC<TProps> = ({
  mask,
  label,
  leftIcon,
  rightIcon,
  className,
  containerClassName,
  ...textInputProps
}) => {
  const styles = appInputVariants({});

  return (
    <View className={styles.container({ className: containerClassName })}>
      <Text className={styles.label()}>Label</Text>
      <Pressable className={styles.wrapper()}>
        <Ionicons size={22} name="person" />

        <TextInput className={styles.input()} {...textInputProps} />

        <TouchableOpacity>
          <Ionicons size={22} name="eye-off-outline" />
        </TouchableOpacity>
      </Pressable>
    </View>
  );
};
