import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { TPlayerStorageDTO } from "./PlayerStorageDTO";

export async function playerAddByGroup_AS(
  newPlayer: TPlayerStorageDTO,
  group: string
) {
  try {
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, "");
  } catch (error) {
    throw error;
  }
}
