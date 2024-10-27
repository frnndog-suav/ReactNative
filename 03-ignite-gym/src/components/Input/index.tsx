import { Input as GluestackInput, InputField } from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof InputField>;

export function Input({ ...rest }: Props) {
  return (
    <GluestackInput
      style={{
        backgroundColor: "#121214",
        height: 40,
        width: 300,
        paddingHorizontal: 32,
        borderWidth: 0,
        borderRadius: 16,
        justifyContent: "center",
      }}
    >
      <InputField placeholderTextColor="#7C7C8A" {...rest} />
    </GluestackInput>
  );
}
