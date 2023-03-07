import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error && (error.statusText || error.message)}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
