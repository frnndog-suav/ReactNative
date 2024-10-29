import { Input as GluestackInput, InputField } from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type TProps = ComponentProps<typeof InputField>;

export function Input({ ...rest }: TProps) {
  return (
    <GluestackInput
      $focus={{
        borderWidth: 1,
        borderColor: '#00B37E'
      }}
      style={{
        backgroundColor: "#121214",
        height: 50,
        width: 300,
        paddingHorizontal: 32,
        borderRadius: 8,
        justifyContent: "center",
      }}
    >
      <InputField placeholderTextColor="#7C7C8A" {...rest} />
    </GluestackInput>
  );
}
