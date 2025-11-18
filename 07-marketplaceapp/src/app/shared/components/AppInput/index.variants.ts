import { tv, VariantProps } from "tailwind-variants";

export const appInputVariants = tv({
  slots: {
    container: "w-full my-4",
    error: "text-sm text-danger mt-1",
    label: "text-xs text-gray-300 mb-3 font-semibold",
    input: "bg-transparent text-gray-500 text-base flex-1",
    wrapper: "flex-row items-center border-b border-gray-200 pb-2",
  },
  variants: {
    isFocused: {
      true: {},
    },
    isError: {
      true: {},
    },
    isDisabled: {
      true: {},
    },
  },
  defaultVariants: {
    isError: false,
    isFocused: false,
    isDisabled: false,
  },
});

export type TAppInputVariantsProps = VariantProps<typeof appInputVariants>;
