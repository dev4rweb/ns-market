<template>
    <div class="wrapper">
        <div class="card shadow-lg">
            <h3
                class="mb-4"
            >
                отзыв отправлен
            </h3>
            <p>
                <b>{{ getCurrentUser ? getCurrentUser.first_name : 'Пользователь' }}, благодарим Вас</b> за то, что Вы делитесь своим опытом использования товаров и
                услуг New Star market! <br>
                Ваш отзыв отправлен на проверку. <br>
                После публикации этого отзыва на сайте New Star market в знак благодарности мы начислим на Ваш счёт 10
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
        ...mapGetters(['getCurrentUser'])
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
            text-transform: uppercase;
        }
        p{
            font-size: 18px;
        }
    }
}
</style>
