import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
} from "react-hook-form";
import { AppInput, IAppInputProps } from "../app-input";

interface IProps<T extends FieldValues>
  extends Omit<IAppInputProps, "value" | "onChangeText" | "error"> {
  control: Control<T>;
  name: Path<T>;
  errors?: FieldErrors<T>;
}

export const AppInputController = <T extends FieldValues>({
  name,
  control,
  errors,
  ...rest
}: IProps<T>) => {
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
