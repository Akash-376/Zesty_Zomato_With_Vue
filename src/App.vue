<template>
  <div id="nav">
    <router-link class="nav" to="/">All Dishes</router-link>
    <router-link class="nav" to="/create">Add Dish</router-link>
    <router-link class="nav" to="/orders">All orders</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #nav{
    display: flex;
    background-color: #3498DB;
  }
  .nav {
    color: rgb(47, 45, 45);
    font-weight: bold;
    display: flex;
    text-decoration: none;
    margin: 20px;
    font-size: 20px;
    /* Add other styles as needed */
  }
  .nav:hover{
    color: #D35400 ;
  }
</style>