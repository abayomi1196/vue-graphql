<script>
import { useQuery } from "@vue/apollo-composable";
import { GET_CHARACTER_NAMES } from "./graphql/queries";

export default {
  name: "App",
  setup() {
    const { result, loading, error } = useQuery(GET_CHARACTER_NAMES);

    return { result, loading, error };
  },
};
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <p v-if="loading">Loading...</p>

  <p v-else-if="error">something went wrong</p>

  <ul v-else>
    <li v-for="character of result.characters.results" :key="character.id">
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
