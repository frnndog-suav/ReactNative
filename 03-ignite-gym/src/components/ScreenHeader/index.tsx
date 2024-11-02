import { Center, Heading } from "@gluestack-ui/themed";
import { MY_THEME_CONTROLLER } from "../../theme";

type Props = {
  title: string;
};

export function ScreenHeader({ title }: Props) {
  return (
    <Center
      backgroundColor={MY_THEME_CONTROLLER.COLORS.GRAY_600}
      paddingBottom={24}
      paddingTop={64}
    >
      <Heading
        marginBottom={0}
        marginTop={0}
        color={MY_THEME_CONTROLLER.COLORS.GRAY_100}
        fontSize={MY_THEME_CONTROLLER.FONT_SIZE.XL}
        fontFamily={MY_THEME_CONTROLLER.FONTS.HEADING}
      >
        {title}
      </Heading>
    </Center>
  );
}
