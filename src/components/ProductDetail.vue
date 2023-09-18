<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg=2 row-cols-xl-2">
            <div class="cols mt-5" v-if="product">
                <h1 class="land-text pt-5">
                    <span class="span">{{ product.title }}</span>
                </h1>
                <p class="fs-5"><span class="fw-semibold mt-5">Description:</span> {{ product.description }}</p>
                <p class="fs-5"><span class="fw-semibold">Brand: </span> {{ product.brand }}</p>
                <p class="fs-5"><span class="fw-semibold">Price: $</span>{{ product.price }}</p>
                <p class="fs-5"><span class="fw-semibold">Category: </span>{{ product.category }}</p>
                <div class="center">
                    <button class="border-0 rounded-pill p-2 pe-5 ps-5 btn btn-outline-success text-white"
                        id="buy-nft-bg">Purchase</button>
                    <button class=" rounded-pill p-2 pe-5 ps-5 btn btn-outline-success ms-3">Add to cart</button>
                </div>
            </div>
            <div v-if="product" class="cols order-first order-md-first order-lg-last img-center">
                <img :src="product.thumbnail" class="img-fluid">
            </div>
        </div>
    </div>
    <Footer/>
</template>

<script>
import Footer from '../components/Footer.vue';

const axios = require("axios")
export default {
    name: "ProductDetail",
    component: Footer,
    components: { Footer },
    // data() {
    //     return {
    //         productsURL: `https://dummyjson.com/products/${id}`,
    //         products: [],
    //         fullDetail: {}
    //     }
    // },
    // methods: {
    //     async getCategories() {s
    //         await axios.get(this.productsURL)
    //             .then(res => this.products = res.data.products)
    //             .catch(err => console.log(err)) 

    //     }
    // },
    // async mounted() {
    //     await this.getCategories();
    //     const id = this.$route.params.id;
    //     this.fullDetail = this.products.find((fullDetail) => fullDetail.id === this.id)
    //     console.log(this.fullDetail)
    // },
    data() {
        return {
            product: null
        };
    },
    computed: {
        productId() {
            return this.$route.params.id;
        }
    },
    mounted() {
        axios.get(`https://dummyjson.com/products/${this.productId}`)
            .then(response => {
                this.product = response.data;
            })
            .catch(error => {
                console.error("There was an error fetching the product details", error);
            });
    },
}
</script>

<style scoped>
.container{
    height: 100vh;
}
.img-center {
    margin-top: 10%;
}

.land-text {
    font-size: 50px;
}

#buy-nft-bg {
    background-color: #198754;
}

span {
    color: #198754;
}
</style>

