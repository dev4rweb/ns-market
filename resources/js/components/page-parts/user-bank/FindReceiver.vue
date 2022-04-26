<template>
    <form
        @submit.prevent="findReceiver"
        class="needs-validation login-form "
        novalidate
    >
        <h4 class="mb-3 text-center">
            Введите компьютерный номер пользователя. <br>
            Которому вы хотите перевести Ваши бонус марки
        </h4>
        <div class="d-flex flex-column justify-content-center align-items-center mb-3">
            <input
                type="number"
                v-model="receiverId"
                :class="{borderRed: getReceiverUserMsg}"
                ref="focusMe"
                min="1"
                @input="setReceiverUserMsg(null)"
                class="form-control form-control-lg person"
                required
            >
            <div
                class="invalid-feedback text-center"
                :class="{show: getReceiverUserMsg}"
            >
                {{ getReceiverUserMsg }}
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <button
                class="btn btn-lg btn-info"
                style="min-width: 150px;"
                :disabled="isLoading"
                type="submit"
            >
                Искать
            </button>
        </div>
    </form>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'

export default {
    name: "FindReceiver",
    data() {
        return {
            receiverId: '',
        }
    },
    computed: {
        ...mapGetters(['getPhysicalPerson', 'isLoading',
        'getReceiverUserMsg'])
    },
    methods: {
        ...mapMutations(['setReceiverUserMsg']),
        ...mapActions(['findBonusMarkReceiverByUserIdAction']),
        findReceiver() {
            if (
                !this.receiverId.trim()
                ||
                this.receiverId < 1
            ) {
                this.setReceiverUserMsg('Введите ID пользователя')
                // this.isReceiverInvalid = true
                return
            }
            if (
                this.receiverId == 888
                ||
                this.receiverId == this.getPhysicalPerson.user_id
            ) {
                this.setReceiverUserMsg('Недопустимая операция')
                return
            }
            // console.log('findReceiver')
            this.findBonusMarkReceiverByUserIdAction(this.receiverId)
        },
    },
    mounted() {
        setTimeout(() => {
            this.$refs.focusMe.focus();
        }, 500);
    }
}
</script>

<style lang="scss" scoped>
.person{
    font-size: 30px;
    max-width: 220px;
    font-weight: bold;
    text-align: center
}
.show {
    display: block;
}

.borderRed {
    border-color: red;
}
</style>
