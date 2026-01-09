import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../../../styles/colors";
import { AppInput } from "../../../../shared/components/app-input";
import { useBottomSheetStore } from "../../../../shared/store/use-bottom-sheet-store";
import { Filter } from "../filter";

interface IProps {
  inputValue: string;
  setSearchInputText: (text: string) => void;
}

export const SearchInput = ({ inputValue, setSearchInputText }: IProps) => {
  const { open } = useBottomSheetStore();

  return (
    <View className="mt-6 mb-3">
      <Text className="text-2xl font-bold mt-6 mb-4">Explore produtos</Text>
      <View className="flex-row ">
        <View className="flex-1">
          <AppInput
            value={inputValue}
            leftIcon="search"
            placeholder="Pesquisar"
            className="text-lg flex-1"
            onChangeText={setSearchInputText}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            open({
              content: <Filter />,
            });
          }}
          className="ml-5 mt-6 items-center justify-center rounded-xl border-[1px] h-[48px] w-[48px] border-purple-base"
        >
          <Ionicons
            name="filter-outline"
            size={24}
            color={colors["purple-base"]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
