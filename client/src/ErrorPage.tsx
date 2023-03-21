import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage: React.FC<React.PropsWithChildren<{}>> = (props) => {
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
};

export default ErrorPage;
