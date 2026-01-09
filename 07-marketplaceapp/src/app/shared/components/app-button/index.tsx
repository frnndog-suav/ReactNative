import { Ionicons } from "@expo/vector-icons";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { colors } from "../../../../styles/colors";
import { buttonVariants, TButtonVariants } from "./button.variants";

interface IProps extends TouchableOpacityProps, TButtonVariants {
  leftIcon?: keyof typeof Ionicons.glyphMap;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  children: string;
}

export const AppButton = ({
  leftIcon,
  children,
  rightIcon,
  isLoading,
  className,
  isDisabled,
  variant = "filled",
  ...rest
}: IProps) => {
  const contentColor =
    variant === "filled" ? colors.white : colors["purple-base"];

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
        {leftIcon && (
          <Ionicons name={leftIcon} color={contentColor} size={20} />
        )}

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
};
