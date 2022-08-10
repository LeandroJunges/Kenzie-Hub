import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { schemaLogin } from "../../validators/loginUser";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Container } from "../../Components/ContainerForm/styles";
import { FormLogin } from "./styles";
import { HeaderLogin } from "../../Components/HeaderStyle/styles";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  const { signIn } = useContext(AuthContext);

  return (
    <>
      <HeaderLogin>
        <h1>Kenzie Hub</h1>
      </HeaderLogin>
      <Container>
        <h2>Login</h2>
        <FormLogin onSubmit={handleSubmit(signIn)}>
          <label htmlFor="lEmail">Email</label>
          <input
            type="email"
            id="lEmail"
            placeholder="e-mail"
            {...register("email")}
          />
          <span>{errors.email?.message}</span>
          <label htmlFor="lPassword">Senha</label>
          <input
            type="password"
            id="lPassword"
            placeholder="senha"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>

          <button type="submit">Entrar</button>

          <p>ainda não possui conta ?</p>

          <Link to={"/register"}>Cadastre-se</Link>
        </FormLogin>
      </Container>
    </>
  );
}
export default Login;
