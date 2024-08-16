import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#131016", padding: 24 }}>
      <Text style={styles.container}>Nome do evento</Text>
      <Text style={styles.eventName}>Sexta, 4 de Novembro de 2022.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "#fdfcfe",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventName: {
    color: "#6b6b6b",
    fontSize: 16,
  },
});
