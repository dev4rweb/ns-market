<template>
    <div class="card shadow blue-header-info-block mb-3">
        <div class="header-block p-3">
            Адрес получателя
        </div>
        <div class="body-block p-3">
            <!--            <button
                            class="btn btn-lg bth-link btn-link-blue mb-3"
                            v-if="!getEDostDelivery"
                            @click="showMyAddresses(false)"
                        >
                            Скрыть список «Мои адреса»
                        </button>
                        <button
                            v-if="!getEDostDelivery"
                            @click="showMyAddresses(true)"
                            class="btn btn-lg bth-link btn-link-blue mb-3"
                        >
                            Выбрать из списка «Мои адреса»
                        </button>-->

            <div>
                <h4>
                    {{ getCurrentDaDataAddress.country }} <br>
                    {{ getCurrentDaDataAddress.postal_code ? `${getCurrentDaDataAddress.postal_code},` : '' }}
                    {{ getCurrentDaDataAddress.region ? `${getCurrentDaDataAddress.region} обл.,` : '' }}
                    {{
                        getCurrentDaDataAddress.settlement_with_type ? `${getCurrentDaDataAddress.settlement_with_type},` : `г. ${getCurrentDaDataAddress.city}`
                    }}
                    <br>
                    {{ getCurrentDaDataAddress.street ? `ул. ${getCurrentDaDataAddress.street},` : '' }}
                    {{ getCurrentDaDataAddress.house ? `д. ${getCurrentDaDataAddress.house},` : '' }}
                    {{ getCurrentDaDataAddress.building ? `к. ${getCurrentDaDataAddress.building}, ` : '' }}
                    {{ getCurrentDaDataAddress.flat ? `кв. ${getCurrentDaDataAddress.flat}` : '' }}
                </h4>
            </div>

            <!--            <div>
                            <div class="form-group form-group-blue mb-3">
                                <label>Страна</label>
                                <input
                                    type="text"
                                    class="form-control form-control-lg w-50"
                                    v-model="getCurrentDaDataAddress.country"
                                    placeholder="напр., Россия"
                                    disabled
                                >
                            </div>

                            <div class="form-group form-group-blue mb-3">
                                <label>Индекс</label>
                                <input
                                    type="text"
                                    class="form-control form-control-lg w-50"
                                    v-model="getCurrentDaDataAddress.postal_code"
                                    placeholder="напр., 300000"
                                >
                            </div>

                            <div class="form-group form-group-blue mb-3">
                                <label>Край, область</label>
                                <input
                                    type="text"
                                    class="form-control form-control-lg w-50"
                                    v-model="getCurrentDaDataAddress.region"
                                    placeholder="напр., Тульская обл."
                                    disabled
                                >
                            </div>

                            <div class="form-group form-group-blue mb-3">
                                <label>Населённый пункт</label>
                                <input
                                    v-if="getCurrentDaDataAddress.settlement_with_type"
                                    type="text"
                                    class="form-control form-control-lg w-50"
                                    v-model="getCurrentDaDataAddress.settlement_with_type"
                                    placeholder="напр., г. Тула"
                                >
                                <input
                                    v-else
                                    type="text"
                                    class="form-control form-control-lg w-50"
                                    v-model="getCurrentDaDataAddress.city"
                                    placeholder="напр., г. Тула"
                                >
                            </div>

                            <div class="form-group form-group-blue mb-3">
                                <label>Улица</label>
                                <input
                                    type="text"
                                    class="form-control form-control-lg w-50"
                                    v-model="getCurrentDaDataAddress.street"
                                    placeholder="напр., ул. Ленина"
                                >
                            </div>

                            <div class="d-flex justify-content-between w-50">
                                <div class="form-group form-group-blue mb-3">
                                    <label>Дом</label>
                                    <input
                                        type="text"
                                        class="form-control form-control-lg"
                                        v-model="getCurrentDaDataAddress.house"
                                        placeholder="напр., д. 18"
                                    >
                                </div>

                                <div class="form-group form-group-blue mb-3 ms-3 me-3">
                                    <label>Корпус</label>
                                    <input
                                        type="text"
                                        class="form-control form-control-lg"
                                        v-model="getCurrentDaDataAddress.building"
                                        placeholder="напр., к. 3"
                                    >
                                </div>

                                <div class="form-group form-group-blue mb-3">
                                    <label>Строение</label>
                                    <input
                                        type="text"
                                        class="form-control form-control-lg"
                                        v-model="buildingType"
                                        placeholder="напр., с. 1"
                                    >
                                </div>
                            </div>

                            <div class="d-flex justify-content-between w-50">
                                <div class="form-group form-group-blue mb-3 me-3">
                                    <label>Квартира</label>
                                    <input
                                        type="text"
                                        class="form-control form-control-lg"
                                        v-model="getCurrentDaDataAddress.flat"
                                        placeholder="напр., 33"
                                    >
                                </div>

                                <div class="form-group form-group-blue mb-3">
                                    <label>Офис</label>
                                    <input
                                        type="text"
                                        class="form-control form-control-lg"
                                        v-model="office"
                                        placeholder="напр., 300"
                                    >
                                </div>
                            </div>
                        </div>-->

        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
    name: "RecipientAddress",
    data() {
        return {
            country: '',
            postcode: '',
            region: '',
            city: '',
            street: '',
            house: '',
            building: '', // корпус
            buildingType: '', // строение
            flat: '',
            office: '',
        }
    },
    methods: {
        ...mapMutations(['setIsShowMyAddresses']),
        showMyAddresses(isShow) {
            this.setIsShowMyAddresses(isShow)
        }
    },
    computed: {
        ...mapGetters(['getEDostDelivery',
            'getCurrentDaDataAddress'])
    },
}
</script>

<style lang="scss" scoped>
.btn-link-blue {
    padding-left: 0;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 22px;
    color: #038ED7;
}

.form-group-blue {
    label {
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 22px;
        color: #333333;
    }
}
</style>
