<template>
  <div id="container">
    <h1>All dishes</h1>
    <div id="dishes">
      <div v-for="dish in dishes" :key="dish">

        <h3>{{ dish.dish_name }}</h3>
        <img :src="dish.image" :alt="dish.dish_name">
        <p>Price: ₹{{ dish.price }}</p>
        <button class="hoverRed" v-on:click="deleteDish(dish._id)">Delete</button>
        <button class="hoverGreen" v-on:click="buyDish(dish._id)">Buy now</button>
        <!-- <button class="hoverOrange" v-on:click="updateDish(dish._id)">Update</button> -->
        <button><router-link class="hoverOrange" :to="'/update/' + dish._id">Update</router-link></button>
        <p class="red">{{ dish.availability == "false" ? "Not Available" : "" }}</p>

      </div>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios';
export default {
  name: 'HomeComp',
  data() {
    return {
      dishes: [],
      userName:''
    }
  },
  async mounted() {
    let result = await axios.get('http://127.0.0.1:5000');
    // console.warn("Api data : ", result.data);
    this.dishes = result.data;
  },
  methods: {
    async deleteDish(dish_id) {
      let result = await axios.delete('http://localhost:5000/dishes/' + dish_id)
      alert(result.data["message"])
      window.location.reload();
    },
    async buyDish(dish_id) {
      
      let result = await axios.post('http://localhost:5000/orders/' + dish_id, {
        customer_name:"testing"  // it will automatically fetch when login functionality will be implemented
      })
      alert(result.data["message"])
      window.location.reload();
    },

  },
}
</script>
  
<style>
#container h1{
  text-align: center;
}
#dishes {
  display: flex;
  flex-wrap: wrap;
}

#dishes>div {
  width: 300px;
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f8f8f8;
}

img {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}

p {
  margin: 5px 0;
}

.red {
  color: red;
}

button {
  cursor: pointer;
  font-size: 20px;
  margin: 2px;
}

.hoverRed:hover {
  color: red;
}

.hoverGreen:hover {
  color: green;
}

.hoverOrange{
  text-decoration: none;
  color: black;
}
.hoverOrange:hover {
  color: orange;
  text-decoration: none;
}
</style>
  