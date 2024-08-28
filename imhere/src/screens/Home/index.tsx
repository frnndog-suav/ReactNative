import React from "react";
import {
  Alert,
  FlatList,
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
    if (participants.includes("Teste")) {
      Alert.alert(
        "Participante já existe",
        `Já existe um participante na lista com esse nome.`
      );
      return;
    }
  }

  function handleParticipantOnRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => {},
      },
      {
        text: "Não",
        style: "cancel",
        onPress: () => {},
      },
    ]);
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

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            handleParticipantOnRemove={() => handleParticipantOnRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>Ningúem chegou ainda</Text>
        )}
      />
    </View>
  );
}
