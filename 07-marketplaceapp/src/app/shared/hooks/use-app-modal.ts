import { Ionicons } from "@expo/vector-icons";
import { createElement } from "react";
import {
  SelectionModal,
  TSelectionModalProps,
} from "../components/app-modal/selection-modal";
import { useModalStore } from "../store/modal-store";

export type TSelectionVariant = "primary" | "secondary" | "danger";

export type TSelectionOptions = {
  text: string;
  onPress: () => void;
  icon?: keyof typeof Ionicons.glyphMap;
  variant?: TSelectionVariant
};

export function useAppModal() {
  const { open, close } = useModalStore();

  const shownSelection = ({
    options,
    title,
    message,
  }: {
    title: string;
    message?: string;
    options: TSelectionOptions[];
  }) => {
    open(
      createElement(SelectionModal, {
        title,
        options,
        message,
      } satisfies TSelectionModalProps)
    );
  };

  return {
    shownSelection,
  };
}
