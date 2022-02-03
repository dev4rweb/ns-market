<template>
    <div
        v-if="product"
        class="product-card"
    >
        <div>
            <div class="image-wrapper">
                            <img :src="imagePath" alt="product">
<!--                <img :src="productImg" alt="product">-->
            </div>
            <div class="content">
                <h3>{{ product.print_name }}</h3>
                <p>{{ description }}</p>
            </div>
            <div v-if="isPartner" class="price-block">
                <span
                    v-if="product.price_for_partners"
                    class="price">
                    {{ product.price_for_partners }} Р
                </span>
                <div class="price-info">
                    <div class="price-info-line"
                         v-if="product.price_retail"
                    >
                        <span class="name">Базовая цена:</span>
                        <span
                            class="name"
                        >
                            <b>{{ product.price_retail }} Р</b>
                        </span>
                    </div>
                    <div
                        v-if="product.points"
                        class="price-info-line">
                        <span class="name">Баллы:</span>
                        <span class="name"><b>{{ product.points }}</b></span>
                    </div>
                </div>
            </div>
            <div v-else class="price-block">
                <span
                    v-if="product.price_retail"
                    class="price">
                    {{ product.price_retail }} Р
                </span>
                <div class="price-info">
                    <div class="price-info-line"
                         v-if="product.points">
                        <span class="name">Баллы:</span>
                        <span
                            class="name"
                        >
                            <b>{{ product.points }}</b>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="btn-wrapper mt-3"
             v-if="product.is_sell_through_site_status_id && !isProfessionalStatus"
        >
            <span class="prof-status">Только для проф косметологов</span>
            <button type="button" class="btn btn-lg btn-outline-secondary">Подробнее</button>
        </div>
        <div v-else class="btn-wrapper mt-3">
            <input
                v-if="product.price_for_partners || product.price_retail"
                type="number"
                class="form-control"
                v-model="amount"
                min="0"
            >
            <button
                v-if="product.price_for_partners || product.price_retail"
                type="button"
                class="btn btn-lg"
                :class="[amount > 0 ? 'btn-success': 'btn-info']"
                @click="amount++"
            >
                {{ amount > 0 ? 'добавлено' : 'в корзину' }}
            </button>
            <button type="button" class="btn btn-lg btn-outline-secondary">Подробнее</button>
        </div>
    </div>
</template>

<script>
import {WORK_HOST} from "../../store/routeConsts";
import productImg from '../../../assets/img/placeholder_300x228.png'

export default {
    name: "ProductCard",
    props: ['product', 'isPartner', 'isProfessionalStatus'],
    data() {
        return {
            productImg,
            amount: 0
        }
    },
    computed: {
        imagePath() {
            const url = WORK_HOST.replace('/api/', '')
            // console.log('imagePath', this.product.image)
            if (this.product.image)
                return `${url}${this.product.image}`
            else
                return productImg
        },
        description() {
            if (this.product.short_description)
                return `${this.product.short_description.slice(0, 100)}...`
            else return ``
        }
    }
}
</script>

<style lang="scss" scoped>
.product-card {
    background: #FFFFFF;
    box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    padding: 14px 20px 42px;
    width: 360px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

    .image-wrapper {
        display: flex;
        justify-content: center;

        img {
            width: 100%;
        }
    }

    .content {
        max-width: 320px;

        h3 {
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 23px;
            color: #333333;
        }

        p {
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 21px;
            color: #333333;
        }
    }

    .price-block {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .price {
            width: 100%;
            max-width: 150px;
            font-style: normal;
            font-weight: bold;
            font-size: 35px;
            line-height: 43px;
            color: #038ED7;
        }

        .price-info {
            width: 100%;
            max-width: 155px;

            .price-info-line {
                width: 100%;
                display: flex;
                justify-content: space-between;

                .name {
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 17px;
                    color: #333333;
                }
            }
        }
    }

    .btn-wrapper {
        display: flex;
        justify-content: space-between;

        .prof-status{
            font-size: 16px;
            color: red;
            font-weight: bold;
        }

        .form-control {
            height: 40px;
            width: 60px;
        }

        .btn-lg {
            height: 40px;
            //width: 150px;
            font-style: normal;
        }

        .btn-info, .btn-success {
            font-weight: bold;
            font-size: 18px;
            line-height: 120%;
            text-transform: uppercase;
        }

        .btn-outline-secondary {
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 18px;
        }
    }
}
</style>
