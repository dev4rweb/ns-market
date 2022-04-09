<template>
    <div class="wrapper">
        <div class="card shadow-lg">
            <h3
                class="mb-4"
            >
                Оставить отзыв
            </h3>
            <p style="font-size: 18px">
                Обращаем ваше внимание, что все отзывы публикуются аннонимно. <br>
                Укажите пол и возраст человека, историю которого вы хотите описать

            </p>
            <form
                class="needs-validation"
                @submit.prevent="sendReview"
                novalidate
            >
                <div class="row justify-content-around align-items-center">
                    <div class="col-md-4">
                        <div class="form-group form-group-data d-flex flex-row justify-content-between">
                            <label>Пол</label>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    v-model="gender"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                    value="0"
                                >
                                <label
                                    class="form-check-label"
                                    for="flexRadioDefault1">
                                    М
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input"
                                       type="radio"
                                       name="flexRadioDefault"
                                       v-model="gender"
                                       value="1"
                                >
                                <label
                                    class="form-check-label">
                                    Ж
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="form-group form-group-data">
                            <label class="form-label">Возраст полных лет</label>
                            <input
                                type="number"
                                class="form-control form-control-lg"
                                :class="{borderRed: isAgeInvalid}"
                                @input="isAgeInvalid = false"
                                v-model="age"
                                required
                            >
                        </div>
                        <div
                            class="invalid-feedback"
                            :class="{show: isAgeInvalid}"
                        >
                            {{ invalidAgeMsg }}
                        </div>
                    </div>
                </div>
                <div class="form-group form-group-data">
                    <label class="form-label">Текст отзыва.</label>
                    <textarea
                        class="form-control form-control-lg"
                        v-model="comment"
                        :class="{borderRed: isCommentInvalid}"
                        @input="isCommentInvalid = false"
                    ></textarea>

                    <div
                        class="invalid-feedback"
                        :class="{show: isCommentInvalid}"
                    >
                        {{ invalidCommentMsg }}
                    </div>
                </div>
                <div class="d-flex justify-content-end">
                    <button
                        class="btn btn-outline-info me-3"
                        type="submit"
                    >
                        Отправить отзыв
                    </button>
                    <button
                        class="btn btn-outline-secondary"
                        @click="closeModal"
                    >
                        Отмена
                    </button>
                </div>
            </form>

        </div>
    </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
import {createReviewApi} from "../../store/actions/reviewsApi";

export default {
    name: "CanCreateReviewModal",
    data() {
        return {
            gender: 0,
            age: 18,
            invalidAgeMsg: 'Некорректный формат возраста',
            isAgeInvalid: false,
            comment: '',
            isCommentInvalid: false,
            invalidCommentMsg: 'Поле должно содержать не менее 5 символов'
        }
    },
    methods: {
        ...mapMutations(['showModalCanCreateReview', 'setLoading', 'setToastError',
        'showCreatedReviewModalSuccess']),
        closeModal() {
            this.showModalCanCreateReview(false)
        },
        sendReview() {
            if (this.age < 1 || this.age > 100) {
                this.isAgeInvalid = true
                return
            }
            if (this.comment.trim().length < 5) {
                this.isCommentInvalid = true
            }
            const reviewObj = {
                age: this.age,
                client_id: this.getCurrentUser.id.toString(),
                comment: this.comment,
                gender: this.gender,
                full_name: this.getCurrentUser.full_name,
                status: 0
            };
            console.log('sendReview', reviewObj)
            this.setLoading(true)
            createReviewApi(reviewObj)
                .then(res => {
                    console.log('createReviewApi res', res)
                    this.showModalCanCreateReview(false)
                    if (res.data.success) this.showCreatedReviewModalSuccess(true)
                    else this.setToastError('Что-то пошло не так')
                }).catch(err => {
                console.log('createReviewApi err', err)
                this.showModalCanCreateReview(false)
                this.setToastError('Что-то пошло не так')
            }).finally(()=> this.setLoading(false));
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
        max-width: 700px;
        -webkit-border-radius: 8px;
        -moz-border-radius: 8px;
        border-radius: 8px;
        padding: 20px;

        h3 {
            text-align: center;
        }
    }

}
.show {
    display: block;
}
.borderRed {
    border-color: red;
}
</style>
