import { Ionicons } from "@expo/vector-icons";
import { createElement } from "react";
import { SelectionModal } from "../components/AppModal/SelectionModal";
import { useModalStore } from "../store/use-modal";

type TSelectionOptions = {
  text: string;
  onPres: () => void;
  icon?: keyof typeof Ionicons.glyphMap;
  variant?: "primary" | "secondary" | "danger";
};

export function useAppModal() {
  const { open, close } = useModalStore();

  const shownSelection = (config: {
    title: string;
    message?: string;
    options: TSelectionOptions[];
  }) => {
    open(createElement(SelectionModal));
  };

  return {
    shownSelection,
  };
}
