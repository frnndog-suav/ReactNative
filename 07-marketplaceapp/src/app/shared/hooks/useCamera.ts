import * as ImagePicker from "expo-image-picker";
import { useCallback, useState } from "react";
import { Toast } from "toastify-react-native";

type TProps = {
  exif?: boolean;
  quality?: number;
  allowsEditing?: boolean;
  aspect?: [number, number];
};

export const useCamera = (props: TProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const requestCameraPermission = useCallback(async () => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();

      const currentStatus = status === "granted";

      if (!currentStatus) {
        Toast.error("Precisamos de permissão para acessar a câmera.", "top");
      }

      return currentStatus;
    } catch (error) {
      Toast.error("Erro ao solicitar permissão para a câmera.", "top");
      return false;
    }
  }, []);

  const openCamera = useCallback(async () => {
    setIsLoading(true);

    try {
      const hasPermission = await requestCameraPermission();

      if (!hasPermission) {
        return null;
      }

      const result = await ImagePicker.launchCameraAsync(props);

      if (!result.canceled && result.assets && result.assets.length > 0) {
        Toast.success("Foto capturada com sucesso.", "top");
        return result.assets[0].uri;
      }

      return null;
    } catch (error) {
      Toast.error("Erro ao abrir a câmera.", "top");
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { requestCameraPermission, isLoading, openCamera };
};
