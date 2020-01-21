<template>
  <div id="app">
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

<style lang="scss">

html, body {
  margin: 0px !important;
  padding: 0px !important;
}

</style>
