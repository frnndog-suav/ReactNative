import {
  FormControl,
  FormControlError,
  FormControlErrorText,
  Input as GluestackInput,
  InputField,
} from "@gluestack-ui/themed";
import { ComponentProps } from "react";
import { MY_THEME_CONTROLLER } from "../../theme";

type TProps = ComponentProps<typeof InputField> & {
  isReadOnly?: boolean;
  errorMessage?: string | null;
  isInvalid?: boolean;
};

export function Input({
  isReadOnly = false,
  errorMessage = null,
  isInvalid = false,
  ...rest
}: TProps) {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid} sx={{ width: "100%" }} marginBottom={8}>
      <GluestackInput
        isInvalid={invalid}
        borderWidth={1}
        borderColor="transparent"
        isReadOnly={isReadOnly}
        opacity={isReadOnly ? 0.5 : 1}
        $focus={{
          borderColor: invalid
            ? MY_THEME_CONTROLLER.COLORS.RED_500
            : MY_THEME_CONTROLLER.COLORS.GREEN_500,
          borderRadius: 8,
        }}
        $invalid={{
          borderColor: MY_THEME_CONTROLLER.COLORS.RED_500,
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
      <FormControlError>
        <FormControlErrorText color={MY_THEME_CONTROLLER.COLORS.RED_500}>
          {errorMessage}
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
}
