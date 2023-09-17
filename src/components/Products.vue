<template>
    <div class="container mt-5">
        <div class="row">
            <h4 class="col-12 text-center mb-5 fw-semibold fs-3"
                style="text-decoration: underline; text-decoration-color: #198754">Our Products</h4>
        </div>
        <div class="row">
            <div class="card col-xl-4 col-md-6 mb-5" v-for="product of products" :key="product.id">
                <div>
                    <img :src="product.thumbnail" class="card-img-top" alt="Product Image">
                </div>
                <div class="card-body">
                    <h5 class="card-title pt-3 pb-3">{{ product.title }}</h5>
                    <p class="card-text"><span class="fw-semibold">Description:</span> {{ product.description }}</p>
                    <p class="card-title"><span class="fw-semibold">Brand: </span> {{ product.brand }}</p>
                    <p class="card-title"><span class="fw-semibold">Price: $</span>{{ product.price }}</p>
                    <p class="card-title"><span class="fw-semibold">Category: </span>{{ product.category }}</p>
                    <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">
                        <a class="btn btn-success text-white mt-3">Full Detials</a>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import ProductDetail from "./ProductDetail.vue";

const axios = require("axios")
export default {
    name: 'Products',
    data() {
        return {
            productsURL: "https://dummyjson.com/products",
            products: []
        };
    },
    //     components: {
    //     ProductDetail, 
    //   },
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

.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
