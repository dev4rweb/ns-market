<template>
    <div class="wrapper">
        <div class="card shadow-lg">
            <h3
                class="mb-4"
            >
                Оставить отзыв об использовании товаров и услуг New Star market
                может любой пользователь после авторизации.
            </h3>
            <div class="d-flex justify-content-end">
                <button
                    class="btn btn-outline-info me-3"
                    @click="openAuthModal"
                >
                    Авторизоваться
                </button>
                <button
                    class="btn btn-outline-secondary"
                    @click="closeModal"
                >
                    Отмена
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
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    name: "CannotCreateReviewModal",
    methods: {
        ...mapMutations(['showModalCannotCreateReview', 'setFromBasketPage']),
        closeModal() {
            this.showModalCannotCreateReview(false)
        },
        openAuthModal() {
            this.showModalCannotCreateReview(false)
            this.setFromBasketPage(window.location.href)
            $(this.$refs.loginBtn).click();
        }
    }
}
</script>

<style lang="scss" scoped>
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
    //background-color: rgba(0, 0, 0, .7);

    .card {
        min-width: 30vw;
        max-width: 500px;
        -webkit-border-radius: 8px;
        -moz-border-radius: 8px;
        border-radius: 8px;
        padding: 20px;

        h3 {
            text-align: center;
        }
    }
}
</style>
