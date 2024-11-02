import { Input as GluestackInput, InputField } from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type TProps = ComponentProps<typeof InputField> & {
  isReadOnly?: boolean;
};

export function Input({ isReadOnly = false, ...rest }: TProps) {
  return (
    <GluestackInput
      borderWidth={1}
      borderColor="transparent"
      isReadOnly={isReadOnly}
      opacity={isReadOnly ? 0.5 : 1}
      $focus={{
        borderColor: "#00B37E",
        borderRadius: 8,
      }}
      style={{
        height: 50,
        width: "100%",
        justifyContent: "center",
      }}
    >
      <InputField
        borderRadius={8}
        placeholderTextColor="#7C7C8A"
        color="white"
        sx={{
          backgroundColor: "#121214",
          paddingVertical: 24,
          paddingHorizontal: 16,
        }}
        {...rest}
      />
    </GluestackInput>
  );
}
