import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import apiSlice from "../../store/api/apiSlice";

const MenuBar: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isAuth = useAppSelector((state) => state.auth.isAuth);

  const onLogout = async () => {
    await dispatch(apiSlice.endpoints.logout.initiate(null));
    navigate("/");
  };

  return (
    <header>
      <nav className="d-flex justify-content-end">
        {isAuth ? (
          <div className="p-2">
            <button onClick={onLogout}>Logout</button>
          </div>
        ) : (
          <div className="p-2">
            <Link to="/login">Login</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default MenuBar;
