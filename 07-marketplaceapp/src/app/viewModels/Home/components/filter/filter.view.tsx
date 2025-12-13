import { Ionicons } from "@expo/vector-icons";
import { Checkbox } from "expo-checkbox";
import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../../../styles/colors";
import { AppButton } from "../../../../shared/components/app-button";
import { AppInput } from "../../../../shared/components/app-input";
import { useFilterViewModel } from "./use-filter.viewModel";

type TProps = ReturnType<typeof useFilterViewModel>;

export const FilterView = ({
  isLoading,
  productsCategories,
  selectedCategories,
  handleResetFilter,
  handleApplyFilters,
  handleCategoryToggle,
  handleValueMaxChange,
  handleValueMinChange,
}: TProps) => {
  return (
    <View>
      <View className="flex-row items-center justify-between p-4 px-6">
        <Text className="text-lg font-bold text-gray-900">
          Filtrar anúncios
        </Text>

        <TouchableOpacity>
          <Ionicons name="close" size={20} color={colors["purple-base"]} />
        </TouchableOpacity>
      </View>

      <View className="p-4 px-6">
        <Text className="font-semibold text-base text-gray-300">VALOR</Text>
        <View className="flex-row mb-4 w-[100%]">
          <View className="flex-1">
            <AppInput
              placeholder="De"
              keyboardType="numeric"
              containerClassName="w-[90%]"
              onChangeText={(text) => handleValueMinChange(Number(text))}
            />
          </View>
          <View className="flex-1">
            <AppInput
              placeholder="Até"
              keyboardType="numeric"
              containerClassName="w-[90%]"
              onChangeText={(text) => handleValueMaxChange(Number(text))}
            />
          </View>
        </View>

        <Text className="font-semibold text-base text-gray-300">CATEGORIA</Text>

        {isLoading ? (
          <Text>Carregando categorias...</Text>
        ) : (
          <View className="mb-6 gap-3">
            {productsCategories?.map((product) => (
              <TouchableOpacity
                onPress={() => handleCategoryToggle(product.id)}
                className="flex-row items-center py-2"
                key={`product-category-${product.id}`}
              >
                <Checkbox
                  color={colors["purple-base"]}
                  className="mr-3 rounded-full"
                  value={selectedCategories.includes(product.id)}
                  onValueChange={() => handleCategoryToggle(product.id)}
                />
                <Text className="text-base text-gray-400">{product.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <View className="flex-row gap-3 mt-4 mb-6">
          <View className="flex-1">
            <AppButton variant="outlined" onPress={handleResetFilter}>
              Limpar filtro
            </AppButton>
          </View>
          <View className="flex-1">
            <AppButton onPress={handleApplyFilters}>Filtrar</AppButton>
          </View>
        </View>
      </View>
    </View>
  );
};
