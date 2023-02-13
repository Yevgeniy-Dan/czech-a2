import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_STRAPI_URI,
});

const authLink = setContext((_, { headers }) => {
  const token = process.env.REACT_APP_STRAPI_API_KEY;

  if (
    process.env.NODE_ENV === "development" ||
    process.env.NODE_ENV === "test"
  ) {
    return {
      headers: {
        ...headers,
      },
    };
  }

  return {
    headers: {
      ...headers,
      Authoriztion: `Bearer ${token}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
