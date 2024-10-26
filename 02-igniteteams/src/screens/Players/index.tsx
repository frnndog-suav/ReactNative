import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { ListEmpty } from "@components/ListEmpty";
import { PlayerCard } from "@components/PlayerCard";
import { useNavigation, useRoute } from "@react-navigation/native";
import { groupRemoveByName_AS } from "@storage/group/groupRemoveByName";
import { playerAddByGroup_AS } from "@storage/player/playerAddByGroup";
import { playerGetByGroupAndTeam_AS } from "@storage/player/playerGetByGroupAndTeam";
import { playerRemoveByGroup_AS } from "@storage/player/playerRemoveByGroup";
import { TPlayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import { AppError } from "@utils/AppError";
import { useEffect, useRef, useState } from "react";
import { Alert, FlatList, TextInput } from "react-native";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

type TRouteParams = {
  group: string;
};

export function Players() {
  const route = useRoute();
  const { group } = route.params as TRouteParams;
  const navigation = useNavigation();
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState<TPlayerStorageDTO[]>([]);
  const [newPlayerName, setNewPlayerName] = useState("");

  const newPlayerNameInputRef = useRef<TextInput>(null);

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0)
      return Alert.alert(
        "Nova pessoa",
        "Informe o nome da pessoa para adicionar."
      );

    const newPlayer = {
      name: newPlayerName,
      team,
    };

    try {
      await playerAddByGroup_AS(newPlayer, group);
      newPlayerNameInputRef.current?.blur();
      setNewPlayerName("");
      await fetchPlayersByTeam();
    } catch (error) {
      if (error instanceof AppError)
        return Alert.alert("Nova pessoa", error.message);

      Alert.alert("Novo pessoa", "Não foi possível adicionar a pessoa.");
      console.log("GENERIC error: ", error);
    }
  }

  async function fetchPlayersByTeam() {
    try {
      const playersByTeam = await playerGetByGroupAndTeam_AS(group, team);

      setPlayers(playersByTeam);
    } catch (error) {
      Alert.alert(
        "Novo pessoa",
        "Não foi possível carregar as pessoas filtradas do time selecionado."
      );
      console.log("GENERIC error: ", error);
    }
  }

  async function handleRemovePlayer(playerName: string) {
    try {
      await playerRemoveByGroup_AS(playerName, group);
      await fetchPlayersByTeam();
    } catch (error) {
      Alert.alert("Remover pessoa", "Não foi possível remover esta pessoa.");
      console.log("GENERIC error: ", error);
    }
  }

  async function groupRemove() {
    try {
      await groupRemoveByName_AS(group);

      navigation.navigate("groups");
    } catch (error) {
      Alert.alert("Remover grupo", "Não foi possível remover o grupo.");
      console.log("GENERIC error: ", error);
    }
  }

  async function handleGroupRemove() {
    Alert.alert("Remover", "Deseja remover o grupo?", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => groupRemove(),
      },
    ]);
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  return (
    <Container>
      <Header showBackButton />
      <Highlight title={group} subtitle="adicione a galera e separe os times" />

      <Form>
        <Input
          inputRef={newPlayerNameInputRef}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          value={newPlayerName}
          onChangeText={setNewPlayerName}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </Form>

      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item.name}
        ListEmptyComponent={<ListEmpty message="Não há pessoas nesse time." />}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <PlayerCard
            name={item.name}
            onRemove={() => handleRemovePlayer(item.name)}
          />
        )}
        contentContainerStyle={[
          // { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />

      <Button
        title="Remover turma"
        type="SECONDARY"
        onPress={handleGroupRemove}
      />
    </Container>
  );
}
