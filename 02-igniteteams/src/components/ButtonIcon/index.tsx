import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";
import { Container, Icon, TButtonIconStyle } from "./styles";

type TButtonIconProps = {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: TButtonIconStyle;
} & TouchableOpacityProps;

export function ButtonIcon({
  icon,
  type = "PRIMARY",
  ...rest
}: TButtonIconProps) {
  return (
    <Container {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  );
}
