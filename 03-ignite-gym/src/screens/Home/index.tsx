import { Group } from "@components/Group";
import { VStack } from "@gluestack-ui/themed";
import { useState } from "react";
import { FlatList } from "react-native";
import { HomeHeader } from "./components/HomeHeader";

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
    </VStack>
  );
}
