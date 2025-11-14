import { Redirect } from "expo-router";

export default function App() {
  const userData = {
    token: "tokenteste",
    name: "Usuário Teste",
  };

  if (userData) {
    return <Redirect href={"/(private)/home"} />;
  }

  return <Redirect href={"/login"} />;
}
