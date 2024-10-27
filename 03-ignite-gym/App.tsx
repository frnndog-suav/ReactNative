import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useFonts } from "expo-font";
import { StatusBar, Text, View } from "react-native";

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
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}
