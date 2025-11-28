import { ImagePickerOptions } from "expo-image-picker";
import { useModalStore } from "../store/use-modal";
import { useAppModal } from "./useAppModal";
import { useCamera } from "./useCamera";
import { useGallery } from "./useGallery";

type TProps = ImagePickerOptions & {
  callback: (uri: string | null) => void;
};

export const useImage = ({ callback, ...rest }: TProps) => {
  const modals = useAppModal();
  const { openCamera, isLoading: isCameraLoading } = useCamera(rest);
  const { openGallery, isLoading: isGalleryLoading } = useGallery(rest);

  const isLoading = isCameraLoading || isGalleryLoading;

  const { close } = useModalStore();

  const handleCallback = (uri: string | null) => {
    close();
    callback(uri);
  };

  const handleSelectImage = () => {
    modals.shownSelection({
      title: "Selecionar foto",
      message: "Escolha um opção",
      options: [
        {
          text: "Galeria",
          icon: "image",
          variant: "primary",
          onPress: async () => {
            const imageUri = await openGallery();
            handleCallback(imageUri);
          },
        },
        {
          text: "Câmera",
          icon: "camera",
          variant: "primary",
          onPress: async () => {
            const imageUri = await openCamera();
            handleCallback(imageUri);
          },
        },
      ],
    });
  };

  return { handleSelectImage, isLoading };
};
