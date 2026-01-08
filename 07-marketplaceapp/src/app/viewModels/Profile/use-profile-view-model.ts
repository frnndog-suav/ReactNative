import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAppModal } from "../../shared/hooks/use-app-modal";
import { useUpdateProfileMutation } from "../../shared/queries/profile/use-update-profile-mutation";
import { useCartStore } from "../../shared/store/cart-store";
import { useModalStore } from "../../shared/store/modal-store";
import { useUserStore } from "../../shared/store/user-store";
import { profileSchema, TProfileFormData } from "./profile.schema";

export const useProfileViewModel = () => {
  const { user, logout } = useUserStore();
  const { close } = useModalStore();
  const { clearCart } = useCartStore();

  const [avatarUri, setAvatarUri] = useState<string | null>(
    user?.avatarUrl ?? null
  );

  const updateProfileMutation = useUpdateProfileMutation();
  const { shownSelection } = useAppModal();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TProfileFormData>({
    resolver: yupResolver(profileSchema),
    defaultValues: {
      name: user?.name ?? "",
      phone: user?.phone ?? "11111111111",
      email: user?.email ?? "babilonia@gmail.com",
      password: undefined,
      confirmPassword: undefined,
    },
  });

  const validatePasswords = (userData: TProfileFormData) => {
    if (!userData.password) {
      return true;
    }

    if (
      userData.password === userData.confirmPassword &&
      userData.password?.length > 0
    ) {
      return false;
    }

    return true;
  };

  const onSubmit = handleSubmit(async (userData) => {
    if (!validatePasswords(userData)) {
      return;
    }

    await updateProfileMutation.mutateAsync(userData);
  });

  const handleLogout = () =>
    shownSelection({
      title: "Sair",
      message: "Tem certeza que deseja sair da sua conta?",
      options: [
        {
          text: "Continuar logado",
          onPress: close,
          variant: "primary",
        },
        {
          variant: "danger",
          onPress: () => {
            logout();
            clearCart();
          },
          text: "Sair",
        },
      ],
    });

  return {
    avatarUri,
    control,
    errors,
    onSubmit,
    isSubmitting,
    handleLogout,
  };
};
