import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup
    .string()
    .required("Nome é obrigatório!")
    .min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: yup.string().email("Email inválido").required("Email é obrigatório!"),
  password: yup.string().required("Senha é obrigatória!"),
  confirmPassword: yup
    .string()
    .required("Senha é obrigatória!")
    .oneOf([yup.ref("password")], "Senhas não coincidem."),
  phone: yup
    .string()
    .required("Telefone é obrigatório!")
    .matches(/^\d{11}$/, "Telefone deve ter 11 dígitos (DDD + número)."),
});

export type TRegisterFormData = yup.InferType<typeof registerSchema>;
