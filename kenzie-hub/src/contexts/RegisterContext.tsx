import { createContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../Service/api";

export interface IRegisterProviderProps {
  onSubmitFunction: (data: ISubmitData) => Promise<void>;
}
interface IRegisterProps {
  children: ReactNode;
}
export interface ISubmitData {
  name: string;
  email: string;
  password: string;
  confirmPass: string;
  bio: string;
  contact: string;
  course_module: string[];
  techs?: string[];
}
export const RegisterContext = createContext({} as IRegisterProviderProps);

const RegisterProvider = ({ children }: IRegisterProps) => {
  const navigate = useNavigate();

  const onSubmitFunction = async (data: ISubmitData) => {
    await api
      .post("/users", data)
      .then((res) => {
        toast.success("Conta criada com sucesso");
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
