<template>
    <div id="container">
        <h1>All orders</h1>
        <div id="orders">
            <div v-for="order in orders" :key="order">

                <h3>{{ order.dish_name }}</h3>
                <img :src="order.image" :alt="order.dish_name">
                <p>Price: ₹{{ order.price }}</p>
                <p>status: {{ order.order_status }}</p>
                <p>customer Name: {{ order.customer_name }}</p>
                <!-- <button class="hoverOrange" v-on:click="updateDish(order._id)">Update</button> -->
                <!-- <button v-on:click="isPopup = !isPopup">Update </button> -->
                <button v-on:click="update(order._id)">Update </button>

            </div>
        </div>
    </div>

    <!-- Popup window -->
    <div id="popup" :class="{ disp: notPopup }">
        <div class="popup-content">
            <h3>Update Dish</h3>
            <h2></h2>
            <p id="cross" @click="notPopup = !notPopup">❌</p>
            <form id="updateDishForm">
                <label for="status">Enter new status:</label>
                <input type="text" name="status" v-model="status">

                <button v-on:click="submitUpdateForm()">Update</button>
            </form>
        </div>
    </div>
</template>
    
<script>
import axios from 'axios';

export default {
    name: 'HomeComp',
    data() {
        return {
            orders: [],
            userName: '',
            notPopup: true,
            status: '',
            orderId: ''
        };
    },
    async mounted() {
        try {
            const response = await axios.get('http://127.0.0.1:5000/orders');
            console.warn("API data:", response.data);
            this.orders = response.data;
        } catch (error) {
            console.error(error);
        }
        console.warn(this.notPopup)
    },
    methods: {
        update(orderId) {
            this.notPopup = !this.notPopup
            this.orderId = orderId
        },
        async submitUpdateForm() {
            let result = await axios.put("http://127.0.0.1:5000/orders/" + this.orderId + "?order_status=" + this.status)
            alert(result.data["message"])
            this.notPopup = !this.notPopup;

        }

    }
};
</script>

    
<style>
.disp {
    display: none;
}

#container h1 {
    text-align: center;
}

#orders {
    display: flex;
    flex-wrap: wrap;
}

#orders>div {
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

.hoverOrange {
    text-decoration: none;
    color: black;
}

.hoverOrange:hover {
    color: orange;
    text-decoration: none;
}

/* popup */

.popup {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
}

.popup-content {
    background-color: #fff;
    width: 300px;
    padding: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
}

.popup-content p {
    position: absolute;
    right: 4%;
    top: 2%;
    cursor: pointer;
}

.popup-content p:hover {
    color: red;
}

.popup h3 {
    text-align: center;
}

.popup form {
    margin-top: 20px;
}

.popup label {
    display: block;
    margin-bottom: 5px;
}

.popup input[type="text"] {
    margin-bottom: 10px;
    padding: 5px;
    width: 100%;
}

.popup input[type="button"] {
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
}

.popup input[type="button"]:hover {
    background-color: #0056b3;
}
</style>
    