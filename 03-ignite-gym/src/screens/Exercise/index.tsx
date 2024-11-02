import { Icon, VStack } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { ArrowLeft } from "lucide-react-native";
import { TouchableOpacity } from "react-native";
import { MY_THEME_CONTROLLER } from "../../theme";

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <VStack flex={1}>
      <VStack
        paddingHorizontal={32}
        backgroundColor={MY_THEME_CONTROLLER.COLORS.GRAY_600}
        paddingTop={48}
      >
        <TouchableOpacity onPress={handleGoBack}>
          <Icon
            as={ArrowLeft}
            color={MY_THEME_CONTROLLER.COLORS.GREEN_500}
            width={80}
            height={80}
          />
        </TouchableOpacity>
      </VStack>
    </VStack>
  );
}
