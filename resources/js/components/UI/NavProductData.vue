<template>
    <ul class="nav nav-pills nav-fill">
        <li class="nav-item">
            <a
                class="btn btn-outline-info"
                :class="{active: !pathUrl.includes('reviews') && !pathUrl.includes('kits')}"
                :href="mainUrl(0)"
            >
                Подробное описание
            </a>
        </li>
        <li class="nav-item">
            <a
                class="btn btn-outline-info"
                :class="{active: pathUrl.includes('reviews')}"
                :href="mainUrl(1)"
            >
                Отзывы
            </a>
        </li>
        <li class="nav-item">
            <a
                class="btn btn-outline-info"
                :class="{active: pathUrl.includes('kits')}"
                :href="mainUrl(2)"
            >
                {{ getProductDetail.is_program ? 'Состав программы' : 'Состав продукта' }}
            </a>
        </li>
    </ul>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: "NavProductData",
    methods: {
        mainUrl(val) {
            let path = window.location.href
                .replace('/reviews', '')
                .replace('/kits', '')
            switch (val) {
                case 0:
                    return path
                case 1:
                    return path + '/reviews'
                case 2:
                    return path + '/kits'
            }
        }
    },
    computed: {
        ...mapGetters(['getProductDetail']),
        pathUrl() {
            return window.location.href
        },
    }
}
</script>

<style scoped>
.btn-outline-info {
    width: 100%;
}
</style>
