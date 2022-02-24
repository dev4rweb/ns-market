<template>
    <div class="card shadow blue-header-info-block mb-3">
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
                    v-model="last_name"
                    placeholder="напр., Иванов"
                >
            </div>

            <div class="form-group form-group-blue mb-3">
                <label>Имя <span>*</span></label>
                <input
                    type="text"
                    class="form-control form-control-lg w-50"
                    v-model="first_name"
                    placeholder="напр., Иван"
                >
            </div>

            <div class="form-group form-group-blue mb-3">
                <label>Отчество</label>
                <input
                    type="text"
                    class="form-control form-control-lg w-50"
                    v-model="middle_name"
                    placeholder="напр., Иванович"
                >
            </div>

            <div class="form-group form-group-blue mb-3">
                <label>Мобильный телефон <span>*</span></label>
                <input
                    type="text"
                    class="form-control form-control-lg w-50"
                    v-model="phone"
                    placeholder="+7 (___) ___ - __ - __"
                >
            </div>

            <div class="form-group form-group-blue mb-3">
                <label>E-mail получателя</label>
                <input
                    type="text"
                    class="form-control form-control-lg w-50"
                    v-model="email"
                    placeholder="example@yourmail.com"
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "RecipientInfo",
    data() {
        return {
            last_name: '',
            first_name: '',
            middle_name: '',
            phone: '',
            email: '',
        }
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
