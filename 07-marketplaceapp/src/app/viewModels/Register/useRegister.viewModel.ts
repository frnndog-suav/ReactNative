import { yupResolver } from "@hookform/resolvers/yup";
import { CameraType } from "expo-image-picker";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useImage } from "../../shared/hooks/useImage";
import { useRegisterMutation } from "../../shared/queries/auth/userRegister.mutation";
import { useUploadAvatarMutation } from "../../shared/queries/auth/useUploadAvatar.mutation";
import { useUserStore } from "../../shared/store/user-store";
import { registerSchema, TRegisterFormData } from "./register.schema";

export function useRegisterViewModel() {
  const [avatarUri, setAvatarUri] = useState<string | null>(null);

  const { mutateAsync: uploadAvatar } = useUploadAvatarMutation();
  const { updateUser } = useUserStore();
  const mutation = useRegisterMutation({
    onSuccess: async () => {
      if (avatarUri) {
        const { url } = await uploadAvatar(avatarUri);

        updateUser({ avatarUrl: url });
      }
    },
  });
  const { handleSelectImage } = useImage({
    callback: setAvatarUri,
    cameraType: CameraType.front,
  });

  const handleSelectAvatar = async () => {
    await handleSelectImage();
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormData>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: "babilonia",
      phone: "11111111111",
      email: "babilonia@gmail.com",
      password: "777777777777777777",
      confirmPassword: "777777777777777777",
    },
  });

  function onSubmit() {
    handleSubmit(async (data) => {
      const { confirmPassword, ...registerData } = data;

      await mutation.mutateAsync({
        name: registerData.name,
        phone: registerData.phone,
        email: registerData.email,
        password: registerData.password,
      });
    })();
  }

  return {
    errors,
    control,
    avatarUri,
    onSubmit,
    handleSelectAvatar,
  };
}
