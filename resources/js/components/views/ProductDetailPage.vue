<template>
    <div
        class="detail-product"
        v-if="getProductDetail"
    >
        <Breadcrumb />
        <div class="container d-flex align-items-center mb-3">
            <BackBtn />
            <h1>{{getProductDetail.print_name}}</h1>
        </div>
        <div class="container card d-flex flex-row shadow-lg mb-5 p-1">
            <div class="position-relative img-wrapper p-3">
                <img
                    :src="imgPath"
                    alt="main photo"
                    class="img-photo"
                >
                <span class="min-age">
                    {{getProductDetail.start_age}}+
                </span>
            </div>
            <div class="content p-3">
                <p class="article">
                    Артикул: {{getProductDetail.vendor_code}}
                </p>
                <p class="description">
                    {{getProductDetail.short_description}}
                </p>
                <div class="price-block">
                    <div class="left-side">
                        <p>Цена для вас:</p>
                        <span>
                            {{getProductDetail.price_for_partners}} P
                        </span>
                    </div>
                    <div class="divider"></div>
                    <div class="center-side">
                        <div>
                            <span>Базовая цена:</span>
                            <span>{{getProductDetail.price_retail}} P</span>
                        </div>
                        <div>
                            <span>Ваша скидка:</span>
                            <span>{{getProductDetail.price_retail - getProductDetail.price_for_partners}} P</span>
                        </div>
                        <div>
                            <span>Баллы:</span>
                            <span>{{getProductDetail.points}} PV</span>
                        </div>
                    </div>
                    <div class="divider"></div>
                    <div class="right-side">
                        <div class="me-2">
                            <input
                                type="number"
                                class="form-control-lg"
                                v-model="amount"
                                min="0"
                            >
                        </div>
                        <button
                            class="btn btn-lg btn-info"
                        >
                            В корзину
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Breadcrumb from "../UI/Breadcrumb";
import BackBtn from "../UI/BackBtn";
import noPhoto from '../../../assets/img/placeholder_300x228.png'
import {WORK_HOST} from "../../store/routeConsts";
export default {
    name: "ProductDetailPage",
    props: ['slug'],
    data() {
        return {
            amount: 0
        }
    },
    methods: {
        ...mapActions(['getProductDetailData'])
    },
    computed: {
        ...mapGetters(['getProductDetail']),
        imgPath() {
            const url = WORK_HOST.replace('/api/', '')
            if (this.getProductDetail.preview_image) {
                return `${url}${this.getProductDetail.preview_image}`
            } else return noPhoto
        }
    },
    mounted() {
        this.getProductDetailData(this.slug)
    },
    components: {
        Breadcrumb, BackBtn
    }
}
</script>

<style lang="scss" scoped>
.detail-product{
    min-height: calc(100vh - 222px - 288px);
}
h1{
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 37px;
    color: #333333;
}

.img-wrapper{
    border: 1px solid #DEE5EB;
    border-radius: 8px;

    .min-age{
        position: absolute;
        right: 10px;
        top: 10px;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid rgba(3, 142, 215, 0.7);
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 20px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        color: rgba(3, 142, 215, 0.7);
    }
    .img-photo{
        width: 300px;
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

    .description{
        border-left: 6px solid #038ed7;
        padding-left: 14px;
        font-style: normal;
        font-weight: normal;
        font-size: 25px;
        line-height: 26px;
        color: #333333;
        margin-bottom: 20px;

    }

    .divider{
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

                &:nth-of-type(2){
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

</style>
