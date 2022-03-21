<template>
<div class="d-flex flex-column justify-content-center align-items-center">
    <div class="circle-color mb-5">
        <h3>C-01</h3>
        <span>женский аромат</span>
    </div>
    <img :src="icOil" alt="oil">
</div>
</template>

<script>
import icOil from '../../../../assets/img/ic-oil.png'
export default {
    name: "CategoryOil",
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
    background-color: #EBAA3C;
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
