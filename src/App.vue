<template>
  <div id="app" class="bg-primary">
    <Header />
    <div id="nav" class="text-center p-1 m-1">
      <router-link class="btn btn-dark m-1" to="/">Home</router-link>
      <router-link class="btn btn-dark m-1" to="/about">About</router-link>
    </div>
    <router-view class="page" />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.page {
  flex-grow: 1;
}

#nav {
}

#nav a {
  font-weight: bold;
}

#nav a.router-link-exact-active {
}
</style>
