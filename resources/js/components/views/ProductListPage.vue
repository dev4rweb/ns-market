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
                    Преимущества
                </button>
            </div>
        </div>
    </div>
    <div class="mb-3">
        <NavCatalog :slug="slug" />
    </div>
    <div class="container"
         v-if="getCategoryProducts">
        <table class="table table-lg table-responsive-lg table-light table-bordered border-secondary table-striped table-hover shadow-lg">
            <thead  class="table-primary">
            <tr>
                <th scope="col">#</th>
                <th style="width: 120px" scope="col">Код</th>
                <th scope="col">Наименование</th>
                <th style="width: 90px;" scope="col">Кол-во</th>
                <th scope="col">Цена</th>
                <th scope="col">Баллов</th>
            </tr>
            </thead>
            <tbody>
            <ProductListItem
                v-if="getCategoryProducts"
                v-for="(product, i) in getCategoryProducts"
                :product="product"
                :isPartner="isPartner"
                :index="i"
                :key="product.id"
                :isProfessionalStatus="isProfessionalStatus"
            />
            </tbody>
        </table>

        <div class="d-flex justify-content-center mb-5">
            <a
                href="/catalog"
                class="btn btn-lg btn-success me-3"
            >Добавить и перейти в каталог
            </a>
            <a
                href="/catalog"
                class="btn btn-lg btn-success"
            >Добавить и перейти в корзину
            </a>
        </div>
    </div>
</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import NavCatalog from "../UI/NavCatalog";
import categoryImg from '../../../assets/img/category-additional.png'
import {WORK_HOST} from "../../store/routeConsts";
import ProductListItem from "../UI/ProductListItem";
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
        ...mapGetters(['getCurrentCategory', 'getCategoryProducts',
            'getPhysicalPerson', 'isProfessionalStatus']),
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
        NavCatalog, ProductListItem
    },
    mounted() {
        const data = {
            slug: this.slug,
            page: 'productList'
        }
        this.getCategoryPage(data)
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
table {
    font-size: 20px;
}
</style>
