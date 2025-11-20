import { useRef, useState } from "react";
import { BlurEvent, FocusEvent, TextInput } from "react-native";
import { colors } from "../../../../styles/colors";

type TProps = {
  value?: string;
  isError?: boolean;
  isDisabled?: boolean;
  secureTextEntry?: boolean;
  mask?: (text: string) => string | null;
  onBlur?: (event: BlurEvent) => void;
  onFocus?: ((e: FocusEvent) => void) | undefined;
  onChangeText?: ((text: string) => void) | undefined;
};

export const useAppInputViewModel = (props: TProps) => {
  const inputRef = useRef<TextInput>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(props.secureTextEntry);

  const handlePasswordToggle = () => {
    setShowPassword((prev) => !prev);
  };

  const handleWrapperPress = () => {
    inputRef.current?.focus();
  };

  const handleFocus = (event: FocusEvent) => {
    setIsFocused(true);
    props.onFocus?.(event);
  };

  const handleBlur = (event: BlurEvent) => {
    setIsFocused(false);
    props.onBlur?.(event);
  };

  const getIconColor = () => {
    if (props.isError) {
      return colors.danger;
    }

    if (isFocused) {
      return colors["purple-base"];
    }

    if (props.value) {
      return colors["purple-base"];
    }

    return colors.grays[200];
  };

  const handleTextChange = (text: string) => {
    if (props.mask) {
      props.onChangeText?.(props.mask(text) || "");
    } else {
      props.onChangeText?.(text);
    }
  };

  return {
    isFocused,
    showPassword,
    handleBlur,
    handleFocus,
    getIconColor,
    handleTextChange,
    handleWrapperPress,
    handlePasswordToggle,
  };
};
