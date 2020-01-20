<template>
  <div id="app">
    <Hero image="src\assets\clouds.jpeg" alt="Landscape with sun and clouds" />

    <h1 id="title">{{ title }}</h1>
    <div id="text">{{ text }}</div>    
  </div>
</template>

<script>
import Hero from "./Hero"

export default {
  name: 'app',
  components: {
    Hero
  },
  data () {
    return {
      title: 'POC',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  }
}
</script>

<style lang="scss">

html, body {
  margin: 0px !important;
  padding: 0px !important;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  padding: 0px;
}

#text {
  margin: 0 auto;
  padding: 0px;
  width: 50%;
}

h1 {
  font-weight: normal;
}

</style>
