import { Loading } from "@components/Loading";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Center, GluestackUIProvider, Text } from "@gluestack-ui/themed";
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
      <Center flex={1} backgroundColor="#121214">
        <Text color="white">Open up App.tsx to start working on your app!</Text>
      </Center>
    </GluestackUIProvider>
  );
}
