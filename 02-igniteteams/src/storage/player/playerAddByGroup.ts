import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { TPlayerStorageDTO } from "./PlayerStorageDTO";
import { playersGetByGroup_AS } from "./playersGetByGroup";

export async function playerAddByGroup_AS(
  newPlayer: TPlayerStorageDTO,
  group: string
) {
  try {
    const storedPlayers = await playersGetByGroup_AS(group);

    const playerAlreadyExists = storedPlayers.filter(
      (player) => player.name === newPlayer.name
    );

    if (playerAlreadyExists.length > 0) {
      throw new AppError("Essa pessoa já esta adicionada em um time.");
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer]);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw error;
  }
}
