import BodySvg from "@assets/body.svg";
import RepetitionSvg from "@assets/repetitions.svg";
import SeriesSvg from "@assets/series.svg";
import { Button } from "@components/Button";
import { Loading } from "@components/Loading";
import { ToastMessage } from "@components/ToastMessage";
import { TExerciseDTO } from "@dtos/ExerciseDTO";
import {
  Box,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  useToast,
  VStack,
} from "@gluestack-ui/themed";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { api } from "@services/api";
import { AppError } from "@utils/appError";
import { ArrowLeft } from "lucide-react-native";
import { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { MY_THEME_CONTROLLER } from "../../theme";

type TRouteParamProps = {
  exerciseId: string;
};

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const toast = useToast();
  const route = useRoute();

  const { exerciseId } = route.params as TRouteParamProps;

  const [isLoading, setIsLoading] = useState(true);
  const [exercise, setExercise] = useState<TExerciseDTO>({} as TExerciseDTO);
  const [sendingRegister, setSendingRegister] = useState(false);

  function handleGoBack() {
    navigation.goBack();
  }

  async function fetchExerciseDetails() {
    try {
      setIsLoading(true);
      const response = await api.get(`/exercises/${exerciseId}`);
      setExercise(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível carregar os detalhes do exercício.";

      toast.show({
        placement: "top",
        render: ({ id }) => (
          <ToastMessage
            id={id}
            title={title}
            action="error"
            onClose={() => toast.close(id)}
          />
        ),
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function handleExerciseHistoryRegister() {
    try {
      setSendingRegister(true);

      await api.post("/history", { exercise_id: exerciseId });

      toast.show({
        placement: "top",
        render: ({ id }) => (
          <ToastMessage
            id={id}
            title={"Exercício registrado com sucesso!"}
            action="success"
            onClose={() => toast.close(id)}
          />
        ),
      });

      navigation.navigate("history");
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível registrar o exercício.";

      toast.show({
        placement: "top",
        render: ({ id }) => (
          <ToastMessage
            id={id}
            title={title}
            action="error"
            onClose={() => toast.close(id)}
          />
        ),
      });
    } finally {
      setSendingRegister(false);
    }
  }

  useEffect(() => {
    fetchExerciseDetails();
  }, [exerciseId]);

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
            {exercise.name}
          </Heading>
          <HStack display="flex" flexDirection="row" alignItems="center">
            <BodySvg />
            <Text
              color={MY_THEME_CONTROLLER.COLORS.GRAY_200}
              marginLeft={4}
              textTransform="capitalize"
            >
              {exercise.group}
            </Text>
          </HStack>
        </HStack>
      </VStack>

      {isLoading ? (
        <Loading />
      ) : (
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
                uri: `${api.defaults.baseURL}/exercise/demo/${exercise.demo}`,
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
                    {exercise.series} séries
                  </Text>
                </HStack>
                <HStack display="flex" flexDirection="row" alignItems="center">
                  <RepetitionSvg />
                  <Text
                    color={MY_THEME_CONTROLLER.COLORS.GRAY_200}
                    marginLeft={8}
                  >
                    {exercise.repetitions} repetições
                  </Text>
                </HStack>
              </HStack>

              <Button
                title="Marcar como realizado"
                isLoading={sendingRegister}
                onPress={handleExerciseHistoryRegister}
              />
            </Box>
          </VStack>
        </ScrollView>
      )}
    </VStack>
  );
}
