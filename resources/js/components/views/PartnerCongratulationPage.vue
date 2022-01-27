<template>
    <div
        v-if="getCurrentUser"
        class="card data-card become-partner">
        <h3 class="text-center">Покупка франшизы New Star market</h3>
        <p>
            {{getCurrentUser.first_name}}, поздравляем Вас
            с успешным приобретением франшизы New Star market!
        </p>
        <p>
            Теперь Ваш статус  - <b>Партнёр</b>.
        </p>
        <ul>
            <li>Совершайте покупки по привилегированной цене.</li>
            <li>Приглашайте в New Star market знакомых
                и получайте вознаграждения с их покупок.</li>
            <li>
                Развивайте сеть потребителей товаров и услуг New Star market
                и создавайте собственный источник дохода.
            </li>
            <li>
                Пользуйтесь поддержкой Ваших наставников чтобы
                увеличить скорость роста Ваших доходов.

            </li>
        </ul>
        <p>
            Желаем Вам удачи и успехов на этом пути!
        </p>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: "PartnerCongratulationPage",
    computed: {
        ...mapGetters(['getCurrentUser'])
    }
}
</script>

<style scoped>

</style>
