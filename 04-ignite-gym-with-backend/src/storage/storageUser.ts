import { TUserDTO } from "@dtos/UserDTO";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_STORAGE } from "./storage.config";

export async function storageUserSave(user: TUserDTO) {
  await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user));
}
