import { useNavigate } from "react-router-dom";
import HeaderDashboard from "../../Components/HeaderDashboard";
import { ContainerDashboard } from "./styles";

function Dashboard() {
  const navigate = useNavigate();
  const nameUser = localStorage.getItem("@NAME");

  const moduleUser = localStorage.getItem("@MODULE");

  function logout() {
    localStorage.clear();
    navigate("/");
  }
  return (
    <>
      <HeaderDashboard logout={logout} />
      <ContainerDashboard>
        <h1>Olá {nameUser.toUpperCase()} ! </h1>
        <span>{moduleUser}</span>
      </ContainerDashboard>
      <h4>Que pena ! Estamos em desemvolvimento :( </h4>
      <p>
        Nosssa aplicação esta em desenvolvimento, em breve teremos novidades...
      </p>
    </>
  );
}
export default Dashboard;
