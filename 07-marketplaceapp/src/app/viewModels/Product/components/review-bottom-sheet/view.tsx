import { Ionicons } from "@expo/vector-icons";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../../../styles/colors";
import { AppButton } from "../../../../shared/components/app-button";
import { AppInput } from "../../../../shared/components/app-input";
import { Stars } from "../review-bottom-sheet/components/stars";
import { useReviewBottomSheetViewModel } from "../review-bottom-sheet/view-model";

interface IProps extends ReturnType<typeof useReviewBottomSheetViewModel> {}

export const ReviewBottomSheetView = ({
  ratingForm,
  isLoading,
  handleContentChange,
  handleFormSubmit,
  handleRatingChange,
}: IProps) => {
  return (
    <View className="bg-background rounded-t-2xl">
      <View className="flex-row items-center justify-between p-6">
        <Text className="text-lg font-bold text-gray-900">
          {ratingForm.isEditing ? "Editar avaliação" : "Avaliar produto"}
        </Text>

        <TouchableOpacity className="w-8 h-8 items-center justify-center rounded-[10px] border border-gray-400">
          <Ionicons size={24} name="close" color={colors.grays["400"]} />
        </TouchableOpacity>
      </View>

      {isLoading ? (
        <View className="p-6 items-center justify-center min-h-[300px]">
          <ActivityIndicator color={colors["purple-base"]} size={"large"} />
          <Text className="text-gray-600 mt-4 text-center">
            Verificando avaliação existente...
          </Text>
        </View>
      ) : (
        <View className="p-6">
          <Text className="font-semibold text-base text-gray-300">Nota</Text>

          <View className="flex-row items-center mb-6 gap-2">
            <Stars
              rating={ratingForm.rating}
              handleRatingChange={handleRatingChange}
            />
          </View>

          <AppInput
            label="COMENTÁRIO"
            placeholder={
              ratingForm.isEditing
                ? "Editar comentário"
                : "Escreva seu comentário aqui..."
            }
            value={ratingForm.content}
            multiline
            numberOfLines={8}
            textAlign="left"
            containerClassName="mb-8"
            className="h-[150px]"
            onChangeText={handleContentChange}
          />

          <View className="flex-row gap-3 mb-8">
            <View className="flex-1">
              <AppButton variant="outlined">Cancelar</AppButton>
            </View>
            <View className="flex-1">
              <AppButton onPress={handleFormSubmit}>
                {ratingForm.isEditing ? "Atualizar" : "Enviar"}
              </AppButton>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};
