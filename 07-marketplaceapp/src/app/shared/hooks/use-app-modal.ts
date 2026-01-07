import { Ionicons } from "@expo/vector-icons";
import { createElement } from "react";
import {
  SelectionModal,
  TSelectionModalProps,
} from "../components/app-modal/selection-modal";
import {
  ISuccessModalProps,
  SuccessModal,
} from "../components/app-modal/success-modal";
import { useModalStore } from "../store/modal-store";

export type TSelectionVariant = "primary" | "secondary" | "danger";

export type TSelectionOptions = {
  text: string;
  onPress: () => void;
  icon?: keyof typeof Ionicons.glyphMap;
  variant?: TSelectionVariant;
};

export function useAppModal() {
  const { open, close } = useModalStore();

  const shownSelection = ({
    options,
    title,
    message,
  }: TSelectionModalProps) => {
    open(
      createElement(SelectionModal, {
        title,
        options,
        message,
      }),
    );
  };

  const showSuccess = (config: ISuccessModalProps) => {
    open(
      createElement(SuccessModal, {
        ...config,
        onButtonPress: () => {
          if (config.onButtonPress) {
            config.onButtonPress();
          }
          close();
        },
      }),
    );
  };

  return {
    showSuccess,
    shownSelection,
  };
}
