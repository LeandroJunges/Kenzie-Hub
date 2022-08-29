import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function ProtectRoute() {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <div>Carregando...</div>;
  }

  return user ? <Outlet /> : <Navigate to="/" replace />;
}

export default ProtectRoute;
