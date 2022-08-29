import { ReactNode } from "react";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../Service/api";

interface ITechProviderProps {
  techs: ITechsData[];
  isOpenModal: boolean;
  showTechs: (id: string) => Promise<void>;
  removeTech: (id: string) => Promise<void>;
  addTech: (data: ITechsData) => Promise<void>;
  openModal: () => void;
  closeModal: () => void;
}

interface ITechsProps {
  children: ReactNode;
}
export interface ITechsData {
  title: string;
  status: string;
  id: string;
}

export const TechContex = createContext({} as ITechProviderProps);

const TechProvider = ({ children }: ITechsProps) => {
  const [techs, setTechs] = useState<ITechsData[]>([]);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };
  const showTechs = async (id: string) => {
    const token = localStorage.getItem("@TOKEN");
    await api
      .get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setTechs(response.data.techs);
      })
      .catch((err) => console.error(err));
  };

  const removeTech = async (id: string) => {
    const person = JSON.parse(localStorage.getItem("@USERID") || "{}");
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      try {
        await api.delete(`/users/techs/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        toast.success("Tecnologia Deletada!");

        showTechs(person);
      } catch (error) {
        console.error("Ops aconteceu esse problema", error);
      }
    }
  };
  const addTech = async (data: ITechsData) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      await api.post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Tecnologia adicionada!");

      const person = JSON.parse(localStorage.getItem("@USERID") || "{}");
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
