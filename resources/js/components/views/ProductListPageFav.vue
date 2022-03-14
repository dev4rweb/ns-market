<template>
<div class="mb-5">
    <CatalogProductsHeader />
    <Breadcrumb />
    <div class="mb-3">
        <NavCatalog :slug="slug" />
    </div>
    <div class="container">
        <h1>ProductListPageFav</h1>
    </div>
</div>
</template>

<script>
import CatalogProductsHeader from "../page-parts/headers/CatalogProductsHeader";
import Breadcrumb from "../UI/Breadcrumb";
import NavCatalog from "../UI/NavCatalog";
export default {
    name: "ProductListPageFav",
    props: ['slug'],
    components: {
        CatalogProductsHeader, Breadcrumb, NavCatalog
    }
}
</script>

<style scoped>

</style>
