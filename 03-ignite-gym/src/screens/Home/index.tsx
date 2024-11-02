import { Group } from "@components/Group";
import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";
import { useState } from "react";
import { FlatList } from "react-native";
import { HomeHeader } from "./components/HomeHeader";
import { ExerciseCard } from "@components/ExerciseCard";

export function Home() {
  const [groups, setGroups] = useState([
    "Costas",
    "Bíceps",
    "Tríceps",
    "Ombro",
  ]);
  const [groupSelected, setGroupSelected] = useState("Costas");

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
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
      />

      <VStack paddingHorizontal={16}>
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
            4
          </Text>
        </HStack>

        <ExerciseCard />
      </VStack>
    </VStack>
  );
}
