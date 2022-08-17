import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../Service/api";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@TOKEN");
      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
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

  const signIn = async (data) => {
    try {
      const response = await api.post("/sessions", data);
      toast.success("Login Efetuado!");

      const { user: userResponse, token } = response.data;

      api.defaults.headers.authorization = `Bearer ${token}`;
      setUser(userResponse);

      localStorage.setItem("@TOKEN", token);
      localStorage.setItem("@USERID", user.id);
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
