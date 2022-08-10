import { useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../Service/api";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@TOKEN");
      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await api.get("/profile");
          console.log(data);
          setUser(data);
        } catch (error) {
          toast.error("Ops! Tem algo errado!");
          console.error(error);
        }
      }
    }
    loadUser();
  }, []);
  const signIn = async (data) => {
    console.log(data);
    const response = await api.post("/sessions", data);
    toast.success("Login Efetuado!");

    const { user: userResponse, token } = response.data;
    setUser(userResponse);

    api.defaults.headers.authorization = `Bearer ${token}`;

    localStorage.setItem("@TOKEN", token);
    localStorage.setItem("@NAME", user.name);
    localStorage.setItem("@MODULE", user.course_module);
    navigate("/dashboard", { replace: true });
  };
  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
