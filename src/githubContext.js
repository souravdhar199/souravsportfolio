import { createContext, useEffect, useState } from "react";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
const PinnedContext = createContext();

export const ProviderPinned = ({ children }) => {
  const [pinnedRepo, SetPinnedrepo] = useState([]);
  async function getStaticProps() {
    const httpLink = createHttpLink({
      uri: "https://api.github.com/graphql",
    });

    const authLink = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      };
    });

    const client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });

    const { data } = await client.query({
      query: gql`
        {
          user(login: "souravdhar199") {
            pinnedItems(first: 6, types: [REPOSITORY]) {
              totalCount
              edges {
                node {
                  ... on Repository {
                    name
                    id
                    url
                    description
                    stargazers {
                      totalCount
                    }
                    languages(first: 3) {
                      nodes {
                        name
                        color
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `,
    });

    const { user } = data;
    const pinnedItems = user.pinnedItems.edges.map((edge) => edge.node);
    SetPinnedrepo([...pinnedItems]);
  }
  useEffect(() => {
    getStaticProps();
  }, []);

  return (
    <PinnedContext.Provider value={{ pinnedRepo: pinnedRepo }}>
      {children}
    </PinnedContext.Provider>
  );
};

export default PinnedContext;
