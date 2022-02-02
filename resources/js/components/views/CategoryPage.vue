<template>
    <div>
        <div
            v-if="getCurrentCategory"
            :style="{backgroundImage: 'url(' + imgPath + ')'}"
            class="category bg-white shadow-lg mb-5">
            <div class="container info-side">
                <p>{{ getCurrentCategory.short_description }}</p>
                <h1>{{ getCurrentCategory.name }}</h1>
                <div>
                    <button
                        type="button"
                        class="btn btn-lg btn-secondary"
                    >
                        Презентации
                    </button>
                </div>
            </div>
<!--            <img
                :src="imgPath"
                alt="bg">-->
        </div>
        <div class="container products-container">
            <ProductCard
                v-if="getCategoryProducts"
                v-for="product in getCategoryProducts"
                :product="product"
                :key="product.id"
            />
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import ProductCard from "../UI/ProductCard";
import categoryImg from '../../../assets/img/category-additional.png'
import {WORK_HOST} from "../../store/routeConsts";

export default {
    name: "CategoryPage",
    props: ['slug'],
    data() {
        return {
            categoryImg
        }
    },
    methods: {
        ...mapActions(['getCategoryPage'])
    },
    computed: {
        ...mapGetters(['getCurrentCategory', 'getCategoryProducts']),
        imgPath() {
            const url = WORK_HOST.replace('/api/', '')
            if (this.getCurrentCategory.additional_image)
                return `${url}${this.getCurrentCategory.additional_image}`
            else
                return categoryImg
        }
    },
    components: {
        ProductCard
    },
    mounted() {
        this.getCategoryPage(this.slug)
    }
}
</script>

<style lang="scss" scoped>
.category {
    height: 300px;
    display: flex;
    justify-content: flex-start;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-size: cover;

    .info-side {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;

        p {
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 20px;
            color: #B87D63;
        }

        h1 {
            font-style: normal;
            font-weight: bold;
            font-size: 60px;
            line-height: 73px;
            color: #B87D63;
        }

        .btn-secondary {
            background: #B87D63;
            border-radius: 8px;
        }
    }

    img {
        width: 100%;
        max-width: 600px;
        height: auto;
    }
}

.products-container {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 30px;
    justify-content: center;
    @media screen and (max-width: 1200px) {
        grid-template-columns: auto auto;
    }
    @media screen and (max-width: 480px) {
        grid-template-columns: auto;
    }
}
</style>
