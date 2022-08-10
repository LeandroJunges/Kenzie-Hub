import { useNavigate } from "react-router-dom";
import { Header } from "../HeaderStyle/styles";

function HeaderRegister() {
  const navigate = useNavigate();

  function back() {
    navigate("/");
  }
  return (
    <Header>
      <h1>Kenzie Hub</h1>
      <button onClick={back}>voltar</button>
    </Header>
  );
}
export default HeaderRegister;
