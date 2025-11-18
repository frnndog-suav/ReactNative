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
import { useAppInputViewModel } from "./useAppInputViewModel";

type TProps = TextInputProps &
  TAppInputVariantsProps & {
    error?: string;
    label?: string;
    containerClassName?: string;
    leftIcon?: keyof typeof Ionicons.glyphMap;
    rightIcon?: keyof typeof Ionicons.glyphMap;
    mask?: (value: string) => null | string;
  };

export const AppInput: FC<TProps> = ({
  value,
  error,
  label,
  isError,
  leftIcon,
  rightIcon,
  className,
  containerClassName,
  secureTextEntry = false,
  mask,
  isDisabled,
  onBlur,
  onFocus,
  onChangeText,
  ...textInputProps
}) => {
  const {
    showPassword,
    handleBlur,
    handleFocus,
    getIconColor,
    handleWrapperPress,
    handlePasswordToggle,
  } = useAppInputViewModel({
    error,
    value,
    isDisabled,
    secureTextEntry,
    isError: !!error,
    mask,
    onBlur,
    onFocus,
    onChangeText,
  });

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
