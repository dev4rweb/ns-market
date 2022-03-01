<template>
    <div
        v-if="getRecipientInfoData"
        class="card shadow blue-header-info-block mb-3"
    >
        <div class="header-block p-3">
            Информация о получателе
        </div>
        <div class="body-block p-3">
            <p>* – поля, обязательные для заполнения</p>
            <div class="form-group form-group-blue mb-3">
                <label>Фамилия <span>*</span></label>
                <input
                    type="text"
                    class="form-control form-control-lg w-50"
                    v-model="getRecipientInfoData.last_name"
                    placeholder="напр., Иванов"
                >
            </div>

            <div class="form-group form-group-blue mb-3">
                <label>Имя <span>*</span></label>
                <input
                    type="text"
                    class="form-control form-control-lg w-50"
                    v-model="getRecipientInfoData.first_name"
                    placeholder="напр., Иван"
                >
            </div>

            <div class="form-group form-group-blue mb-3">
                <label>Отчество</label>
                <input
                    type="text"
                    class="form-control form-control-lg w-50"
                    v-model="getRecipientInfoData.middle_name"
                    placeholder="напр., Иванович"
                >
            </div>

            <div class="form-group form-group-blue mb-3">
                <label>Мобильный телефон <span>*</span></label>
                <input
                    type="text"
                    class="form-control form-control-lg w-50"
                    v-model="getRecipientInfoData.phone"
                    placeholder="+7 (___) ___ - __ - __"
                >
            </div>

            <div class="form-group form-group-blue mb-3">
                <label>E-mail получателя</label>
                <input
                    type="text"
                    class="form-control form-control-lg w-50"
                    v-model="getRecipientInfoData.email"
                    placeholder="example@yourmail.com"
                >
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: "RecipientInfo",
    computed: {
        ...mapGetters(['getRecipientInfoData'])
    }
}
</script>

<style lang="scss" scoped>
p{
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 20px;
    color: #EB5757;
}
.form-group-blue {
    label {
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 22px;
        color: #333333;

        span{
            font-style: normal;
            font-weight: 600;
            font-size: 22px;
            line-height: 22px;
            color: #EB5757;
        }
    }
}
</style>
