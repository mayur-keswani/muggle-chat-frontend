import {
  ApolloClient,
  InMemoryCache,
  GraphQLRequest,
  createHttpLink,
  split,
  ApolloLink,
  RequestHandler,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";

const getConnectionURL = (connectionType: "socket" | "http"): string => {
  let baseUrl = process.env.REACT_APP_HASURA_URL;
  console.log({ baseUrl });
  if (!baseUrl || !baseUrl.includes("http")) {
    return "";
  } else if (connectionType === "socket") {
    return baseUrl.replace("http", "ws");
  } else {
    return baseUrl;
  }
};

const getToken = () => {
  return (
    localStorage.getItem("access_token") ??
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiLCJzdXBlcmFkbWluIl0sIngtaGFzdXJhLXVzZXItaWQiOiJmZjRiYWNhNS01ZTk3LTQ4N2EtYmQzMi02MTU3ZjkwNDhhYmUifX0.wWoazR2D7Nh0K1GeXpb_RAjvvGc8hMftN3IHHLlnr5o"
  );
};

const authLink = setContext(
  ({ operationName }: GraphQLRequest, prevCtx: any) => {
    const publicOperations = ["register", "login"];
    if (
      operationName &&
      !publicOperations.includes(operationName.toLowerCase())
    ) {
      const token = getToken();
      return {
        ...prevCtx,
        headers: {
          ...prevCtx.headers,
          Authorization: `Bearer ${token}`,
          // "x-hasura-admin-secret": "myadminsecretkey",
        },
      };
    }
  }
);

const httpLink = createHttpLink({
  uri: getConnectionURL("http"),
});

const wsLink =
  typeof window !== "undefined"
    ? new GraphQLWsLink(
        createClient({
          url: getConnectionURL("socket"),
          lazy: true,
          retryAttempts: Infinity,
          shouldRetry: () => true,
          keepAlive: 10000,
          connectionParams: () => ({
            headers: {
              Authorization: `Bearer ${getToken()}`,
            },
          }),
        })
      )
    : null;

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = wsLink
  ? split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === "OperationDefinition" &&
          definition.operation === "subscription"
        );
      },
      wsLink,
      httpLink
    )
  : httpLink;

const getApolloLinks = (): (ApolloLink | RequestHandler)[] => {
  const Links = [];
  console.log({ splitLink });
  Links.push(authLink);
  Links.push(splitLink);
  return Links;
};
const client = new ApolloClient({
  name: "muggle-discord",
  version: "1.0.0",
  link: ApolloLink.from(getApolloLinks()),
  cache: new InMemoryCache(),
  ssrMode: typeof window === "undefined",
});

export default client