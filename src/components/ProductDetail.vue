<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-4">
                <div>{{ product.title }}</div>
            </div>
        </div>
    </div>
</template>

<script>

const axios = require("axios")
export default {
    name: "ProductDetail",
    data() {
        return {
            productsURL: "https://dummyjson.com/products",
            products: [],
            product: {}
        }
    },
    // props: ["products"],
    methods: {
        async getCategories() {
            await axios.get(this.productsURL)
                .then(res => this.products = res.data.products)
                .catch(err => console.log(err))

        }
    },
    mounted() {
        this.getCategories();
        this.id = this.$route.params.id;
        this.product = this.products.find((product) => product.id == this.id)
        console.log(this.product)
    },
}
</script>

