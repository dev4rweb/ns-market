<template>
    <div
        class="toast position-fixed p-3"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        ref="toast"
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
            Hello, world! This is a toast message.
        </div>
    </div>
</template>

<script>
import logoImg from '../../../assets/img/logo-market.svg'
import {mapGetters} from 'vuex'
export default {
    name: "Toast",
    data() {
        return {
            logo: logoImg,
            toast: null
        }
    },
    methods: {
        closeToast() {
            this.toast.toast('hide')
        }
    },
    computed: {
        ...mapGetters(['getToastError'])
    },
    mounted() {
        setTimeout(() => {
            this.toast = $(this.$refs.toast)
            // this.toast.toast('show')
        }, 500);
    }
}
</script>

<style scoped>
.toast{
    right: 20px;
    bottom: 20px;
}
.logo {
    height: 30px;
    width: auto;
    margin-right: 1rem;
}
</style>
