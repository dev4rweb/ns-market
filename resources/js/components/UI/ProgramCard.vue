<template>
    <div
        v-if="product"
        class="program-card"
    >
        <div>
            <div class="image-wrapper">
                <img :src="imagePath" alt="product">
<!--                                <img :src="productImg" alt="product">-->
            </div>
            <h3>{{ product.print_name }}</h3>
        </div>
        <div class="btn-wrapper mt-3">
            <button
                class="btn btn-lg btn-outline-info"
            >
                Подробнее
            </button>
        </div>
    </div>
</template>

<script>
import productImg from "../../../assets/img/placeholder_300x228.png";
import {WORK_HOST} from "../../store/routeConsts";

export default {
    name: "ProgramCard",
    props: ['product'],
    data() {
        return {
            productImg,
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
    }
}
</script>

<style lang="scss" scoped>
.program-card {
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

    h3 {
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 23px;
        color: #333333;
    }

    .btn-wrapper{
        display: flex;
        justify-content: center;

        .btn-lg {
            height: 40px;
            //width: 150px;
            font-style: normal;
        }

        .btn-outline-info {
            font-weight: bold;
            font-size: 18px;
            line-height: 120%;
            text-transform: uppercase;
        }
    }
}
</style>
