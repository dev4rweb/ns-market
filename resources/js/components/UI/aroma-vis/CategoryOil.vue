<template>
<div class="d-flex flex-column align-items-center">
    <div
        class="circle-color mb-5"
        :style="{backgroundColor: getCircleColor}"
    >
        <h3>{{curAromaGroup.code}}</h3>
        <span>{{ getSex }}</span>
    </div>
    <img
        v-if="isOilPresent"
        :src="icOil"
        alt="oil"
    >
</div>
</template>

<script>
import {getAromaGroupColor} from "../../../store/utils/getAromaGroupColor";
import {getGender} from "../../../store/utils/getGender";
import icOil from '../../../../assets/img/ic-oil.png'
export default {
    name: "CategoryOil",
    props: ['curAromaGroup', 'isOilPresent'],
    methods: {
    },
    computed: {
        getCircleColor() {
            return  getAromaGroupColor(this.curAromaGroup.code)
        },
        getSex() {
            return getGender(this.curAromaGroup.gender)
        }
    },
    data() {
        return {
            icOil
        }
    }
}
</script>

<style lang="scss" scoped>
.circle-color {
    width: 98px;
    height: 98px;
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

    h3 {
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
