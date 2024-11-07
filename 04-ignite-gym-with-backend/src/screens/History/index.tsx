import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { Heading, Text, VStack } from "@gluestack-ui/themed";
import { useState } from "react";
import { SectionList } from "react-native";
import { MY_THEME_CONTROLLER } from "../../theme";

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: "22/07/2024",
      data: ["Puxada frontal"],
    },
    {
      title: "23/07/2024",
      data: ["Puxada frontal", "Remada unilateral"],
    },
  ]);

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
