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
      true: {
        label: "text-purple-base",
        wrapper: "border-purple-base",
      },
    },
    isError: {
      true: {
        wrapper: "border-danger",
        label: "text-danger",
      },
    },
    isDisabled: {
      true: {
        wrapper: "opacity-50",
        input: "text-gray-300",
      },
    },
  },
  defaultVariants: {
    isError: false,
    isFocused: false,
    isDisabled: false,
  },
});

export type TAppInputVariantsProps = VariantProps<typeof appInputVariants>;
