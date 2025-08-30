import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedAdminRoute = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || (user.role !== "admin" && user.role !== "super-admin")) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedAdminRoute;
