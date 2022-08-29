import { useContext, useEffect } from "react";
import HeaderDashboard from "../../Components/HeaderDashboard";
import ModalTechs from "../../Components/ModalTechs";
import { AuthContext } from "../../contexts/AuthContext";
import { ContainerDashboard, ContainerContent, ContainerList } from "./styles";
import { BsTrash } from "react-icons/bs";
import { TechContex } from "../../contexts/TechContext";

function Dashboard() {
  const { user } = useContext(AuthContext);
  const { removeTech, techs, showTechs, isOpenModal, openModal, closeModal } =
    useContext(TechContex);

  useEffect(() => {
    const person = JSON.parse(localStorage.getItem("@USERID") || "{}");
    showTechs(person);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HeaderDashboard />
      <ContainerDashboard>
        <h2>Olá {user.name} ! </h2>
        <span>{user.course_module}</span>
      </ContainerDashboard>
      <ContainerContent>
        <p>Tecnologias </p>
        <button onClick={openModal}>+</button>
      </ContainerContent>
      {isOpenModal && <ModalTechs closeModal={closeModal} />}

      {techs.length !== 0 ? (
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
                  size={20}
                  onClick={() => removeTech(tec.id)}
                />
              </button>
            </li>
          ))}
        </ContainerList>
      ) : (
        <p> Você esta sem tecnologias aprendidas no momento!</p>
      )}
    </>
  );
}
export default Dashboard;
