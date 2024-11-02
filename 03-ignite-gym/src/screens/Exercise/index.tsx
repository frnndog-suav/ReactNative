import BodySvg from "@assets/body.svg";
import RepetitionSvg from "@assets/repetitions.svg";
import SeriesSvg from "@assets/series.svg";
import { Button } from "@components/Button";
import {
  Box,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { ArrowLeft } from "lucide-react-native";
import { ScrollView, TouchableOpacity } from "react-native";
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

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        <VStack padding={32}>
          <Image
            marginBottom={12}
            borderRadius={8}
            resizeMode="cover"
            alt="Exercício"
            sx={{
              width: "100%",
              height: 320,
            }}
            source={{
              uri: "https://static.wixstatic.com/media/2edbed_eacddcd1f6384878a3c11ec40d478509~mv2.webp/v1/fill/w_584,h_676,al_c,lg_1,q_85,enc_auto/2edbed_eacddcd1f6384878a3c11ec40d478509~mv2.webp",
            }}
          />

          <Box
            backgroundColor={MY_THEME_CONTROLLER.COLORS.GRAY_600}
            borderRadius={8}
            paddingBottom={32}
            paddingHorizontal={32}
          >
            <HStack
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-around"
              marginBottom={24}
              marginTop={20}
            >
              <HStack display="flex" flexDirection="row" alignItems="center">
                <SeriesSvg />
                <Text
                  color={MY_THEME_CONTROLLER.COLORS.GRAY_200}
                  marginLeft={8}
                >
                  3 séries
                </Text>
              </HStack>
              <HStack display="flex" flexDirection="row" alignItems="center">
                <RepetitionSvg />
                <Text
                  color={MY_THEME_CONTROLLER.COLORS.GRAY_200}
                  marginLeft={8}
                >
                  12 repetições
                </Text>
              </HStack>
            </HStack>

            <Button title="Marcar como realizado" />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
}
