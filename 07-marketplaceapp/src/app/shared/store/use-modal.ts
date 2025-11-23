import { create } from "zustand";

type TConfig = {
  animationType?: "none" | "slide" | "fade";
  transparent?: boolean;
  statusBarTranslucent?: boolean;
};

type TModalStore = {
  isOpen: boolean;
  content: React.ReactNode | null;
  config: TConfig;
  open: (content: React.ReactNode, config: TConfig) => void;
  close: () => void;
};

export const useModalStore = create<TModalStore>((set, get) => ({
  isOpen: false,
  content: null,
  config: {
    animationType: "fade",
    transparent: true,
    statusBarTranslucent: false,
  },
  open: (content: React.ReactNode, config: TConfig) =>
    set({
      content,
      config: {
        ...get().config,
        ...config,
      },
    }),
  close: () => {
    set({
      content: null,
      isOpen: false,
    });
  },
}));
