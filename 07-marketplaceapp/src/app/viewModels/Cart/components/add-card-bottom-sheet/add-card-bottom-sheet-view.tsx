import { Text, View } from "react-native";
import { useAddCardBottomSheetViewModel } from "./use-card-bottom-sheet-view-model";

interface IProps extends ReturnType<typeof useAddCardBottomSheetViewModel> {}

export const AddCardBottomSheetView = ({}: IProps) => {
  return (
    <View>
      <Text>Adicionar cartão</Text>
    </View>
  );
};
