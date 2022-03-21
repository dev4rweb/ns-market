<template>
    <div class="mb-5">
        <h4  class="mb-3">Быстрый просмотр по фильтру:</h4>
        <div
            class="aroma-filter-wrapper"
            v-if="filterGroups.length"
        >
            <div
                v-for="item in filterGroups"
                class="circle-color"
                :style="{backgroundColor: getCircleColor(item.code)}"
                :key="item.id"
                :class="{active: item.is_active}"
            >
                <h5>{{item.code}}</h5>
                <span>{{item.aroma}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import {getAromaGroupColor} from "../../../../store/utils/getAromaGroupColor";
export default {
    name: "QuickFilter",
    data() {
        return {
            filterGroups : [
                {id: 1, code: 'C-01', aroma: 'женский аромат', is_active: true},
                {id: 2, code: 'D-03', aroma: 'унисекс', is_active: false},
                {id: 3, code: 'D-44', aroma: 'мужской аромат', is_active: false},
                {id: 4, code: 'K-10', aroma: 'женский аромат', is_active: false},
                {id: 5, code: 'M-06', aroma: 'женский аромат', is_active: false},
            ]
        }
    },
    methods: {
        getCircleColor(code) {
            return  getAromaGroupColor(code)
        }
    }
}
</script>

<style lang="scss" scoped>
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
