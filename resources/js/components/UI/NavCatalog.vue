<template>
    <div class="container">
        <ul class="nav nav-pills nav-fill">
            <li class="nav-item">
                <button
                    class="btn btn-lg btn-outline-info"
                    :class="{active: isActive('/products/')}"
                    @click="moveToPage('/products/')"
                >
                    Продукты
                </button>
            </li>
            <li class="nav-item">
                <button
                    class="btn btn-lg btn-outline-info"
                    :class="{active: isActive('/programs/')}"
                    @click="moveToPage('/programs/')"
                >
                    Программы
                </button>
            </li>
            <li class="nav-item">
                <button
                    class="btn btn-lg btn-outline-info"
                    :class="{active: isActive('/products-list/')}"
                    @click="moveToPage('/products-list/')"
                >
                    Список
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "NavCatalog",
    props: ['slug'],
    methods: {
        isActive(partUrl) {
            return window.location.href.includes(partUrl);
        },
        moveToPage(partUrl) {
            console.log('moveToPage', partUrl)
            if (!this.isActive(partUrl))
                window.location.href = `/catalog${partUrl}${this.slug}`
        }
    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
    .btn-lg {
        width: 100%;
    }
</style>
