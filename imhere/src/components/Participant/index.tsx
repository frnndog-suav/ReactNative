import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export type TParticipantProps = {
  name: string;
  handleParticipantOnRemove(): void;
};

export function Participant({
  name,
  handleParticipantOnRemove,
}: TParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handleParticipantOnRemove}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
