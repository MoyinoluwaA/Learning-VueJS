<template>
  <div id="app">
    <!-- how to reference links (similar to a tag or Link and NavLink in React) -->
    <router-link to='/'>Home</router-link>
    <router-link to='/about'>About</router-link>
    <router-view />
  </div>
</template>

<script>
// import Parent from './components/Parent.vue'

export default {
  name: 'App',
  components: {

  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
