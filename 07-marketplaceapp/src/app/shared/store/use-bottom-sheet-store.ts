import { create } from "zustand";

type TBottomSheetConfig = {
  snapPoints?: string[];
  enablePanDownToClose?: boolean;
};

type TBottomSheetStore = {
  isOpen: boolean;
  content: React.ReactNode | null;
  config: TBottomSheetConfig;

  open: (params: {
    content: React.ReactNode;
    config?: TBottomSheetConfig;
  }) => void;

  close: () => void;
};

const DEFAULT_CONFIG: TBottomSheetConfig = {
  snapPoints: ["80%", "90%"],
  enablePanDownToClose: true,
};

export const useBottomSheetStore = create<TBottomSheetStore>((set) => ({
  isOpen: false,
  content: null,
  config: DEFAULT_CONFIG,
  open: ({ config, content }) => {
    set({
      content,
      isOpen: true,
      config: {
        ...DEFAULT_CONFIG,
        ...config,
      },
    });
  },
  close: () => {
    set({
      isOpen: false,
      content: null,
      config: DEFAULT_CONFIG,
    });
  },
}));
