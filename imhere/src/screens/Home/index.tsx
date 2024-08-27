import React from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
  const participants = [
    "Teste",
    "Goia",
    "Rocketseat",
    "Tobias",
    "Tebas",
    "Hello",
    "World",
    "React",
    "Native",
    "Android",
    "IOS",
  ];

  function handleParticipantAdd() {
    console.log("Teste");
  }

  function handleParticipantOnRemove(name: string) {
    console.log("remover", name);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={"#6b6b6b"}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participant) => (
          <Participant
            key={participant}
            name={participant}
            handleParticipantOnRemove={() =>
              handleParticipantOnRemove(participant)
            }
          />
        ))}
      </ScrollView>
    </View>
  );
}
