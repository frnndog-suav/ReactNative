import { TouchableOpacity } from "react-native";
import { Container, Icon } from "./styles";

type TButtonIconProps = {} & TouchableOpacity;

export function ButtonIcon() {
  return (
    <Container>
      <Icon name="home" type="SECONDARY" />
    </Container>
  );
}
