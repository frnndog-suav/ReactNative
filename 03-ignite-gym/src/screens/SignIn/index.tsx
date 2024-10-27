import BackgroundImg from "@assets/background.png";
import { Image, VStack } from "@gluestack-ui/themed";

export function SignIn() {
  return (
    <VStack flex={1} backgroundColor="#121214">
      <Image
        alt="Pessoas treinando"
        source={BackgroundImg}
        defaultSource={BackgroundImg}
        style={{ width: "100%", height: 624 }}
        position="absolute"
      />
    </VStack>
  );
}
