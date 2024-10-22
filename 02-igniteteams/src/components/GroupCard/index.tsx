import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";

type TGroupCard = {
  title: string;
} & TouchableOpacityProps;

export function GroupCard({ title, ...rest }: TGroupCard) {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
}
