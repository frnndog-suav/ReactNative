import { Ionicons } from "@expo/vector-icons";
import {
  Pressable,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { appInputVariants, TAppInputVariantsProps } from "./index.variants";
import { useAppInputViewModel } from "./view-model";

interface IProps extends TextInputProps, TAppInputVariantsProps {
  error?: string;
  label?: string;
  containerClassName?: string;
  leftIcon?: keyof typeof Ionicons.glyphMap;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  mask?: (value: string) => null | string;
}

export type { IProps as IAppInputProps };

export const AppInput = ({
  value,
  error,
  label,
  isError,
  leftIcon,
  rightIcon,
  className,
  isDisabled,
  containerClassName,
  secureTextEntry = false,
  mask,
  onBlur,
  onFocus,
  onChangeText,
  ...textInputProps
}: IProps) => {
  const {
    isFocused,
    showPassword,
    handleBlur,
    handleFocus,
    getIconColor,
    handleTextChange,
    handlePasswordToggle,
  } = useAppInputViewModel({
    value,
    isDisabled,
    secureTextEntry,
    isError: !!error,
    mask,
    onBlur,
    onFocus,
    onChangeText,
  });

  const styles = appInputVariants({
    isFocused,
    isDisabled,
    isError: !!error,
  });

  return (
    <View className={styles.container({ className: containerClassName })}>
      <Text className={styles.label()}>{label}</Text>
      <Pressable className={styles.wrapper()}>
        {leftIcon && (
          <Ionicons
            size={22}
            name={leftIcon}
            className="mr-3"
            color={getIconColor()}
          />
        )}

        <TextInput
          value={value}
          onBlur={handleBlur}
          onFocus={handleFocus}
          className={styles.input()}
          secureTextEntry={showPassword}
          onChangeText={handleTextChange}
          {...textInputProps}
        />

        {secureTextEntry && (
          <TouchableOpacity activeOpacity={0.7} onPress={handlePasswordToggle}>
            <Ionicons
              size={22}
              name={showPassword ? "eye-outline" : "eye-off-outline"}
            />
          </TouchableOpacity>
        )}
      </Pressable>

      {error && (
        <Text className={styles.error()}>
          <Ionicons name="alert-circle-outline" /> {error}
        </Text>
      )}
    </View>
  );
};
