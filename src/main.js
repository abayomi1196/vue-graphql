import { createApp, provide, h } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

import App from "./App.vue";

const apolloClient = new ApolloClient({
  link: createHttpLink({ uri: "https://rickandmortyapi.com/graphql/" }),
  cache: new InMemoryCache(),
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});

app.mount("#app");
