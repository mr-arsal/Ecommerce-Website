<template>
    <div class="container mt-5">
        <div class="row">
            <h4 class="col-12 text-center">Our Products</h4>
        </div>
        <div class="row">
            <div class="card col-xl-4 col-md-6 mb-5" v-for="product of products" :key="product.id">
                <div>
                    <img :src="product.thumbnail" class="card-img-top" alt="Product Image">
                </div>
                <div class="card-body">
                    <h5 class="card-title">{{ product.title }}</h5>
                    <p class="card-text">Description: {{ product.description }}</p>
                    <p class="card-title">Brand: {{ product.brand }}</p>
                    <p class="card-title">Price:{{ product.price }}</p>
                    <p class="card-title">Category: {{ product.category }}</p>
                    <a href="#" class="btn btn-primary">Full Detials</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const axios = require("axios")
export default {
    name: 'Products',
    data() {
        return {
            productsURL: "https://dummyjson.com/products",
            products: []
        };
    },
    methods: {
        async getCategories() {
            await axios.get(this.productsURL)
                .then(res => this.products = res.data.products)
                .catch(err => console.log(err))

        }
    },
    mounted() {
        this.getCategories()
    }
}
</script>

<style scoped>
.card-img-top {
    width: 100%;
    height: 15vw;
    object-fit: cover;
}
</style>
