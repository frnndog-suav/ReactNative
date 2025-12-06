import { useMutation } from "@tanstack/react-query";
import { Toast } from "toastify-react-native";
import { uploadAvatar } from "../../services/auth.service";

export const useUploadAvatarMutation = () => {
  const mutation = useMutation({
    mutationFn: uploadAvatar,
    onSuccess: (response) => {
      console.log("Avatar uploaded successfully:", response);
    },
    onError: (error) => {
      Toast.error("Erro ao fazer upload do avatar.");
    },
  });

  return mutation;
};
