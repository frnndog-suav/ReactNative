import { Ionicons } from "@expo/vector-icons";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { colors } from "../../../../styles/colors";
import { buttonVariants, TButtonVariants } from "./button.variants";

type TProps = TouchableOpacityProps &
  TButtonVariants & {
    leftIcon?: keyof typeof Ionicons.glyphMap;
    rightIcon?: keyof typeof Ionicons.glyphMap;
    children: string;
  };

export function AppButton({
  leftIcon,
  children,
  variant = "filled",
  rightIcon,
  isDisabled,
  isLoading,
  className,
  ...rest
}: TProps) {
  const contentColor =
    variant === "filled" ? colors["purple-base"] : colors.white;

  const styles = buttonVariants({
    hasIcon: !!leftIcon || !!rightIcon,
    isDisabled,
    isLoading,
    variant,
  });

  const renderContent = () => {
    if (isLoading) {
      return <ActivityIndicator size={"small"} color={contentColor} />;
    }

    return (
      <>
        {leftIcon && <Ionicons name={leftIcon} color={contentColor} />}

        <Text className={styles.text()}>{children}</Text>

        {rightIcon && <Ionicons name={rightIcon} color={contentColor} />}
      </>
    );
  };

  return (
    <TouchableOpacity {...rest} className={styles.base({ className })}>
      {renderContent()}
    </TouchableOpacity>
  );
}
