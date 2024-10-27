import { Center, Spinner } from "@gluestack-ui/themed";

export function Loading() {
  return (
    <Center flex={1} backgroundColor="#121214" justifyContent="center">
      <Spinner color="#00B37E" />
    </Center>
  );
}
