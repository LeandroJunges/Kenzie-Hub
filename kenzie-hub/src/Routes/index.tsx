import { Routes, Route, Navigate } from "react-router-dom";
import ProtectRoute from "../Components/ProtectRoute";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

function RoutesMain() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      <Route path="*" element={<Navigate replace to={"/"} />} />
    </Routes>
  );
}

export default RoutesMain;
