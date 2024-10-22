import { Container, Subtitle, Title } from "./styled";

type THighlightProps = {
  title: string;
  subtitle: string;
};

export function Highlight({ subtitle, title }: THighlightProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
