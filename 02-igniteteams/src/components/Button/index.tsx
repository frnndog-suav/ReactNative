import { TouchableOpacityProps } from "react-native";
import { Container, TButtonStyle, Title } from "./styles";

type TButtonProps = TouchableOpacityProps & {
  title: string;
  type?: TButtonStyle;
};

export function Button({ title, type = "PRIMARY", ...rest }: TButtonProps) {
  return (
    <Container {...rest} type={type}>
      <Title>{title}</Title>
    </Container>
  );
}
