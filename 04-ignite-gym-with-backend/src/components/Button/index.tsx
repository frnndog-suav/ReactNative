import {
  ButtonSpinner,
  Button as GluestackButton,
  Text,
} from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type TProps = ComponentProps<typeof GluestackButton> & {
  title: string;
  isLoading?: boolean;
  variant?: "solid" | "outlined";
};

export function Button({
  title,
  isLoading = false,
  variant = "solid",
  ...rest
}: TProps) {
  return (
    <GluestackButton
      style={{
        backgroundColor: variant === "outlined" ? "transparent" : "#00875F",
        borderWidth: variant === "outlined" ? 1 : 0,
        borderColor: "#00B37E",
        borderRadius: 8,
        height: 50,
      }}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ButtonSpinner color="white" style={{ marginTop: 15 }} />
      ) : (
        <Text
          style={{
            textAlign: "center",
            lineHeight: 45,
            color: variant === "outlined" ? "#00875F" : "white",
            fontWeight: variant === "outlined" ? 700 : 500
          }}
        >
          {title}
        </Text>
      )}
    </GluestackButton>
  );
}
