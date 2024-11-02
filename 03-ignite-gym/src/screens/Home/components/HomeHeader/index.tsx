import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";

export function HomeHeader() {
  return (
    <HStack justifyContent="center" alignItems="center" height="100%">
      <VStack>
        <Text color="#E1E1E6" fontSize={14}>
          Olá,
        </Text>
        <Heading color="#E1E1E6">Fernando Goia</Heading>
      </VStack>
    </HStack>
  );
}
