<template>
    <div
        class="toast position-fixed p-3"
        role="alert"
        ref="toast"
        aria-live="assertive" aria-atomic="true"
        :class="{'show': getToastError, 'hide': getToastError === null}"
    >
        <div class="toast-header">
            <img
                :src="logo"
                class="logo"
                alt="logo">
            <strong class="mr-auto">Newstar Market</strong>
            <small>now</small>
            <button
                type="button"
                class="ml-2 mb-1 close"
                data-dismiss="toast"
                @click="closeToast"
                aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="toast-body">
            {{ getToastError }}
        </div>
    </div>
</template>

<script>
import logoImg from '../../../assets/img/logo-market.svg'
import {mapGetters, mapMutations} from 'vuex'

export default {
    name: "Toast",
    data() {
        return {
            logo: logoImg,
            toast: null
        }
    },
    methods: {
        ...mapMutations(['setToastError']),
        closeToast() {
            // this.toast.toast('hide')
            this.setToastError(null)
        },
    },
    computed: {
        ...mapGetters(['getToastError']),

    },
    mounted() {
        setTimeout(() => {
            this.toast = $(this.$refs.toast)
            if (this.getToastError)
                this.toast.toast('show')
        }, 500);
    }
}
</script>

<style scoped>
.toast {
    right: 20px;
    top: 20px;
    z-index: 10000;
}

.logo {
    height: 30px;
    width: auto;
    margin-right: 1rem;
}
</style>
