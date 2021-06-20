<template>
  <div id="app">
    <div class="container">
      <div class="nav">
        <div>
          <router-link to="/page1">Page1</router-link>
          <router-link to="/page2">Page2</router-link>
        </div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}

.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}

.nav a {
  padding: 20px 25px;
  background: white;
  margin-right: 10px;
  border-radius: 10px 20px 20px 0px;
  text-align: center;
}
</style>
