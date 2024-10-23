import { TouchableOpacityProps } from "react-native";
import { Container, TFilterStyleProps, Title } from "./styles";

type TFilterProps = TouchableOpacityProps &
  TFilterStyleProps & {
    title: string;
  };

export function Filter({ title, isActive = false, ...rest }: TFilterProps) {
  return (
    <Container {...rest} isActive={isActive}>
      <Title>{title}</Title>
    </Container>
  );
}
