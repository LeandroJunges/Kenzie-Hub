import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../validators/registerUser";
import HeaderRegister from "../../Components/HeaderRegister";
import { Form } from "./styles";
import { Container } from "../../Components/ContainerForm/styles";
import { useContext } from "react";
import {
  IRegisterProviderProps,
  ISubmitData,
  RegisterContext,
} from "../../contexts/RegisterContext";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISubmitData>({
    resolver: yupResolver(formSchema),
  });
  const { onSubmitFunction } =
    useContext<IRegisterProviderProps>(RegisterContext);

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
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
          <p>{errors.name?.message} </p>

          <label htmlFor="cEmail">Email</label>
          <input
            type="email"
            id="cEmail"
            placeholder="Digite aqui seu e-mail"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>

          <label htmlFor="cSenha">Senha</label>
          <input
            type="password"
            id="cSenha"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <p>{errors.password?.message} </p>

          <label htmlFor="cConfirmSenha">Confirmar senha</label>
          <input
            type="password"
            id="cConfirmSenha"
            placeholder="Digite novamente sua senha"
            {...register("confirmPass")}
          />
          <p>{errors.confirmPass?.message} </p>

          <label htmlFor="cBio">Bio</label>
          <input
            type="text"
            id="cBio"
            placeholder="Fale sobre você"
            {...register("bio")}
          />
          <p>{errors.bio?.message} </p>

          <label htmlFor="cContact">Contato</label>
          <input
            type="text"
            id="cContact"
            placeholder="Opção de contato Ex.linkedIn, Facebook, tel..."
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
          <p>{errors.course_module?.message} </p>

          <button type="submit">Cadastrar</button>
        </Form>
      </Container>
    </>
  );
}
export default Register;
