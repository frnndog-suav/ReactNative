import * as yup from "yup";

export const profileSchema: yup.ObjectSchema<{
  name: string;
  email: string;
  phone: string;
  password?: string;
  confirmPassword?: string;
}> = yup.object().shape({
  name: yup
    .string()
    .required("Nome é obrigatório!")
    .min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: yup.string().email("Email inválido").required("Email é obrigatório!"),
  password: yup.string().optional(),
  confirmPassword: yup.string().optional(),
  phone: yup
    .string()
    .required("Telefone é obrigatório!")
    .matches(/^\d{11}$/, "Telefone deve ter 11 dígitos (DDD + número)."),
});

export type TProfileFormData = yup.InferType<typeof profileSchema>;
