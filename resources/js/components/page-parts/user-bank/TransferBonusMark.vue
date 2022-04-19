<template>
    <form
        @submit.prevent="transferBonus"
        class="needs-validation login-form "
        novalidate
    >
        <h4 class="mb-3 text-center">
            Укажите количество бонус марок, которое вы хотите перевести
        </h4>
        <h5
            v-if="getReceiverUser"
            class="mb-3 text-center"
        >
            {{ getReceiverUser.full_name }}
        </h5>
        <div class="d-flex justify-content-center align-items-center flex-column mb-3">
            <input
                type="number"
                min="1"
                style="max-width: 200px; font-weight: bold; font-size: 40px; text-align: center"
                v-model="transferAmount"
                @input="isAmountInvalid = false"
                ref="focusMe"
                class="form-control form-control-lg"
                :class="{borderRed: isAmountInvalid}"
                required
            >
            <div
                class="invalid-feedback text-center"
                :class="{show: isAmountInvalid}"
            >
                {{ transferAmountMsg }}
            </div>
        </div>
        <div class="d-flex justify-content-center mt-4">
            <div class="form-group form-group-blue">
                <label>
                    При необходимости
                    сделайте краткий комментарий
                </label>
                <textarea
                    class="form-control form-control-lg"
                    style="resize: none"
                    v-model="comment"
                ></textarea>
            </div>
        </div>
        <div class="d-flex justify-content-between">
            <button
                class="btn btn-lg btn-info"
                style="min-width: 120px;"
            >
                Перевести
            </button>
            <button
                class="btn btn-lg btn-outline-secondary"
                style="min-width: 120px;"
                @click="setReceiverUser(null)"
            >
                Назад
            </button>
        </div>
    </form>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'

export default {
    name: "TransferBonusMark",
    data() {
        return {
            transferAmount: '',
            transferAmountMsg: 'Поле не может быть пустым',
            isAmountInvalid: false,
            transactionComment: 'Даю в долг до 20 мая с возвратом.',
            comment: ''
        }
    },
    methods: {
        ...mapMutations(['setReceiverUser']),
        ...mapActions(['makeBonusMarkTransactionAction']),
        transferBonus() {
            if (!this.transferAmount) {
                this.transferAmountMsg = 'Поле не может быть пустым'
                this.isAmountInvalid = true
                return
            }
            if (this.transferAmount < 1) {
                this.transferAmountMsg = 'Некорректный формат'
                this.isAmountInvalid = true
                return;
            }
            if (this.transferAmount > parseInt(this.getBillingAccountMBC.balance)) {
                this.transferAmountMsg = 'Сумма превышает баланс на счету'
                this.isAmountInvalid = true
                return
            }
            console.log('transferBonus');
            const transactionObj= {
                senderId: this.getPhysicalPerson.user_id,
                receiverId: this.getReceiverUser.id,
                bonusAmount: parseInt(this.transferAmount),
                comment: this.comment,
            }
            this.makeBonusMarkTransactionAction(transactionObj)
        },
    },
    computed: {
        ...mapGetters(['getBillingAccountMBC', 'getReceiverUser', 'getPhysicalPerson'])
    },
    mounted() {
        setTimeout(() => {
            this.$refs.focusMe.focus();
        }, 500);
    }
}
</script>

<style lang="scss" scoped>
form {
    max-width: 430px;

    h5 {
        font-size: 30px;
        font-weight: bold;
    }
}

.show {
    display: block;
}

.borderRed {
    border-color: red;
}
</style>
