<template>
    <div class="card mb-3 mb-3 p-3">
        <h4 class="mb-3">Парный аромат</h4>
        <div
            class="aroma-filter-wrapper"
            v-if="curProdGroup"
        >
            <div
                class="circle-color"
                :style="{backgroundColor: getCircleColor(curProdGroup.code)}"
                :key="curProdGroup.id"
                @click="chooseProductGroup(curProdGroup)"
            >
                <h5>{{ curProdGroup.code }}</h5>
                <span>{{ getSex(curProdGroup.gender) }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import {getAromaGroupColor} from "../../../store/utils/getAromaGroupColor";
import {getGender} from "../../../store/utils/getGender";

export default {
    name: "PairAromas",
    props: ['curProdGroup'],
    methods: {
        chooseProductGroup(prodGroup) {
            console.log('chooseProductGroup', prodGroup)
            if (prodGroup.code) {
                const partUrls = window.location.pathname.split('/')
                window.location.href = `/catalog-aroma/${partUrls[2]}/${partUrls[3]}/${prodGroup.code}`;
            } else {
                this.setToastError('Продукт не имеет адреса')
            }
        },
        getCircleColor(code) {
            return getAromaGroupColor(code)
        },
        getSex(gender) {
            return getGender(gender)
        }
    },
    mounted() {
        console.log('PairAromas', this.curProdGroup)
    }
}
</script>

<style lang="scss" scoped>
.card {
    max-width: 1140px;
    width: 100%;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.15);
}

h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 37px;
}

.aroma-filter-wrapper {
    display: flex;
}

.circle-color {
    width: 72px;
    height: 72px;
    padding: 15px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    //background-color: #EBAA3C;
    color: white;
    margin-right: 25px;
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;

    &.active, &:hover {
        cursor: pointer;
        -webkit-transform: scale(1.1, 1.1);
        -moz-transform: scale(1.1, 1.1);
        -ms-transform: scale(1.1, 1.1);
        -o-transform: scale(1.1, 1.1);
        transform: scale(1.1, 1.1);
    }

    h5 {
        margin-bottom: 0;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 120%;
        color: white;
        text-align: center;
        text-transform: uppercase;
    }

    span {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 10px;
        text-align: center;
    }
}
</style>
