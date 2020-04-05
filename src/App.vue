<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <general/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import HelloWorld from './components/HelloWorld.vue'
import General from './components/General.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    General
  },
  computed: mapState([
    'round',
    'counter',
    'weather',
  ]),

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
