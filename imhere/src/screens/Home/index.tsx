import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: "#131016", padding: 24 }}>
      <Text style={styles.container}>Nome do evento</Text>
      <Text style={styles.eventName}>Sexta, 4 de Novembro de 2022.</Text>
    </View>
  );
}
