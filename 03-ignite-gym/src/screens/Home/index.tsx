import { Group } from "@components/Group";
import { HStack, VStack } from "@gluestack-ui/themed";
import { useState } from "react";
import { HomeHeader } from "./components/HomeHeader";

export function Home() {
  const [groupSelected, setGroupSelected] = useState("Costas");

  return (
    <VStack>
      <HomeHeader />
      <HStack display="flex" flexDirection="row">
        <Group
          name="Costas"
          isActive={groupSelected === "Costas"}
          onPress={() => setGroupSelected("Costas")}
        />
        <Group
          name="Ombro"
          isActive={groupSelected === "Ombro"}
          onPress={() => setGroupSelected("Ombro")}
        />
      </HStack>
    </VStack>
  );
}
