<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <router-link to="/"><a class="navbar-brand" id="logo">Ecommerce</a></router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/categories">
                            <a class="nav-link" id="nav-link-1" aria-current="page">Categories</a>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/products">
                            <a class="nav-link">Products</a>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/login">
                            <a class="nav-link">Login</a>
                        </router-link>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
    <router-view />
</template>

<style scoped>
#logo {
    color: #198754;
    font-weight: 500;
}

a {
    color: black;
    text-decoration: none;
}
</style>
