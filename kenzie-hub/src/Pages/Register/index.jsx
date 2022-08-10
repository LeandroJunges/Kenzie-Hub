import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../validators/registerUser";
import api from "../../Service/api";
import HeaderRegister from "../../Components/HeaderRegister";
import { toast } from "react-toastify";
import { Form } from "./styles";
import { Container } from "../../Components/ContainerForm/styles";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    console.log(data);
    api
      .post("/users", data)
      .then((res) => {
        console.log(res);
        toast.success("Conta criada com sucesso");
      })

      .catch((err) => {
        toast.error("Ops! Tem algo errado!");
        console.log(err);
      });
  };

  return (
    <>
      <HeaderRegister />
      <Container>
        <h2>Crie sua conta</h2>
        <span>Rapido e gratis, vamos nessa </span>
        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <label htmlFor="cName">Nome</label>
          <input
            type="text"
            id="cName"
            placeholder="Nome"
            {...register("name")}
          />
          <p>{errors.name?.message} </p>

          <label htmlFor="cEmail">Email</label>
          <input
            type="email"
            id="cEmail"
            placeholder="Email"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>

          <label htmlFor="cSenha">Senha</label>
          <input
            type="password"
            id="cSenha"
            placeholder="Senha"
            {...register("password")}
          />
          <p>{errors.password?.message} </p>

          <label htmlFor="cConfirmSenha">Confirmar senha</label>
          <input
            type="password"
            id="cConfirmSenha"
            placeholder="Confirmar senha"
            {...register("confirmPass")}
          />
          <p>{errors.confirmPass?.message} </p>

          <label htmlFor="cBio">Bio</label>
          <input
            type="text"
            id="cBio"
            placeholder="Descrição"
            {...register("bio")}
          />
          <p>{errors.bio?.message} </p>

          <label htmlFor="cContact">Contato</label>
          <input
            type="text"
            id="cContact"
            placeholder="Contato"
            {...register("contact")}
          />
          <p>{errors.contact?.message} </p>

          <label htmlFor="cModule">Selecionar módulo</label>
          <select id="cModule" {...register("course_module")}>
            <option value="modulos">Selecione o módulo</option>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo (Frontend Avançado)
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo (Backend Avançado)
            </option>
          </select>
          <p>{errors.choseModule?.message} </p>

          <button type="submit">Cadastrar</button>
        </Form>
      </Container>
    </>
  );
}
export default Register;
