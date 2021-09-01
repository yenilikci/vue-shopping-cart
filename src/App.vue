<template>
  <div id="app">
    <div class="navi">
      <router-link to="/products" class="link">Products</router-link>
      <router-link to="/cart" class="link">Cart</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "App",
    components: {},
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .navi {
    margin-bottom: 20px;
    padding: 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: lemonchiffon;
    width: 80%;
  }

  .link {
    margin: 0 10px;
    text-decoration: none;
    color: #fff;
    background-color: #2c3e50;
    padding: 10px;
    border-radius: 15px;
    border: 2px hotpink solid;
  }
</style>
