import { ExerciseCard } from "@components/ExerciseCard";
import { Group } from "@components/Group";
import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { useState } from "react";
import { FlatList } from "react-native";
import { HomeHeader } from "./components/HomeHeader";

export function Home() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const [exercises, setExercises] = useState([
    "Puxada frontal",
    "Remada curvada",
    "Remada unilateral",
    "Levantamento terra",
  ]);
  const [groupSelected, setGroupSelected] = useState("Costas");
  const [groups, setGroups] = useState([
    "Costas",
    "Bíceps",
    "Tríceps",
    "Ombro",
  ]);

  function handleOpenExerciseDetails() {
    navigation.navigate("exercise");
  }

  return (
    <VStack>
      <HomeHeader />

      <FlatList
        data={groups}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginVertical: 40, maxHeight: 44, minHeight: 44 }}
        keyExtractor={(item) => item}
        contentContainerStyle={{
          paddingHorizontal: 32,
        }}
        renderItem={({ item }) => (
          <Group
            name={item}
            onPress={() => setGroupSelected(item)}
            isActive={
              groupSelected.toLocaleLowerCase() === item.toLocaleLowerCase()
            }
          />
        )}
      />

      <VStack paddingHorizontal={16} height={"100%"}>
        <HStack
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          marginBottom={10}
          alignItems="center"
        >
          <Heading marginBottom={0} marginTop={0} color="#C4C4CC" fontSize={16}>
            Exercícios
          </Heading>
          <Text color="#C4C4CC" fontSize={12}>
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 550 }}
          renderItem={({ item }) => (
            <ExerciseCard onPress={handleOpenExerciseDetails} />
          )}
        />
      </VStack>
    </VStack>
  );
}
