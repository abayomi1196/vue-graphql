<script>
import { useQuery, useResult } from "@vue/apollo-composable";
import allCharactersQuery from "./graphql/allCharacters.query.gql";

export default {
  name: "App",
  setup() {
    const { result, loading, error } = useQuery(allCharactersQuery);

    /* the useResult fn allows us to takes the result of useQuery, 
      default value for the result and a fn that mutates / formats the result
    */
    const characters = useResult(result, null, (data) => data.characters);

    return { characters, loading, error };
  },
};
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <p v-if="loading">Loading...</p>

  <p v-else-if="error">Error: {{ error.message }}</p>

  <ul v-else>
    <li v-for="character of characters.results" :key="character.id">
      <img :src="character.image" />
      <p>{{ character.name }}</p>
    </li>
  </ul>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  padding: 0;
}

li {
  list-style: none;
  text-align: center;
}
</style>
