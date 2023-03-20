import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useLogoutMutation } from "../../store/api/auth";
import { resetCredentials } from "../../store/auth/authSlice";

const MenuBar: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [logout, { isLoading }] = useLogoutMutation();

  const isAuth = useAppSelector((state) => state.auth.isAuth);

  const onLogout = async () => {
    try {
      const result: any = await logout(null);
      if (result.data) {
        localStorage.removeItem("token");
        dispatch(resetCredentials());
        navigate("/");
      }
    } catch (error) {
      console.log("Logout error: ", error);
    }
  };

  return (
    <header>
      <nav className="d-flex justify-content-end">
        {isAuth ? (
          <div className="p-2">
            <button onClick={onLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <div className="p-2">
              <Link to="/login">Login</Link>
            </div>
            <div className="p-2">
              <Link to="/register">Register</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default MenuBar;
