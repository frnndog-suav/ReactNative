import { useMutation } from "@tanstack/react-query";
import { Toast } from "toastify-react-native";
import { useAppModal } from "../../hooks/use-app-modal";
import { updateUserProfile } from "../../services/profile.service";
import { useUserStore } from "../../store/user-store";

export const useUpdateProfileMutation = () => {
  const { updateUser } = useUserStore();
  const { showSuccess } = useAppModal();

  const mutation = useMutation({
    mutationFn: updateUserProfile,
    onSuccess: (response) => {
      updateUser({ ...response.user });

      showSuccess({ title: "Sucesso", message: "Perfil atualizado!" });
    },
    onError: (error) => {
      Toast.error(error.message || "Falha ao atualizar o perfil.", "top");
    },
  });

  return mutation;
};
