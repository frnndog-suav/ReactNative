import { Container, Message } from "./styles";

type TListEmptyProps = {
  message: string;
};

export function ListEmpty({ message }: TListEmptyProps) {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
}
