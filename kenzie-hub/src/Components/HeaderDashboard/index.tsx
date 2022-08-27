import { HeaderDash } from "../HeaderStyle/styles";
import { useNavigate } from "react-router-dom";

function HeaderDashboard() {
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate("/");
  }
  return (
    <HeaderDash>
      <h1>Kenzie Hub </h1>
      <button onClick={logout}>Sair</button>
    </HeaderDash>
  );
}
export default HeaderDashboard;
