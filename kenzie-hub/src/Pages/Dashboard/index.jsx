import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderDashboard from "../../Components/HeaderDashboard";
import ModalTechs from "../../Components/ModalTechs";
import { AuthContext } from "../../contexts/AuthContext";
import { ContainerDashboard, ContainerContent, ContainerList } from "./styles";
import { BsTrash } from "react-icons/bs";
import { TechContex } from "../../contexts/TechContext";

function Dashboard() {
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate("/");
  }
  const { user } = useContext(AuthContext);
  const { removeTech, techs, showTechs, isOpenModal, openModal, closeModal } =
    useContext(TechContex);

  useEffect(() => {
    const person = localStorage.getItem("@USERID");
    showTechs(person);
  }, [showTechs]);
  return (
    <>
      <HeaderDashboard logout={logout} />
      <ContainerDashboard>
        <h2>Olá {user.name} ! </h2>
        <span>{user.course_module}</span>
      </ContainerDashboard>
      <ContainerContent>
        <p>Tecnologias </p>
        <button onClick={openModal}>+</button>
      </ContainerContent>
      {isOpenModal && <ModalTechs closeModal={closeModal} />}

      <ContainerList>
        {techs?.map((tec) => (
          <li key={tec.id}>
            <div className="containerTech">
              <p>{tec.title}</p>
              <span>{tec.status}</span>
            </div>
            <button className="btnTrash">
              <BsTrash
                id={tec.id}
                type="button"
                size={21}
                onClick={() => removeTech(tec.id)}
              />
            </button>
          </li>
        ))}
        {/* <li>Sem techs no momento!</li> */}
      </ContainerList>
    </>
  );
}
export default Dashboard;
