<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg=2 row-cols-xl-2">
            <div class="cols mt-5">
                <h1 class="land-text pt-5">
                    Buy<span class="span"> Latest</span> Tech Products
                </h1>
                <p class="pt-3 fs-5 pb-3">Most popular store for buying unique tech products</p>
                <div class="center">
                    <router-link to="/categories">
                        <button class="border-0 rounded-pill p-2 pe-5 ps-5 btn btn-outline-success text-white"
                            id="buy-nft-bg">Categories</button>
                    </router-link>
                    <router-link to="/products">
                        <button class=" rounded-pill p-2 pe-5 ps-5 btn btn-outline-success ms-3">Products</button>
                    </router-link>
                </div>
            </div>
            <div class="cols order-first order-md-first order-lg-last">
                <img src="https://techresearchonline.com/wp-content/uploads/2022/06/product1-1-1024x1024.webp"
                    class="img-fluid">
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import Footer from '../components/Footer.vue';

export default {
    component: Footer,
    components: { Footer }
}
</script>

<style scoped>
.land-text {
    font-size: 65px;
}

.bg-color {
    width: 100%;
    height: 100%;
    background-color: #010922;
}

#buy-nft-bg {
    background-color: #198754;
}

span {
    color: #198754;
}
</style>