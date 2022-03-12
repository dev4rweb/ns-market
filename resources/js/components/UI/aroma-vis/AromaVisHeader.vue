<template>
    <div class="aroma-vis-header p-3">
        <div
            v-if="cardsInfo"
            v-for="card in cardsInfo"
            class="aroma-header-card"
        >
            <img :src="card.pict" alt="aroma" class="mb-3" style="max-width: 165px;">
            <p>{{ card.name }} <b>{{ card.volume }} <br> {{ card.price }}</b></p>
        </div>
    </div>
</template>

<script>
import first from '../../../../assets/img/aroma-header/first-alt.png'
import second from '../../../../assets/img/aroma-header/second-alt.png'
import third from '../../../../assets/img/aroma-header/third-alt.png'
import fourth from '../../../../assets/img/aroma-header/fourth-alt.png'

export default {
    name: "AromaVisHeader",
    data() {
        return {
            cardsInfo: [
                {id: 1, pict: first, name: 'флакон спрей', volume: '50 мл.', price: '2500р'},
                {id: 2, pict: second, name: 'флакон спрей', volume: '11 мл.', price: '1000р'},
                {id: 3, pict: third, name: 'парфюмерное масло флакон роллер', volume: '7 мл.', price: '950р'},
                {id: 4, pict: fourth, name: 'духи пробник флакон спрей', volume: '3 мл.', price: '250р'},
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.aroma-vis-header {
    width: 100%;
    max-width: 750px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255, 255, 255, .8);

    .aroma-header-card{
        max-width: 165px;
        height: 239px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        p{
            font-style: italic;
            margin-bottom: 0;
            text-align: center;
        }
    }
}
</style>
