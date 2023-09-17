<template>
<div class="container mt-5">
    <div class="row">
        <h4 class="col-12 text-center">Our Categories</h4>
    </div>
    <div class="row">
        <div class="card col-xl-4 col-md-6 mb-5" v-for="category of categories" :key="category.id">
            <div>
                <img src="https://wgmimedia.com/wp-content/uploads/2023/04/digital_products.jpg" class="card-img-top" alt="Product Image">
            </div>
            <div class="card-body">
                <h5 class="card-title">{{ category }}</h5>
                <a href="#" class="btn btn-primary">Full Details</a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
const axios = require("axios")
export default {
    name: 'CategoryBox',
    data() {
        return {
            categoryURL: "https://dummyjson.com/products/categories",
            categories: []
        };
    },
    methods: {
        async getCategories() {
            await axios.get(this.categoryURL)
                .then(res => this.categories = res.data)
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
