<template>
    <div>
        <div class="card data-card d-flex flex-column justify-content-center align-items-center mb-5">
            <div
                v-if="data.isBecomePartner"
            >
                <h3 class="text-center">Покупка франшизы New Star market</h3>
                <p>Шаг <b>1</b> из 2</p>
                <p
                    class="text-center"
                    style="color: red"
                >
                    Обращаем Ваше внимание на то. Что
                    после того, как Вы станете Партнёром New Star,
                    Вы больше не сможете поменять Вашего наставника.
                </p>
            </div>
            <img
                v-if="!data.isBecomePartner"
                class="mb-3"
                :src="logo"
                alt="logo"
            >
            <MentorChangePhoneForm
                v-if="getIsMentorChangePhoneForm"
                :data="data"
            />
            <MentorPhoneFoundedForm
                v-if="getIsMentorPhoneFounded"
                :data="data"
            />
            <MentorPhoneFormConfirmation
                v-if="getIsMentorPhoneConfirmation"
            />
        </div>
        <div
            v-if="!data.isBecomePartner"
            class="market-block d-flex flex-column align-items-center justify-content-center mt-5 mb-5">
            <p style="text-align: center; max-width: 360px;">
                Установите приложение New Star Market для быстрого доступа к каталогу на вашем мобильном
                устройстве.
            </p>
            <div class="market-wrapper">
                <a href="/"><img :src="appStore" alt="app-store"></a>
                <a href="/"><img :src="googlePlay" alt="google-play"></a>
            </div>
        </div>
    </div>
</template>

<script>

import logo from '../../../assets/img/logo-market.svg'
import appStore from '../../../assets/img/ic-app-store.svg'
import googlePlay from '../../../assets/img/ic-google-play.svg'
import MentorChangePhoneForm from "../page-parts/mentor/MentorChangePhoneForm";
import MentorPhoneFoundedForm from "../page-parts/mentor/MentorPhoneFoundedForm";
import MentorPhoneFormConfirmation from "../page-parts/mentor/MentorPhoneFormConfirmation";
import {mapGetters} from 'vuex'
export default {
    name: "UserMentorChangePage",
    props: ['data'],
    data() {
        return {
            logo,
            appStore,
            googlePlay,
        }
    },
    computed: {
        ...mapGetters([
            'getIsMentorChangePhoneForm', 'getIsMentorPhoneFounded',
            'getIsMentorPhoneConfirmation'
        ])
    },
    components: {
        MentorChangePhoneForm,
        MentorPhoneFoundedForm,
        MentorPhoneFormConfirmation
    },
    mounted() {
        console.log('text', this.data)
    }
}
</script>

<style scoped>
h3{
    text-transform: uppercase;
    color: #333333;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
}

p {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
}

.market-block p {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    color: #333333;
}

.market-wrapper {
    width: 300px;
    display: flex;
    justify-content: space-between;
}

.market-wrapper img {
    width: 138px;
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
}

.market-wrapper img:hover {
    -webkit-transform: scale(1.1, 1.1);
    -moz-transform: scale(1.1, 1.1);
    -ms-transform: scale(1.1, 1.1);
    -o-transform: scale(1.1, 1.1);
    transform: scale(1.1, 1.1);
}
</style>
