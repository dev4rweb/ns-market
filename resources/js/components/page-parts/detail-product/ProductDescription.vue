<template>
    <div class="card shadow-lg mb-5 p-5">
        <div v-if="getProductDetail && getProductDetail.product_description_blocks">
            <div
                v-if="getProductDetail.product_description_blocks.length"
                v-for="item in getProductDetail.product_description_blocks"
                :key="item.id"
                class="mb-3"
            >
                <h4 v-if="item.title">
                    {{item.title}}
                </h4>
                <div
                    v-if="item.top_picture"
                    class="d-flex justify-content-center"
                >
                    <img
                        :src="imgPath(item.top_picture)"
                        alt="product"
                    >
                </div>
                <div class="d-flex flex-row align-items-center">
                    <img
                        v-if="item.left_picture"
                        :src="imgPath(item.left_picture)"
                        class="me-3"
                        alt="product"
                    >
                    <div
                        v-if="item.description"
                        v-html="item.description"
                    ></div>
                </div>
                <div
                    v-if="item.bottom_picture"
                    class="d-flex justify-content-center"
                >
                    <img
                        :src="imgPath(item.bottom_picture)"
                        alt="product"
                    >
                </div>
            </div>
        </div>
        <div v-else>
            <h1>Этот блок не имеет информации</h1>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {WORK_HOST} from "../../../store/routeConsts";
export default {
    name: "ProductDescription",
    methods: {
        imgPath(imgPath) {
            const url = WORK_HOST.replace('/api/', '')
            if (imgPath) {
                return `${url}/uploads/${imgPath}`
            }
        }
    },
    computed: {
        ...mapGetters(['getProductDetail'])
    }
}
</script>

<style lang="scss" scoped>
    h4{
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 120%;
        text-transform: uppercase;
        color: #333333;
        margin-bottom: 0;
    }
/*
    .content {
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 20px;
        color: #333333;
    }*/
</style>
