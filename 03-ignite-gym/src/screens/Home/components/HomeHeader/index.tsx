import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";

export function HomeHeader() {
  return (
    <HStack
      paddingTop={64}
      paddingBottom={14}
      paddingHorizontal={32}
      backgroundColor="#202024"
    >
      <VStack>
        <Text color="#E1E1E6" fontSize={14}>
          Olá,
        </Text>
        <Heading color="#E1E1E6">Fernando Goia</Heading>
      </VStack>
    </HStack>
  );
}
