import LogoImg from "@assets/logo.png";
import { useNavigation } from "@react-navigation/native";
import { BackButton, BackIcon, Container, Logo } from "./styles";

type THeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: THeaderProps) {
  const navigation = useNavigation();

  function handleGoHome() {
    navigation.navigate("groups");
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoHome}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={LogoImg} />
    </Container>
  );
}
