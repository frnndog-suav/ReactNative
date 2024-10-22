import LogoImg from "@assets/logo.png";
import { BackButton, BackIcon, Container, Logo } from "./styles";

type THeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: THeaderProps) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={LogoImg} />
    </Container>
  );
}
