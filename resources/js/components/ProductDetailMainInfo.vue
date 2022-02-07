<template>
    <div class="container card d-flex flex-row shadow-lg mb-3 p-1">
        <div class="position-relative img-wrapper p-3">
            <img
                :src="imgPath"
                alt="main photo"
                class="img-photo"
            >
            <span class="min-age"
                  :class="[getProductDetail.start_age > 9 ? 'smallFont':'']"
            >
                    {{ getProductDetail.start_age }}+
            </span>
        </div>
        <div class="content p-3 d-flex flex-column justify-content-between w-100">
            <p class="article">
                Артикул: {{ getProductDetail.vendor_code }}
            </p>
            <p class="description">
                {{ getProductDetail.short_description }}
            </p>
            <div class="price-block">
                <div
                    class="left-side"
                    v-if="isPartner"
                >
                    <p>Цена для вас:</p>
                    <span v-if="getProductDetail.price_for_partners">
                        {{ getProductDetail.price_for_partners }} P
                    </span>
                </div>
                <div
                    class="left-side"
                    v-else
                >
                    <p>Цена для вас:</p>
                    <span v-if="getProductDetail.price_retail">
                        {{ getProductDetail.price_retail }} P
                    </span>
                </div>
                <div class="divider"></div>
                <div class="center-side">
                    <div v-if="isPartner">
                        <span>Базовая цена:</span>
                        <span>{{ getProductDetail.price_retail }} P</span>
                    </div>
                    <div v-if="isPartner">
                        <span>Ваша скидка:</span>
                        <span>{{ getProductDetail.price_retail - getProductDetail.price_for_partners }} P</span>
                    </div>
                    <div>
                        <span>Баллы:</span>
                        <span>{{ getProductDetail.points }} PV</span>
                    </div>
                </div>
                <div class="divider"></div>
                <div
                    class="right-side align-items-center"
                    v-if="getProductDetail.is_sell_through_site_status_id && !isProfessionalStatus"
                >
                    <img :src="icLock" width="30px" class="me-2" alt="lock">
                    <span class="prof-status">Доступно только для профессиональных косметологов</span>
                </div>
                <div
                    class="right-side"
                    v-else
                >
                    <div
                        class="me-2"
                        v-if="getProductDetail.price_for_partners || getProductDetail.price_retail"
                    >
                        <input
                            type="number"
                            class="form-control-lg"
                            v-model="amount"
                            min="0"
                        >
                    </div>
                    <button
                        class="btn btn-lg"
                        type="button"
                        :class="[amount > 0 ? 'btn-success': 'btn-info']"
                        @click="amount++"
                    >
                        {{ amount > 0 ? 'добавлено' : 'в корзину' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {WORK_HOST} from "../store/routeConsts";
import noPhoto from "../../assets/img/placeholder_300x228.png";
import icLock from '../../assets/img/ic-lock.svg'

export default {
    name: "ProductDetailMainInfo",
    data() {
        return {
            amount: 0,
            noPhoto,
            icLock
        }
    },
    methods: {
        ...mapActions(['getProductDetailData'])
    },
    computed: {
        ...mapGetters(['getProductDetail', 'isProfessionalStatus', 'isPartner']),
        imgPath() {
            const url = WORK_HOST.replace('/api/', '')
            if (this.getProductDetail.preview_image) {
                return `${url}${this.getProductDetail.preview_image}`
            } else return noPhoto
        }
    },
}
</script>

<style lang="scss" scoped>

.img-wrapper {
    border: 1px solid #DEE5EB;
    border-radius: 8px;

    .min-age {
        position: absolute;
        right: 10px;
        top: 10px;
        width: 70px;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid rgba(3, 142, 215, 0.7);
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 20px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        color: rgba(3, 142, 215, 0.7);
    }

    .smallFont{
        font-size: 30px;
    }

    .img-photo {
        width: 500px;
    }
}

.content {
    .article {
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 120%;
        color: #77818B;
        margin-bottom: 25px;
    }

    .description {
        border-left: 6px solid #038ed7;
        padding-left: 14px;
        font-style: normal;
        font-weight: normal;
        font-size: 25px;
        line-height: 26px;
        color: #333333;
        margin-bottom: 20px;

    }

    .divider {
        height: 80%;
        min-height: 84px;
        width: 1px;
        background-color: #CDDAE5;
    }

    .price-block {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left-side {
            p {
                font-style: normal;
                font-weight: 600;
                font-size: 21px;
                line-height: 120%;
                color: #038ED7;
                margin-bottom: 0;
            }

            span {
                font-style: normal;
                font-weight: bold;
                font-size: 40px;
                line-height: 49px;
                color: #038ED7;
            }
        }

        .center-side {
            width: 210px;

            div {
                display: flex;
                width: 100%;
                justify-content: space-between;

                span {
                    font-style: normal;
                    font-weight: normal;
                    font-size: 20px;
                    line-height: 120%;
                    color: #383A3F;
                }

                &:nth-of-type(2) {
                    margin-top: 7px;
                    margin-bottom: 7px;

                    span {
                        color: #038ED7;
                    }
                }

            }
        }

        .right-side {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;

            .form-control-lg {
                width: 90px;
            }
        }
    }


}

.prof-status {
    font-size: 16px;
    max-width: 160px;
    color: red;
    font-weight: bold;
}

</style>
