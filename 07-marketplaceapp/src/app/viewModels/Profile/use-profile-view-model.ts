import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useUserStore } from "../../shared/store/user-store";
import { profileSchema, TProfileFormData } from "./profile.schema";

export const useProfileViewModel = () => {
  const { user } = useUserStore();

  const [avatarUri, setAvatarUri] = useState<string | null>(
    user?.avatarUrl ?? null
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
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

  const onSubmit = handleSubmit(async () => {});

  return {
    avatarUri,
    control,
    errors,
    onSubmit,
  };
};
