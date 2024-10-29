import {
  ButtonSpinner,
  Button as GluestackButton,
  Text,
} from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type TProps = ComponentProps<typeof GluestackButton> & {
  title: string;
  isLoading?: boolean;
};

export function Button({ title, isLoading = true, ...rest }: TProps) {
  return (
    <GluestackButton
      style={{
        backgroundColor: "#00875F",
        borderWidth: 1,
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
            color: "white",
          }}
        >
          {title}
        </Text>
      )}
    </GluestackButton>
  );
}
