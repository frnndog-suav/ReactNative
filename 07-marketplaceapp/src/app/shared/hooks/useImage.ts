import { useAppModal } from "./useAppModal";
import { useCamera } from "./useCamera";
import { useGallery } from "./useGallery";

type TProps = {
  exif?: boolean;
  quality?: number;
  allowsEditing?: boolean;
  aspect?: [number, number];
};

export const useImage = (props: TProps) => {
  const modals = useAppModal();
  const { openCamera, isLoading: isCameraLoading } = useCamera(props);
  const { openGallery, isLoading: isGalleryLoading } = useGallery(props);

  const isLoading = isCameraLoading || isGalleryLoading;

  const handleSelectImage = () => {
    modals.shownSelection({
      title: "Selecionar foto",
      message: "Escolha um opção",
      options: [
        {
          text: "Galeria",
          icon: "image",
          variant: "primary",
          onPress: openGallery,
        },
        {
          text: "Câmera",
          icon: "camera",
          variant: "primary",
          onPress: openCamera,
        },
      ],
    });
  };

  return { handleSelectImage, isLoading };
};
