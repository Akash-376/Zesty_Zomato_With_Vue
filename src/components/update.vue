<template>
    <div class="container">
        <div class="form-container">
            <h1>Update Dish</h1>

            <div class="form-group">
                <label for="dishName">Dish Name:</label>
                <input type="text" name="dishName" v-model="updatedDish.dish_name">
            </div>

            <div class="form-group">
                <label for="image">Image URL:</label>
                <input type="url" name="image" v-model="updatedDish.image">
            </div>

            <div class="form-group">
                <label for="price">Price:</label>
                <input type="text" name="price" v-model="updatedDish.price">
            </div>

            <div class="form-group">
                <label for="availability">Is Available:</label>
                <select name="availability" v-model="updatedDish.availability">
                    <option value="true">Available</option>
                    <option value="false">Not Available</option>
                </select>
            </div>

            <button v-on:click="updateDish()">update</button>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default{
    
    name: 'OrderUpdateComp',
    data() {
        return {
            updatedDish:{

                dish_name: '',
                image: '',
                price: '',
                availability: ''
            }

        }
    },
    async mounted(){
        const dishId = this.$route.params.id;
        
        let dish = await axios.get('http://localhost:5000/dishes/'+dishId);
        this.updatedDish = dish.data;
        
    },
    methods:{
        async updateDish(){
            const dishId = this.$route.params.id;
            // console.warn(dishId)
            let result = await axios.put('http://localhost:5000/dishes/'+dishId,{
                dish_name : this.updatedDish.dish_name,
                image : this.updatedDish.image,
                price : this.updatedDish.price,
                availability : this.updatedDish.availability
            });
            if(result.status == 200)
                alert(result.data["message"]);
                window.location = '/'
            
        }
    }
}

</script>
<style scoped>
.container {
    background-image: url('https://image.shutterstock.com/image-photo/healthy-food-clean-eating-selection-260nw-722718097.jpg');
    background-size: cover;
    background-position: center;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
}

.form-container {
    width: 33%;
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 5px;
    /* border: 2px solid green; */
}

h1 {
    text-align: center;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    font-weight: bold;
}

input,
select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #4caf50;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}
</style>