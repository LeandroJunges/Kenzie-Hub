import * as yup from "yup";

export const schemaLogin = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email invalido"),
  password: yup
    .string()
    .min(8, "No minimo 8 caracteres")
    .required("Senha obrigatório"),
});
