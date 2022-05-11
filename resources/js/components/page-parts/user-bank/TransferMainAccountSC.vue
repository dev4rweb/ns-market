<template>
  <form
      @submit.prevent="makeTransaction"
      class="needs-validation login-form"
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
      Укажите сумму, которую вы получили от покупателя.
    </h4>
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
    <div class="d-flex justify-content-center">
      <button
          class="btn btn-lg btn-info me-3"
          style="min-width: 120px;"
          type="submit"
          :disabled="disabled"
      >
        Подтвердить
      </button>
      <button
          class="btn btn-lg btn-outline-secondary"
          style="min-width: 120px;"
          @click="setReceiverUser(null)"
      >
        Отмена
      </button>
    </div>
  </form>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  name: "TransferMainAccountSC",
  data() {
    return {
      transferAmount: '',
      transferAmountMsg: 'Поле не может быть пустым',
      isAmountInvalid: false,
      disabled: false
    }
  },
  methods: {
    ...mapMutations(['setReceiverUser']),
    ...mapActions(['makeMainTransferTransactionSC']),
    makeTransaction() {
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
      if (this.transferAmount > parseInt(this.getWalletMain.balance)) {
        this.transferAmountMsg = 'Сумма превышает баланс на счету'
        this.isAmountInvalid = true
        return
      }
      console.log('makeTransaction')
      this.makeMainTransferTransactionSC(parseInt(this.transferAmount))
    }
  },
  computed: {
    ...mapGetters(['getReceiverUser', 'getWalletMain'])
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

.btn-outline-secondary {
  -webkit-transition: all .2s;
  -moz-transition: all .2s;
  -ms-transition: all .2s;
  -o-transition: all .2s;
  transition: all .2s;
  &:hover {
    -webkit-transform: scale(1.1, 1.1);
    -moz-transform: scale(1.1, 1.1);
    -ms-transform: scale(1.1, 1.1);
    -o-transform: scale(1.1, 1.1);
    transform: scale(1.1, 1.1);
    background-color: #fff;
    color: #6c757d;
  }
}

.show {
  display: block;
}

.borderRed {
  border-color: red;
}
</style>
