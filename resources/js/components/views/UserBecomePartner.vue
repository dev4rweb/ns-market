<template>
    <div class="user-content become-partner">
        <div class="row">
            <div class="card data-card mb-5">
                <div class="d-flex mb-3">
                    <ChangeStatusBtn
                        :btnName="{name: 'Сменить статус'}"
                        :redirectUrl="{url: null}"
                    />

                    <button
                        v-if="getPhysicalPerson && getPhysicalPerson.trade_status !== 'S'"
                        class="btn btn-outline-success ms-3"
                        @click="createServiceCenter"
                    >
                        Статус Сервис Центра
                    </button>
                </div>

                <h3>Что означает Ваш статус ?</h3>
                <p>
                    Любой участник New Star market может иметь один из двух статусов:
                </p>
                <ul>
                    <li>Клиент</li>
                    <li>Партнёр</li>
                </ul>
                <p>
                    Если вы включились в проект New Star market, чтобы только приобретать продукты или
                    использовать услуги, предлагаемые на этом сайте, то Вы являетесь Клиентом.
                </p>
                <p>
                    Если же Вы одновременно с приобретением товаров и услуг хотите создать собственное дело,
                    используя франшизу New Star market, и зарабатывать, создавая рекламу и привлекая новых
                    покупателей товаров и услуг, то Вам необходимо стать Партнёром New Star.
                </p>
                <h4>
                    Каковы привилегии Клиента New Star market ?
                </h4>
                <ol>
                    <li>
                        Вы приобретаете товары и услуги New Star по базовой цене с учётом специальных акций и
                        предложений.
                    </li>
                    <li>
                        При совершении покупок, Вам будет начисляться кеш Бэк, который рассчитывается от
                        баллового наполнения каждой покупки.
                    </li>
                    <li>
                        Если Вы рекомендуете New Star market другим людям и они совершают покупки, то Вы будете
                        получать вознаграждения от 5 до 25% со всех покупок таких новых Клиентов.
                    </li>
                </ol>
                <h4>
                    В чём преимущества Партнёра New Star market ?
                </h4>
                <ol>
                    <li>
                        Вы всегда совершаете все покупки по привилегированной цене с выгодой от 15 до 45%.
                    </li>
                    <li>
                        Вы получаете кеш бэк со всех личных покупок.
                    </li>
                    <li>
                        Вы приглашаете в New Star market новых Клиентов и Партнёров. Сервисы New Star market
                        учитывают всю историю таких приглашений, выстраивая общую структуру покупателей. При
                        этом Вы можете получать вознаграждения от суммы всех покупок, совершённых всеми
                        Клиентами и Партнерами такой структуры.
                        <br>
                        Рассчёт вознаграждений осуществляется в соответствии с
                        <a href="#">Партнёрской программой New Star market</a>.
                    </li>
                    <li>
                        Вы участвуете в премиальных программах New Star, включая ценные подарки за выполнение
                        квалификаций, подарочные поездки за рубеж и другие.
                    </li>
                </ol>
                <h4>
                    Как стать Партнёром New Star ?
                </h4>
                <p>
                    Чтобы стать Партнёром New Star, необходимо приобрести франшизу стоимостью 3000 рублей.
                </p>
                <h4>
                    Что даёт приобретение франшизы New Star market ?
                </h4>
                <ol>
                    <li>
                        Вы совершаете личные покупки по специальной привилегированной цене и экономите при этом
                        от 15 до 45% средств.
                    </li>
                    <li>
                        Вы получаете вознаграждения в соответствии с
                        <a href="#">Партнёрской программой New Star market</a>.
                    </li>
                    <li>
                        Вы участвуете в премиальных программах New Star.
                    </li>
                </ol>
                <h4>
                    Каков срок действия франшизы ?
                </h4>
                <p>
                    Франшиза действует в течение 12 месяцев и автоматически продлевается на 12 месяцев с момента
                    каждой, совершённой Вами покупки.
                    <br>
                    Если в течение 12 месяцев Вы не совершите ни одной покупки, то Ваш статус автоматически
                    поменяется на «Клиент».
                </p>
                <div class="d-flex justify-content-center position-relative">
                    <a
                        v-if="isShowBtn"
                        href="/user-choose-mentor"
                        class="btn btn-lg btn-info"
                        style="margin-bottom: -50px;"
                    >
                        Я хочу стать Партнёром New Star market
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import ChangeStatusBtn from "../UI/ChangeStatusBtn";
import {createServiceCenterStatusApi} from "../../store/actions/serviceCenter";
export default {
    name: "UserBecomePartner",
    methods: {
        ...mapMutations(['setLoading', 'setToastError']),
        createServiceCenter() {
            if (this.getPhysicalPerson) {
                this.setLoading(true)
                createServiceCenterStatusApi(this.getPhysicalPerson.user_id)
                    .then(res => {
                        console.log('createServiceCenter', res)
                        if (res.data.success) {
                            this.setToastError('Статус успешно изменен')
                            setTimeout(() => {
                                window.location.reload()
                            }, 1500);
                        }
                    })
                    .catch(err => {
                        console.log('createServiceCenter err', err)
                    })
                    .finally(() => {
                        this.setLoading(false)
                    });
            } else this.setToastError('Something wrong')

        }
    },
    computed: {
        ...mapGetters(['getPhysicalPerson']),
        isShowBtn() {
            if (this.getPhysicalPerson) {
                const status = this.getPhysicalPerson.trade_status
                switch (status) {
                    case 'K':
                    case 'D':
                    case 'S':
                        return false
                    case 'N':
                    case 'B':
                    case 'T':
                        return true
                }
            }
        }
    },
    components: {
        ChangeStatusBtn
    }
}
</script>

<style scoped>

</style>
