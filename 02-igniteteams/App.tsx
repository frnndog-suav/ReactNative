import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { Groups } from "@screens/Groups";
import theme from "@theme/index";
import { ActivityIndicator } from "react-native";
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
      {!fontsLoaded && <ActivityIndicator />}
    </ThemeProvider>
  );
}
