<template>
<div class="card">
    <div>
        <img src="#" class="card-img-top" alt="Product Image">
    </div>
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    <div>
        {{ categories }}
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
                .then(res => this.categories = console.log(res.data))
                // .then(console.log(categories))
                // .catch(err => console.log(err))

        }
    },
    mounted() {
        this.getCategories()
    }
}
</script>
