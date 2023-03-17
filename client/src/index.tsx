import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import {
  BrowserRouter,
  createBrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { Provider } from "react-redux";
import Root from "./routes/MainRoot";
import ErrorPage from "./ErrorPage";
import Instructions from "./routes/Instructions/Instructions";
import Lectures from "./routes/Lectures";
import Lecture from "./routes/Lecture";
import Windows from "./routes/Instructions/Windows";
import store from "./store";
import PrivateRoute from "./components/Layout/PrivateRoute";
import MenuBar from "./components/Layout/MenuBar";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.Fragment>
        <MenuBar />
        <Routes>
          <Route index element={<Navigate to="/admin" />} />
          <Route path="/admin" element={<PrivateRoute />}>
            <Route path="/admin" element={<Root />} />
            <Route path="/admin/lectures" element={<Lectures />} />
            <Route path="/admin/lectures/:lectureId" element={<Lecture />} />
            <Route path="/admin/instructions" element={<Instructions />} />
            <Route path="/admin/instructions/windows" element={<Windows />} />
          </Route>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  </Provider>
);
