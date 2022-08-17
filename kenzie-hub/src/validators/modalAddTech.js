import * as yup from "yup";

export const schemaModal = yup.object().shape({
  title: yup.string().required("Campo Obrigatorio!"),
  status: yup.string().required("Selecione uma opção por favor !"),
});
