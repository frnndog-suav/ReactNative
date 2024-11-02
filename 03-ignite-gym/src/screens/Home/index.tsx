import { VStack } from "@gluestack-ui/themed";
import { HomeHeader } from "./components/HomeHeader";
import { Group } from "@components/Group";

export function Home() {
  return (
    <VStack>
      <HomeHeader />
      <Group name="Costas" isActive={false} />
    </VStack>
  );
}
