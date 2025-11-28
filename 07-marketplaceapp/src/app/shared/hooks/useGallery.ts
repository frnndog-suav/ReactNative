import * as ImagePicker from "expo-image-picker";
import { ImagePickerOptions } from "expo-image-picker";
import { useCallback, useState } from "react";
import { Alert, Linking } from "react-native";
import { Toast } from "toastify-react-native";

export const useGallery = (props: ImagePickerOptions) => {
  const [isLoading, setIsLoading] = useState(false);

  const requestGalleryPermission = useCallback(async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      const currentStatus = status === "granted";

      if (!currentStatus) {
        Alert.alert(
          "Permissão negada",
          "Precisamos de sua permissão para acessar suas fotos.",
          [
            {
              text: "Cancelar",
              style: "cancel",
            },
            {
              text: "Abrir Configurações",
              style: "cancel",
              onPress: () => {
                Linking.openSettings();
              },
            },
          ]
        );
      }

      return currentStatus;
    } catch (error) {
      Toast.error("Erro ao solicitar permissão para suas fotos.", "top");
      return false;
    }
  }, []);

  const openGallery = useCallback(async () => {
    setIsLoading(true);

    try {
      const hasPermission = await requestGalleryPermission();

      if (!hasPermission) {
        return null;
      }

      const result = await ImagePicker.launchImageLibraryAsync(props);

      if (!result.canceled && result.assets && result.assets.length > 0) {
        Toast.success("Foto selecionada com sucesso.", "top");
        return result.assets[0].uri;
      }

      return null;
    } catch (error) {
      Toast.error("Erro ao selecionar foto.", "top");
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { openGallery, isLoading, requestGalleryPermission };
};
