<template>
    <div class="container mt-5">
        <div class="row">
            <h4 class="col-12 text-center mb-5" style="text-decoration: underline; text-decoration-color: #198754">Our
                Categories</h4>
        </div>
        <div class="row">
            <div class="card col-xl-4 col-md-6 mb-5" v-for="category of categories" :key="category.id">
                <div>
                    <img src="https://assets.gqindia.com/photos/607abc950fd85c063b973f46/16:9/w_2560%2Cc_limit/top-image-02%2520(6).jpg"
                        class="card-img-top" alt="Product Image">
                </div>
                <div class="card-body">
                    <h5 class="card-title mb-4">{{ category }}</h5>
                    <a href="#" class="btn btn-success">Full Details</a>
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

.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
