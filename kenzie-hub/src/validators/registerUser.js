import * as yup from "yup";

export const formSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email invalido"),
  password: yup
    .string()
    .min(8)
    .required("Senha obrigatório")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Deve conter 8 caracteres,uma maiuscula, uma minuscula,um numero e um caractere especial!"
    ),
  confirmPass: yup
    .string()
    .oneOf([yup.ref("password")], "Deve ser a mesma senha !")
    .required("Campo obrigatório !"),

  bio: yup.string().required("campo obrigatório"),
  contact: yup.string().required("campo obrigatório"),
  course_module: yup.string().required("campo obrigatório"),
});
