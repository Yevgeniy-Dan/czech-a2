import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute: React.FC<React.PropsWithChildren<{ isAuth: boolean }>> = ({
  isAuth,
}) => {
  return isAuth ? <Outlet /> : <Navigate to="/login" replace={true} />;
};

export default PrivateRoute;
