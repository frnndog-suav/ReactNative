import { useMutation } from "@tanstack/react-query";
import { Toast } from "toastify-react-native";
import { uploadAvatar } from "../../services/auth";
import { useUserStore } from "../../store/user-store";

export const useUploadAvatar = () => {
  const { updateUser } = useUserStore();

  const mutation = useMutation({
    mutationFn: uploadAvatar,
    onSuccess: (response) => {
      console.log("Avatar uploaded successfully:", response);
      updateUser({ avatarUrl: response.url });
    },
    onError: (error) => {
      Toast.error("Erro ao fazer upload do avatar.");
    },
  });

  return mutation;
};
