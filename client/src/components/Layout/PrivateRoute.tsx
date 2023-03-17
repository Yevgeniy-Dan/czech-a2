import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";

const PrivateRoute: React.FC<React.PropsWithChildren<{}>> = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  console.log("isAuth: ", isAuth);

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
