<template>
    <div class="bg-white shadow-lg mb-3 pt-3 pb-2">
        <div class="container">
            <nav
                style="--bs-breadcrumb-divider: '/';"
                aria-label="breadcrumb"
            >
                <ol class="breadcrumb bg-white">
                    <li class="breadcrumb-item">
                        <a href="/">Главная</a>
                    </li>
                    <li
                        class="breadcrumb-item"
                        v-if="paths"
                        v-for="(path, i) in paths"
                        :key="i"
                    >
                        <a
                            :href="getPath(path, i)"
                        >
                            {{ rusName(path, i) }}
                        </a>
                    </li>
                    <!--                    <li class="breadcrumb-item active" aria-current="page">Data</li>-->
                </ol>
            </nav>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: "Breadcrumb",
    methods: {
        rusName(path, i) {
            console.log('rusName', path, i)
            let name = path
            switch (i) {
                case 0:
                    switch (path) {
                        case 'catalog':
                            return 'Каталог'
                    }
                    break
                case 1:
                    /*switch (path) {
                        case 'products-list':
                            return 'Список'
                        case 'programs':
                            return 'Программы'
                        case 'products':
                            return 'Продукты'
                    }*/
                    if (this.getCurrentCategory)
                        return this.getCurrentCategory.name
                    break
                /*case 2:
                    if (this.getCurrentCategory)
                        return this.getCurrentCategory.name*/
            }
            return name
        },
        getPath(path, i) {
            // console.log('this.getCurrentCategory', this.getCurrentCategory)
            let pathUrl = '/'
            switch (i) {
                case 0:
                    return '/catalog'
                case 1:
                    if (this.getCurrentCategory) {
                        switch (path) {
                            case 'products-list':
                                return `/catalog/products-list/${this.getCurrentCategory.slug}`
                            case 'programs':
                                return `/catalog/programs/${this.getCurrentCategory.slug}`
                            case 'products':
                                return `/catalog/products/${this.getCurrentCategory.slug}`
                        }
                        break
                    }
            }
            return pathUrl
        }
    },
    computed: {
        ...mapGetters(['getCurrentCategory']),
        paths() {
            const partUrls = window.location.pathname.split('/')
            const removeFirst = partUrls.shift()
            const removeLast = partUrls.pop()
            const removeLastElse = partUrls.pop()
            // console.log('partUrls', partUrls)
            return partUrls
        }
    }
}
</script>

<style lang="scss" scoped>
.breadcrumb-item a {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    color: #999999;
    text-decoration: none;
}

.breadcrumb-item.active a {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #333333;
}
</style>
