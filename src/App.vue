<template>
  <div id="app">
    <home-page></home-page>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'
export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  color: white;
  padding-left:10vw;
  padding-right: 10vw;
}
body{
  margin:0;
  background-image: url('./assets/background.jpg'), linear-gradient(rgba(60,60,60,0.5),rgba(190,22,34,0.6));
  background-blend-mode: overlay;
    background-size: cover;
  width: 100vw;
  height: 100vh;
}
</style>
