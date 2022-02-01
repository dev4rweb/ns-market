<template>
    <div class="container">
        <div class="row mb-5">
            <div
                class="card data-card category-card"
                v-if="getCatalogGroups"
                v-for="category in getCatalogGroups"
            >
                <img
                    v-if="category.image"
                    class="catalog-img"
                    :src="imagePath(category.image)"
                    alt="category"
                >
                <img
                    v-else
                    class="catalog-img"
                    :src="categoryImage"
                    alt=""
                >

                <div class="catalog-info">
                    <h3
                        class="title"
                        v-if="category.name"
                    >
                        {{category.name}}
                    </h3>
                    <h3
                        class="title"
                        v-else
                    >
                        мастер доктор
                    </h3>


                    <h5
                        class="sub-title"
                        v-if="category.short_description"
                    >
                        {{category.short_description}}
                    </h5>

                    <p
                        class="content"
                        v-if="category.full_description"
                    >
                        {{category.full_description}}
                    </p>

                    <div class="btn-wrapper">
                        <a href="#" class="btn btn-lg btn-info">В каталог</a>
                        <a href="#" class="btn btn-lg btn-link">Преимущества<span class="arrow"></span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import categoryImage from '../../../assets/img/category-group.png'
import {WORK_HOST} from "../../store/routeConsts";

export default {
    name: "CatalogPage",
    data() {
        return {
            categoryImage
        }
    },
    methods: {
        ...mapActions(['fetchCatalogGroups']),
        imagePath(path) {
            const url = WORK_HOST.replace('/api', '')
            return `${url}${path}`
        }
    },
    computed: {
        ...mapGetters(['getCatalogGroups']),
    },
    mounted() {
        this.fetchCatalogGroups()
    }
}
</script>

<style lang="scss" scoped>
.category-card {
    width: 100%;
    max-width: 944px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 20px auto;
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;

    &:hover {
        cursor: pointer;
        -webkit-transform: scale(1.1, 1.1);
        -moz-transform: scale(1.1, 1.1);
        -ms-transform: scale(1.1, 1.1);
        -o-transform: scale(1.1, 1.1);
        transform: scale(1.1, 1.1);
    }

    .catalog-img {
        width: 100%;
        max-width: 360px;
        box-shadow: 0 0 17px -4px #767676;
    }

    .catalog-info {
        width: 100%;
        max-width: 460px;

        .title {
            font-style: normal;
            font-weight: bold;
            font-size: 40px;
            line-height: 49px;
            display: flex;
            align-items: center;
            text-transform: uppercase;
            color: #333333;
        }
        .sub-title {
            font-style: normal;
            font-weight: 600;
            font-size: 26px;
            line-height: 120%;
            color: #999999;
        }
        .content{
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 20px;
            color: #333333;
        }

        .btn-wrapper{
            width: 100%;
            display: flex;
            align-items: center;
            margin-top: 30px;

            .btn {
                font-style: normal;
                font-weight: 600;
                font-size: 18px;
                line-height: 22px;
            }

            .btn-info {
                width: 165px;
                margin-right: 30px;
            }

            .btn-link{
                text-decoration: none;
                color: #333333;
                display: flex;
                align-items: center;
            }

            .arrow {
                color: #999999;
                font-size: 20px;
                margin: 0px 6px;
                width: 12px;
                height: 12px;
                display: flex;
                border-bottom: 3px solid #999999;
                border-right: 3px solid #999999;
                -webkit-transform: rotate(-45deg);
                -moz-transform: rotate(-45deg);
                -ms-transform: rotate(-45deg);
                -o-transform: rotate(-45deg);
                transform: rotate(-45deg);
            }
        }
    }
}
</style>
