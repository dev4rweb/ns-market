<template>
    <transition name="fade">
        <div
            v-if="isShowCreatedReviewModalSuccess"
            class="wrapper"
        >
            <div class="card shadow-lg">
                <h3
                    class="mb-4"
                >
                    отзыв отправлен
                </h3>
                <p>
                    <b>{{ getCurrentUser ? getCurrentUser.first_name : 'Пользователь' }}, благодарим Вас</b> за то, что
                    Вы делитесь своим опытом использования товаров и
                    услуг New Star market! <br>
                    Ваш отзыв отправлен на проверку. <br>
                    После публикации этого отзыва на сайте New Star market в знак благодарности мы начислим на Ваш счёт
                    10
                    бонус марок.
                </p>
                <div class="d-flex justify-content-end">
                    <button
                        class="btn btn-outline-info me-3"
                        @click="closeModal"
                    >
                        Ok
                    </button>
                    <button
                        style="display: none;"
                        data-toggle="modal"
                        data-target="#loginModal"
                        ref="loginBtn"
                    >
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
    name: "CreatedReviewModalSuccess",
    methods: {
        ...mapMutations(['showCreatedReviewModalSuccess']),
        closeModal() {
            this.showCreatedReviewModalSuccess(false)
        }
    },
    computed: {
        ...mapGetters(['getCurrentUser', 'isShowCreatedReviewModalSuccess'])
    }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
    -webkit-transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -ms-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    transform: scale(1, 1);
    opacity: 1;
    transition: all .5s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
    -webkit-transform: scale(0, 0);
    -moz-transform: scale(0, 0);
    -ms-transform: scale(0, 0);
    -o-transform: scale(0, 0);
    transform: scale(0, 0);
}


.btn-outline-info{
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
    &:hover{
        -webkit-transform: scale(1.2, 1.2);
        -moz-transform: scale(1.2, 1.2);
        -ms-transform: scale(1.2, 1.2);
        -o-transform: scale(1.2, 1.2);
        transform: scale(1.2, 1.2);
        border-color: #038ED7;
        color: #038ED7;
        background-color: #fff;
    }
}
.btn-outline-secondary{
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
    &:hover{
        -webkit-transform: scale(1.2, 1.2);
        -moz-transform: scale(1.2, 1.2);
        -ms-transform: scale(1.2, 1.2);
        -o-transform: scale(1.2, 1.2);
        transform: scale(1.2, 1.2);
        color: #6c757d;
        border-color: #6c757d;
        background-color: #fff;
    }
}

.wrapper {
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, .7);

    .card {
        min-width: 30vw;
        max-width: 500px;
        -webkit-border-radius: 8px;
        -moz-border-radius: 8px;
        border-radius: 8px;
        padding: 20px;

        h3 {
            text-align: center;
            text-transform: uppercase;
        }

        p {
            font-size: 18px;
        }
    }
}
</style>
