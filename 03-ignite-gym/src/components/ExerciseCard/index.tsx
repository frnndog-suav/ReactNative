import {
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { ChevronRight } from "lucide-react-native";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps;

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        display="flex"
        flexDirection="row"
        alignItems="center"
        backgroundColor="#29292E"
        paddingRight={20}
        padding={12}
        borderRadius={4}
        marginBottom={6}
        gap={8}
      >
        <Image
          width={100}
          height={100}
          alt="Imagem do exercício"
          borderRadius={4}
          marginRight={8}
          resizeMode="cover"
          source={{
            uri: "https://static.wixstatic.com/media/2edbed_eacddcd1f6384878a3c11ec40d478509~mv2.webp/v1/fill/w_584,h_676,al_c,lg_1,q_85,enc_auto/2edbed_eacddcd1f6384878a3c11ec40d478509~mv2.webp",
          }}
        />
        <VStack flex={1}>
          <Heading marginBottom={0} marginTop={0} fontSize={16} color="white">
            Puxada frontal
          </Heading>
          <Text fontSize={12} color="#C4C4CC" marginTop={4} numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>

        <Icon as={ChevronRight} color={"#7C7C8A"} />
      </HStack>
    </TouchableOpacity>
  );
}
