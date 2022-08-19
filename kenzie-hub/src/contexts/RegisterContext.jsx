import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../Service/api";

export const RegisterContext = createContext();

const RegisterProvider = ({ children }) => {
  const navigate = useNavigate();

  const onSubmitFunction = async (data) => {
    await api
      .post("/users", data)
      .then((res) => {
        toast.success("Conta criada com sucesso");
        setTimeout(3000);
        navigate("/");
        return res;
      })
      .catch((err) => {
        toast.error("Ops! Tem algo errado!");
        console.error("Deu esse problema", err);
      });
  };
  return (
    <RegisterContext.Provider value={{ onSubmitFunction }}>
      {children}
    </RegisterContext.Provider>
  );
};
export default RegisterProvider;
