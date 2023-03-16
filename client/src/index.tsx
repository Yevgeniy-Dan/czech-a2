import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/MainRoot";
import ErrorPage from "./ErrorPage";
import Instructions from "./routes/Instructions/Instructions";
import Lectures from "./routes/Lectures";
import Lecture from "./routes/Lecture";
import Windows from "./routes/Instructions/Windows";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "instructions",
    element: <Instructions />,
  },
  {
    path: "instructions/windows",
    element: <Windows />,
  },
  {
    path: "lectures",
    element: <Lectures />,
  },
  {
    path: "lectures/:lectureId",
    element: <Lecture />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <div className="container">
    <RouterProvider router={router} />
  </div>
);
