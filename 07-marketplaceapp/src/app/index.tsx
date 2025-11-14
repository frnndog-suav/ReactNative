import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View>
      <Text>Hello Expo Router</Text>
      <TouchableOpacity onPress={() => router.push('login')}>
        <Text>Ir para login</Text>
      </TouchableOpacity>
    </View>
  );
}
