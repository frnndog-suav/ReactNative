import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
} from "react-hook-form";
import { AppInput, TAppInputProps } from "../AppInput";

type TProps<T extends FieldValues> = Omit<
  TAppInputProps,
  "value" | "onChangeText" | "error"
> & {
  control: Control<T>;
  name: Path<T>;
  errors?: FieldErrors<T>;
};

export const AppInputController = <T extends FieldValues>({
  name,
  control,
  errors,
  ...rest
}: TProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
        formState: { isSubmitting },
      }) => (
        <AppInput
          value={value}
          onBlur={onBlur}
          error={error?.message}
          onChangeText={onChange}
          isDisabled={isSubmitting || rest.isDisabled}
          {...rest}
        />
      )}
    />
  );
};
