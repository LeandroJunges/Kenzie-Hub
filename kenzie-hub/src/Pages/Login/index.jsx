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
        <h2 className="titleForm">Login</h2>
        <FormLogin onSubmit={handleSubmit(signIn)}>
          <label htmlFor="lEmail">E-mail:</label>
          <input
            type="email"
            id="lEmail"
            placeholder="Digite seu e-mail"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
          <label htmlFor="lPassword">Senha:</label>
          <input
            type="password"
            id="lPassword"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>

          <button type="submit">Entrar</button>

          <span>Ainda não possui conta ?</span>

          <Link to={"/register"}>Cadastre-se</Link>
        </FormLogin>
      </Container>
    </>
  );
}
export default Login;
