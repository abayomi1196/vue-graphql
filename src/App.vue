<script>
import { useQuery, useResult } from "@vue/apollo-composable";
import allCharactersQuery from "./graphql/queries/allCharacters.query.gql";

export default {
  name: "App",
  setup() {
    const { result, loading, error } = useQuery(allCharactersQuery);
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
      {{ character.name }}
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
</style>
