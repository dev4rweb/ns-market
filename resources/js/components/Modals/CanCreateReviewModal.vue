<template>
    <transition name="fade">
        <div
            v-if="isShowModalCanCreateReview"
            class="wrapper"
        >
            <div
                class="card shadow-lg"
            >
                <h3
                    class="mb-4"
                >
                    Оставить отзыв
                </h3>
                <p style="font-size: 18px">
                    Обращаем ваше внимание, что все отзывы публикуются аннонимно.
                </p>
                <p style="font-size: 18px">
                    Укажите пол и возраст человека, историю которого вы хотите описать
                </p>
                <form
                    class="needs-validation"
                    @submit.prevent="sendReview"
                    novalidate
                >
                    <div class="row justify-content-around align-items-center">
                        <div class="col-md-8">

                            <div class="form-group form-group-data">
                                <label>Пол</label>
                                <div
                                    class="d-flex justify-content-between align-items-center"
                                    style="max-width: 300px;"
                                >
                                    <RadioBox label="Мужской" value="0" v-model="gender"/>
                                    <RadioBox label="Женский" value="1" v-model="gender"/>
                                </div>
                                <div
                                    class="invalid-feedback"
                                    :class="{show: isGenderInvalid}"
                                >
                                    {{ invalidGenderMsg }}
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group form-group-data">
                                <label class="form-label">Возраст полных лет</label>
                                <input
                                    type="number"
                                    class="form-control form-control-lg"
                                    :class="{borderRed: isAgeInvalid}"
                                    @input="isAgeInvalid = false"
                                    v-model="age"
                                    min="0"
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
                            style="min-height: 200px;"
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
                            class="btn btn-info me-3"
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
    </transition>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
import {createReviewApi} from "../../store/actions/reviewsApi";
import RadioBox from "../UI/RadioBox";

export default {
    name: "CanCreateReviewModal",
    data() {
        return {
            gender: null,
            isGenderInvalid: false,
            invalidGenderMsg: 'Выберите пол',
            age: '',
            invalidAgeMsg: 'Укажите возраст',
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
            if (!this.gender) {
                this.isGenderInvalid = true
                return;
            }
            this.isGenderInvalid = false
            if (this.age < 1 || this.age > 100) {
                this.isAgeInvalid = true;
                return;
            }
            if (this.comment.trim().length < 5) {
                this.isCommentInvalid = true
                return;
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
            }).finally(() => this.setLoading(false));
        }
    },
    computed: {
        ...mapGetters(['getCurrentUser', 'isShowModalCanCreateReview'])
    },
    components: {
        RadioBox
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

.btn-info {
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;

    &:hover {
        -webkit-transform: scale(1.2, 1.2);
        -moz-transform: scale(1.2, 1.2);
        -ms-transform: scale(1.2, 1.2);
        -o-transform: scale(1.2, 1.2);
        transform: scale(1.2, 1.2);
    }
}

.btn-outline-info {
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;

    &:hover {
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

.btn-outline-secondary {
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;

    &:hover {
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

.invalid-feedback{
    font-weight: bold;
    font-style: italic;
}

.show {
    display: block;
}

.borderRed {
    border-color: red;
}
</style>
