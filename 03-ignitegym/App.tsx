import { Text } from "@/components/ui/text";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { StatusBar, View } from "react-native";
import { Center } from "./components/ui/center";
import { GluestackUIProvider } from "./components/ui/gluestack-ui-provider";

export default function App() {
  const [isFontsLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular });

  if (!isFontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <GluestackUIProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Center className="bg-primary-500 h-[200px] w-[300px]">
        <Text>Open up App.tsx to start working on your app!</Text>
      </Center>
    </GluestackUIProvider>
  );
}
