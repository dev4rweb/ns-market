<template>
    <div class="card shadow blue-header-info-block mb-3">
        <div class="header-block p-3">
            Адрес получателя
        </div>
        <div class="body-block p-3">
            <button class="btn btn-lg bth-link btn-link-blue mb-3">
                Выбрать из списка «Мои адреса»
            </button>
            <div class="form-group form-group-blue mb-3">
                <label>Страна</label>
                <input
                    type="text"
                    class="form-control form-control-lg w-50"
                    v-model="country"
                    placeholder="напр., Россия"
                >
            </div>

            <div class="form-group form-group-blue mb-3">
                <label>Индекс</label>
                <input
                    type="text"
                    class="form-control form-control-lg w-50"
                    v-model="postcode"
                    placeholder="напр., 300000"
                >
            </div>

            <div class="form-group form-group-blue mb-3">
                <label>Край, область</label>
                <input
                    type="text"
                    class="form-control form-control-lg w-50"
                    v-model="region"
                    placeholder="напр., Тульская обл."
                >
            </div>

            <div class="form-group form-group-blue mb-3">
                <label>Населённый пункт</label>
                <input
                    type="text"
                    class="form-control form-control-lg w-50"
                    v-model="city"
                    placeholder="напр., г. Тула"
                >
            </div>

            <div class="form-group form-group-blue mb-3">
                <label>Улица</label>
                <input
                    type="text"
                    class="form-control form-control-lg w-50"
                    v-model="street"
                    placeholder="напр., ул. Ленина"
                >
            </div>

            <div class="d-flex justify-content-between w-50">
                <div class="form-group form-group-blue mb-3">
                    <label>Дом</label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        v-model="house"
                        placeholder="напр., д. 18"
                    >
                </div>

                <div class="form-group form-group-blue mb-3 ms-3 me-3">
                    <label>Корпус</label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        v-model="building"
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
                        v-model="flat"
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
        </div>
    </div>
</template>

<script>
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
            office: ''
        }
    }
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
