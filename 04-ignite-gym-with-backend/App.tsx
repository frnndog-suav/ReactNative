import { Loading } from "@components/Loading";
import { AuthContext, AuthContextProvider } from "@contexts/AuthContext";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Center, GluestackUIProvider } from "@gluestack-ui/themed";
import { Routes } from "@routes/index";
import { useFonts } from "expo-font";
import { StatusBar } from "react-native";

export default function App() {
  const [isFontsLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular });

  if (!isFontsLoaded) {
    return (
      <GluestackUIProvider>
        <Center flex={1} backgroundColor="#121214">
          <Loading />
        </Center>
      </GluestackUIProvider>
    );
  }

  return (
    <GluestackUIProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </GluestackUIProvider>
  );
}
