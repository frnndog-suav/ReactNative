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
}: TProps<T>) => {
  return (
    <Controller name={name} control={control} render={() => <AppInput />} />
  );
};
