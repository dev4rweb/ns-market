<template>
<div>
    <div
        v-if="getCurrentCategory"
        :style="{backgroundImage: 'url(' + imgPath + ')'}"
        class="category bg-white  shadow-lg mb-3">
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
    </div>
    <div class="mb-3">
        <NavCatalog :slug="slug" />
    </div>
</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import NavCatalog from "../UI/NavCatalog";
import categoryImg from '../../../assets/img/category-additional.png'
import {WORK_HOST} from "../../store/routeConsts";
import ProductCard from "../UI/ProductCard";
export default {
    name: "ProductListPage",
    props: ['slug'],
    data() {
        return {
            categoryImg
        }
    },
    methods: {
        ...mapActions(['getCategoryPage', 'fetchPhysicalPerson'])
    },
    computed: {
        ...mapGetters(['getCurrentCategory', 'getCategoryProducts', 'getPhysicalPerson']),
        imgPath() {
            const url = WORK_HOST.replace('/api/', '')
            if (this.getCurrentCategory.additional_image)
                return `${url}${this.getCurrentCategory.additional_image}`
            else
                return categoryImg
        },
        isPartner() {
            if (this.getPhysicalPerson) {
                switch (this.getPhysicalPerson.trade_status) {
                    case 'D':
                    case 'K':
                        return true
                    default:
                        return false
                }
            } else {
                return false
            }
        }
    },
    components: {
        ProductCard, NavCatalog
    },
    mounted() {
        this.getCategoryPage(this.slug)
        console.log('auth user', window.User)
        if (window.User) {
            this.fetchPhysicalPerson()
        }
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
</style>
