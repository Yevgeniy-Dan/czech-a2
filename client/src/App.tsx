import React, { useEffect, Suspense, lazy } from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MenuBar from "./components/Layout/MenuBar";
// import PrivateRoute from "./components/Layout/PrivateRoute";
import Root from "./routes/MainRoot";
import Instructions from "./routes/Instructions/Instructions";
import Lectures from "./routes/Lectures";
import Lecture from "./routes/Lecture";
import Windows from "./routes/Instructions/Windows";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { useCheckAuthMutation } from "./store/api/auth";
import { setCredentials } from "./store/auth/authSlice";

const App: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.auth);

  const [checkAuth, { isLoading }] = useCheckAuthMutation();

  useEffect(() => {
    const checkAsyncAuth = async () => {
      try {
        const refreshResult: any = await checkAuth(null);
        if (refreshResult.data) {
          dispatch(
            setCredentials({
              token: refreshResult.data.accessToken,
              user: refreshResult.data.user,
            })
          );
        }
      } catch (error) {
        console.log("Update check auth error: ", error);
      }
    };

    if (localStorage.getItem("token")) {
      checkAsyncAuth();
    }
  }, [checkAuth, dispatch]);

  if (isLoading)
    return (
      <div className="text-center">
        <h1>Loading...</h1>
      </div>
    );

  const PrivateRoute = lazy(() => import(`./components/Layout/PrivateRoute`));

  return (
    <BrowserRouter>
      <React.Fragment>
        <MenuBar />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route index element={<Navigate to="/admin" />} />
            <Route path="/admin" element={<PrivateRoute isAuth={isAuth} />}>
              <Route path="/admin" element={<Root />} />
              <Route path="/admin/lectures" element={<Lectures />} />
              <Route path="/admin/lectures/:lectureId" element={<Lecture />} />
              <Route path="/admin/instructions" element={<Instructions />} />
              <Route path="/admin/instructions/windows" element={<Windows />} />
            </Route>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </Suspense>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
