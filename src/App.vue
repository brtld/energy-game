<template>
  <div id="app">
    <Round />
    <Upgrades />
  </div>
</template>

<script>
import Upgrades from "./components/Upgrades.vue";
import Round from "./components/Round.vue";

export default {
  name: "App",
  components: {
    Upgrades,
    Round,
  },
};
</script>

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
