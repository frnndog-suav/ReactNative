import { TExerciseDTO } from "@dtos/ExerciseDTO";
import {
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { api } from "@services/api";
import { ChevronRight } from "lucide-react-native";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  data: TExerciseDTO;
};

export function ExerciseCard({ data, ...rest }: Props) {
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
        marginBottom={18}
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
            uri: `${api.defaults.baseURL}/exercise/thumb/${data.thumb}`,
          }}
        />
        <VStack flex={1}>
          <Heading marginBottom={0} marginTop={0} fontSize={16} color="white">
            {data.name}
          </Heading>
          <Text fontSize={12} color="#C4C4CC" marginTop={4} numberOfLines={2}>
            {data.series} séries x {data.repetitions} repetições
          </Text>
        </VStack>

        <Icon as={ChevronRight} color={"#7C7C8A"} />
      </HStack>
    </TouchableOpacity>
  );
}
