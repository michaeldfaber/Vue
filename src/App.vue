<template>
  <div id="app" class="app-container">
      <Navbar />
      <router-view></router-view>
    </div>
</template>

<script>
import Navbar from "./components/Navbar"

export default {
  name: 'app',
  components: {
    Navbar
  },
  data () { }
}
</script>

<style scoped lang="scss">

.app-container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 1.25rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  margin-bottom: 200px;
  padding: 0px;
}

</style>
