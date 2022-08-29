import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../Service/api";

export interface IAuthProviderProps {
  user: IUserProps;
  loading: boolean;
  signIn: (data: ILoginData) => Promise<void>;
}
interface IAuthProps {
  children: ReactNode;
}
export interface IUserProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
  contact: string;
  course_module: string[];
  techs?: string[];
}
export interface ILoginData {
  email: string;
  password: string;
}

export const AuthContext = createContext({} as IAuthProviderProps);

const AuthProvider = ({ children }: IAuthProps) => {
  const [user, setUser] = useState<IUserProps>({} as IUserProps);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@TOKEN");
      if (token) {
        try {
          api.defaults.headers.common.Authorization = `Bearer ${token}`;
          const { data } = await api.get("/profile");
          setUser(data);
        } catch (error) {
          localStorage.clear();
          console.error(error);
          toast.error("Ops! Tem algo errado!");
        }
      }
      setLoading(false);
    }
    loadUser();
  }, []);

  const signIn = async (data: ILoginData) => {
    try {
      const response = await api.post("/sessions", data);
      toast.success("Login Efetuado!");

      const { user: userResponse, token } = response.data;

      setUser(userResponse);
      localStorage.setItem("@USERID", JSON.stringify(userResponse.id));
      localStorage.setItem("@TOKEN", token);

      navigate("/dashboard", { replace: true });
    } catch (error) {
      toast.error("Ops! Tem algo errado! Verifique seu e-mail e senha !");
      console.error(error);
    }
  };
  return (
    <AuthContext.Provider value={{ user, signIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
