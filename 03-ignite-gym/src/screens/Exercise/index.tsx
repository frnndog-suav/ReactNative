import BodySvg from "@assets/body.svg";
import { Heading, HStack, Icon, Text, VStack } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { ArrowLeft } from "lucide-react-native";
import { TouchableOpacity } from "react-native";
import { MY_THEME_CONTROLLER } from "../../theme";

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <VStack flex={1}>
      <VStack
        paddingHorizontal={32}
        backgroundColor={MY_THEME_CONTROLLER.COLORS.GRAY_600}
        paddingTop={60}
      >
        <TouchableOpacity onPress={handleGoBack}>
          <Icon
            as={ArrowLeft}
            color={MY_THEME_CONTROLLER.COLORS.GREEN_500}
            width={80}
            height={80}
          />
        </TouchableOpacity>

        <HStack
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          marginTop={16}
          marginBottom={16}
        >
          <Heading
            color={MY_THEME_CONTROLLER.COLORS.GRAY_100}
            fontFamily={MY_THEME_CONTROLLER.FONTS.HEADING}
            fontSize={MY_THEME_CONTROLLER.FONT_SIZE.LG}
            flexShrink={1}
          >
            Puxada frontal
          </Heading>
          <HStack display="flex" flexDirection="row" alignItems="center">
            <BodySvg />
            <Text
              color={MY_THEME_CONTROLLER.COLORS.GRAY_200}
              marginLeft={4}
              textTransform="capitalize"
            >
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>
    </VStack>
  );
}
