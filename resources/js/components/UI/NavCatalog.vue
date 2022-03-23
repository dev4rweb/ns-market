<template>
    <div class="container">
        <ul class="nav nav-pills nav-fill">
            <li class="nav-item">
                <button
                    class="btn btn-lg btn-outline-info"
                    :class="{active: isActive('/products/') && !slug.includes('DetailAroma')}"
                    @click="moveToPage('/products/')"
                >
                    {{slug.includes('AromaVis') || slug.includes('DetailAroma') ? 'Подбор' : 'Продукты'}}
                </button>
            </li>
            <li
                class="nav-item"
                v-if="!slug.includes('AromaVis') && !slug.includes('DetailAroma')"
            >
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
                    {{slug.includes('AromaVis') || slug.includes('DetailAroma') ? 'Таблица' : 'Список'}}
                </button>
            </li>
            <li
                class="nav-item"
                v-if="slug.includes('AromaVis')  || slug.includes('DetailAroma')"
            >
                <button
                    class="btn btn-lg btn-outline-info"
                    :class="{active: isActive('/products-list-favorite/')}"
                    @click="moveToPage('/products-list-favorite/')"
                >
                    Избранное
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
            if (!this.isActive(partUrl) && !this.slug.includes('DetailAroma'))
                window.location.href = `/catalog${partUrl}${this.slug}`

            if (this.slug.includes('DetailAroma'))
                window.location.href = `/catalog${partUrl}AromaVis`
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
