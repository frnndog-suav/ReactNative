import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { ToastMessage } from "@components/ToastMessage";
import { Heading, Text, useToast, VStack } from "@gluestack-ui/themed";
import { AppError } from "@utils/appError";
import { useCallback, useState } from "react";
import { SectionList } from "react-native";
import { MY_THEME_CONTROLLER } from "../../theme";
import { api } from "@services/api";
import { useFocusEffect } from "@react-navigation/native";

export function History() {
  const toast = useToast();
  const [exercises, setExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchHistory() {
    try {
      setIsLoading(true);

      const response = await api.get("/history");

      console.log("response", response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível carregar o histórico.";

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

  useFocusEffect(
    useCallback(() => {
      fetchHistory();
    }, [])
  );

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico" />

      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading
            marginBottom={12}
            marginTop={40}
            color={MY_THEME_CONTROLLER.COLORS.GRAY_200}
            fontSize={MY_THEME_CONTROLLER.FONT_SIZE.MD}
            fontFamily={MY_THEME_CONTROLLER.FONTS.HEADING}
          >
            {section.title}
          </Heading>
        )}
        style={{ paddingHorizontal: 32 }}
        contentContainerStyle={
          exercises.length === 0 && { flex: 1, justifyContent: "center" }
        }
        ListEmptyComponent={() => (
          <Text textAlign="center" color={MY_THEME_CONTROLLER.COLORS.GRAY_100}>
            {
              "Não há exercícios registrados ainda.\nVamos fazer alguma coisa seu vagabundo?"
            }
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  );
}
