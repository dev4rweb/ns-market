<template>
    <form
        @submit.prevent="transferPVC"
        class="needs-validation login-form "
        novalidate
    >
        <h5 class="text-center">Получатель перевода</h5>
        <h5
            v-if="getReceiverUser"
            class="mb-3 text-center"
        >
            {{ getReceiverUser.id }}
            {{ getReceiverUser.full_name }}
        </h5>
        <h4 class="mb-3 text-center">
            Укажите количество баллов, которое вы хотите перевести
        </h4>
        <div
            class="d-flex justify-content-between align-items-center mb-3"
            style="max-width: 420px;"
        >
            <RadioBox label="В личный объём" value="0" v-model="reserveOrPV"/>
            <RadioBox label="В резерв" value="1" v-model="reserveOrPV"/>
        </div>
        <div class="d-flex justify-content-center align-items-center flex-column mb-3">
            <input
                type="number"
                min="1"
                style="max-width: 250px; font-weight: bold; font-size: 60px; text-align: center"
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
        <div class="d-flex justify-content-center">
            <button
                class="btn btn-lg btn-info me-3"
                style="min-width: 120px;"
                type="submit"
                :disabled="disabled"
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
import {mapGetters, mapMutations} from 'vuex'
import {makePVTransactionApi, makeReserveTransactionApi} from "../../../store/actions/transactionsApi";
import RadioBox from "../../UI/RadioBox";

export default {
    name: "TransferReservePVC",
    data() {
        return {
            transferAmount: '',
            transferAmountMsg: 'Поле не может быть пустым',
            isAmountInvalid: false,
            transactionComment: 'Даю в долг до 20 мая с возвратом.',
            comment: '',
            disabled: false,
            reserveOrPV: '0'
        }
    },
    methods: {
        ...mapMutations(['setReceiverUser', 'setLoading', 'setToastError']),
        transferPVC() {
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
            if (this.transferAmount > parseInt(this.getWalletPVC.balance)) {
                this.transferAmountMsg = 'Сумма превышает баланс на счету'
                this.isAmountInvalid = true
                return
            }
            console.log('transferPVC', this.reserveOrPV);
            this.disabled = true
            this.setLoading(true)
            if (this.reserveOrPV === '0') {
                console.log('LO Transaction');
                const transactionObj = {
                    senderId: this.getPhysicalPerson.user_id,
                    receiverId: this.getReceiverUser.id,
                    pv_amount: parseInt(this.transferAmount),
                    comment: this.comment,
                }
                makePVTransactionApi(transactionObj)
                    .then(res => {
                        console.log('makePVTransactionApi', res)
                        if (res.data.success) {
                            this.setToastError('Баллы успешно переведены в личный объем')
                            setTimeout(() => {
                                window.location.reload()
                            }, 2000);
                        }
                    })
                    .catch(err => {
                        console.log('makePVTransactionApi err', err)
                    })
                    .finally(() => {
                        this.setLoading(false)
                    });
            } else {
                const transactionObj = {
                    senderId: this.getPhysicalPerson.user_id,
                    receiverId: this.getReceiverUser.id,
                    reserveAmount: parseInt(this.transferAmount),
                    comment: this.comment,
                };

                makeReserveTransactionApi(transactionObj)
                    .then(res => {
                        console.log('makeReserveTransactionApi ', res)
                        if (res.data.success) {
                            this.setToastError('Баллы успешно переведены!')
                            setTimeout(() => {
                                window.location.reload()
                            }, 2000);
                        }
                    })
                    .catch(err => {
                        console.log('makeBonusMarkTransactionApi err', err)
                    })
                    .finally(() => {
                        this.setLoading(false)
                    });
            }
        }
    },
    computed: {
        ...mapGetters(['getReceiverUser', 'getPhysicalPerson', 'getWalletPVC'])
    },
    components: {
        RadioBox
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
