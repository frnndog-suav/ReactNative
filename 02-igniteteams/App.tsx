import { Loading } from "@components/Loading";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { Groups } from "@screens/Groups";
import theme from "@theme/index";
import { ThemeProvider } from "styled-components";

// Instalar fontes customizadas: npx expo install @expo-google-fonts/roboto expo-font -- --legacy-peer-deps

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded && <Groups />}
      {!fontsLoaded && <Loading />}
    </ThemeProvider>
  );
}
