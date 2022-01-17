<template>
    <div class="row">
        <div class="card data-card">
            <h3>Профессиональная деятельность</h3>
            <p>Выберите подходящий вариант из списка и загрузите диплом, сертификат или другой документ,
                подтверждающий вашу специализацию.</p>
            <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" name="flexRadioDefault" >
                <label class="form-check-label">
                    Косметолог
                </label>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <button
                        class="btn btn-outline-info"
                        @click="toggleStatus"
                    >
<!--                        Загрузить паспорт-->
                        Сменить статус
                    </button>
                    <button class="btn btn-outline-info">Загрузить сертификат</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: "UserStatusPanel",
    methods: {
        ...mapActions(['toggleStatus'])
    }
}
</script>

<style scoped>
h3{
    text-transform: uppercase;
    color: #333333;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
}
</style>
