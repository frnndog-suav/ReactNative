import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";
import { MY_THEME_CONTROLLER } from "../../theme";
import { THistoryDTO } from "@dtos/HistoryDTO";

type Props = {
  data: THistoryDTO;
};

export function HistoryCard({ data }: Props) {
  return (
    <HStack
      display="flex"
      flexDirection="row"
      width="100%"
      paddingHorizontal={20}
      paddingVertical={16}
      marginBottom={12}
      backgroundColor={MY_THEME_CONTROLLER.COLORS.GRAY_600}
      borderRadius={4}
      alignItems="center"
      justifyContent="space-between"
    >
      <VStack flex={1} marginRight={20} gap={8}>
        <Heading
          marginBottom={0}
          marginTop={0}
          color="white"
          fontSize={MY_THEME_CONTROLLER.FONT_SIZE.MD}
          textTransform="capitalize"
          fontFamily={MY_THEME_CONTROLLER.FONTS.HEADING}
          numberOfLines={1}
        >
          {data.group}
        </Heading>
        <Text
          color={MY_THEME_CONTROLLER.COLORS.GRAY_100}
          fontSize={MY_THEME_CONTROLLER.FONT_SIZE.LG}
          numberOfLines={1}
        >
          {data.name}
        </Text>
      </VStack>
      <Text
        color={MY_THEME_CONTROLLER.COLORS.GRAY_300}
        fontSize={MY_THEME_CONTROLLER.FONT_SIZE.MD}
      >
        {data.hour}
      </Text>
    </HStack>
  );
}
