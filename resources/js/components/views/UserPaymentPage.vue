<template>
    <div class="card data-card mb-5">
        <h3>Платежные реквизиты</h3>
        <div class="form-group form-group-data mb-3">
            <label class="form-label">Наименование получателя платежей</label>
            <input
                type="text"
                class="form-control form-control-lg"
                v-model="getPartnerPaymentDetail.name"
            >
        </div>

        <div class="form-group form-group-data mb-3">
            <label class="form-label">ИНН</label>
            <input
                type="text"
                class="form-control form-control-lg"
                v-model="getPartnerPaymentDetail.inn"
            >
        </div>

        <div class="form-group form-group-data">
            <label>Самозанятый или Индивидуальный предприниматель</label>
            <div
                class="d-flex justify-content-between align-items-center"
                style="max-width: 250px;"
            >
                <RadioBox label="ИП" value="1" v-model="getPartnerPaymentDetail.isPP"/>
                <RadioBox label="Самозанятый" value="0" v-model="getPartnerPaymentDetail.isPP"/>
            </div>
        </div>

        <div class="form-group form-group-data mb-3">
            <label class="form-label">Номер счета</label>
            <input
                type="text"
                class="form-control form-control-lg"
                v-model="getPartnerPaymentDetail.account_number"
            >
        </div>

        <div class="form-group form-group-data mb-3">
            <label class="form-label">БИК</label>
            <div class="input-group mb-3">
                <span
                    class="input-group-text"
                >
                    <i class="bi bi-search"></i>
                </span>
                <input
                    type="number"
                    class="form-control form-control-lg"
                    v-model="getPartnerPaymentDetail.bic"
                    :class="{borderRed: isBicInvalid}"
                    @blur="searchBank"
                    @input="isBicInvalid = false"
                >
            </div>
            <div
                class="invalid-feedback"
                :class="{show: isBicInvalid}"
            >
                Для поиска введите не менее 6 и не более 10 цифр
            </div>
        </div>

        <div class="form-group form-group-data mb-3">
            <label class="form-label">Банк</label>
            <input
                type="text"
                class="form-control form-control-lg"
                v-model="getPartnerPaymentDetail.bank"
                disabled
            >
        </div>

        <div class="form-group form-group-data mb-3">
            <label class="form-label">Корреспондентский счет</label>
            <input
                type="text"
                class="form-control form-control-lg"
                v-model="getPartnerPaymentDetail.correspondent_account"
                disabled
            >
        </div>

        <div class="form-group form-group-data mb-3">
            <label class="form-label">Номер пластиковой карты</label>
            <input
                type="text"
                class="form-control form-control-lg"
                v-model="getPartnerPaymentDetail.card_number"
            >
        </div>

        <div class="d-flex justify-content-center position-relative">
            <button
                class="btn btn-lg btn-info"
                style="min-width: 180px; margin-bottom: -50px;"
                @click="savePayment"
            >
                Сохранить
            </button>
        </div>
    </div>
</template>

<script>
import RadioBox from "../UI/RadioBox";
import {mapActions, mapGetters, mapMutations} from 'vuex'

export default {
    name: "UserPaymentPage",
    data() {
        return {
            isBicInvalid: false
        }
    },
    methods: {
        ...mapActions(['fetchBankDaData', 'fetchPartnerPaymentDetailAction',
        'savePartnerPaymentDetailAction']),
        ...mapMutations(['setPartnerPaymentDetail', 'setLoading', 'setToastError']),
        savePayment() {
            // console.log('savePayment', this.getPartnerPaymentDetail)
            this.savePartnerPaymentDetailAction()
        },
        searchBank() {
            // console.log('searchBank', this.getPartnerPaymentDetail)
            const searchedBic = this.getPartnerPaymentDetail.bic.replaceAll(' ', '')
            // console.log('searchBank', searchedBic.length)
            // example = 047003608
            if (searchedBic.length > 6 && searchedBic.length < 10) {
                this.setLoading(true)
                this.fetchBankDaData(searchedBic)
                    .then(res => {
                        console.log('searchBank', res)
                        if (res.status === 200 && res.data.suggestions && res.data.suggestions.length) {
                            const suggestion = res.data.suggestions[0]
                            this.setPartnerPaymentDetail({
                                bic: suggestion.data.bic,
                                bank: suggestion.value,
                                correspondent_account: suggestion.data.correspondent_account
                            })
                        }
                    }).catch(err => {
                    console.log('searchBank err', err)
                    this.setToastError('searchBank Непредвиденная ошибка')
                }).finally(() => {
                    this.setLoading(false)
                });
            }
        }
    },
    computed: {
        ...mapGetters(['getPartnerPaymentDetail'])
    },
    components: {
        RadioBox
    },
    mounted() {

    }
}
</script>

<style scoped>
.show {
    display: block;
}

.borderRed {
    border-color: red;
}
</style>
