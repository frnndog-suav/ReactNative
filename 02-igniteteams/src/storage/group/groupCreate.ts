import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll_AS } from "./groupsGetAll";

export async function groupCreate_AS(newGroup: string) {
  try {
    const storedGroups = await groupsGetAll_AS();

    const storage = JSON.stringify([...storedGroups, newGroup]);

    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
