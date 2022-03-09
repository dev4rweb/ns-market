<template>
  <div
      v-if="getBasketOrder"
      class="card shadow blue-header-info-block mb-3">
    <div class="header-block p-3">
      Общие сведения о заказе
    </div>
    <div class="body-block p-3">
      <div class="d-flex justify-content-between content-wrapper">
        <span>Тип заказа</span>
        <span class="value">{{ getPointsOrder }} PV</span>
      </div>
      <div class="d-flex justify-content-between content-wrapper">
        <span>Наполнение в баллах</span>
        <span class="value">В личный объём</span>
      </div>
      <div class="d-flex justify-content-between content-wrapper">
        <span>Масса заказа</span>
        <span class="value">{{ getWeightOrder }} кг</span>
      </div>
      <div class="d-flex justify-content-between content-wrapper">
        <span>Стоимость заказа, со скидкой</span>
        <span class="value">{{ getSumOrder }} р.</span>
      </div>
      <div class="d-flex justify-content-between content-wrapper">
        <span>Стоимость доставки </span>
        <span class="value">260 р.</span>
      </div>
      <div class="d-flex justify-content-between content-wrapper mt-3">
        <span class="value">Итого к оплате</span>
        <span class="title">{{ getEconomicSumOrder }} р.</span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "GeneralOrderInfo",
  methods: {
    ...mapActions(['fetchPhysicalPerson'])
  },
  computed: {
    ...mapGetters(['getBasketOrder', 'getPointsOrder', 'getWeightOrder',
    'getEconomicSumOrder', 'getSumOrder'])
  },
  mounted() {
    if (window.User) {
      this.fetchPhysicalPerson()
    }
  }
}
</script>

<style scoped>

</style>
