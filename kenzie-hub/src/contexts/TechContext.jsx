import { createContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../Service/api";

export const TechContex = createContext();

const TechProvider = ({ children }) => {
  const [techs, setTechs] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };
  function showTechs(id) {
    const token = localStorage.getItem("@TOKEN");
    api
      .get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setTechs(response.data.techs);
      })
      .catch((err) => console.log(err));
  }

  const removeTech = async (id) => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      try {
        await api.delete(`/users/techs/${id}`);

        toast.success("Tecnologia Deletada!");

        const person = localStorage.getItem("@USERID");
        showTechs(person);
        console.log(techs);
      } catch (error) {
        console.error("Ops aconteceu esse problema", error);
      }
    }
  };
  const addTech = async (data) => {
    try {
      await api.post("/users/techs", data);

      toast.success("Tecnologia adicionada!");

      const person = localStorage.getItem("@USERID");
      showTechs(person);
      setIsOpenModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TechContex.Provider
      value={{
        techs,
        addTech,
        removeTech,
        showTechs,
        isOpenModal,
        openModal,
        closeModal,
      }}
    >
      {children}
    </TechContex.Provider>
  );
};
export default TechProvider;
