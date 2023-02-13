import React from "react";
import ReactDOM from "react-dom/client";
import "video-react/dist/video-react.css";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import App from "./App";

import { ApolloProvider } from "@apollo/client";

import client from "./utils/apollo-client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
