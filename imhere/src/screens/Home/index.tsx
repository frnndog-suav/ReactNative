import React, { useState } from "react";
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
  const [participantName, setParticipantName] = useState("");
  const [participants, setParticipants] = useState<string[]>([]);

  function handleParticipantAdd(participantName: string) {
    if (participants.includes(participantName)) {
      Alert.alert(
        "Participante já existe",
        `Já existe um participante na lista com esse nome.`
      );
      return;
    }

    setParticipants((current) => [...current, participantName]);
    setParticipantName("");
  }

  function handleParticipantOnRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => {
          const remainingParticipants = participants.filter(
            (participant) => participant !== name
          );

          setParticipants(remainingParticipants);
        },
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
          value={participantName}
          placeholder="Nome do participante"
          placeholderTextColor={"#6b6b6b"}
          onChangeText={(text) => setParticipantName(text)}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleParticipantAdd(participantName)}
        >
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
