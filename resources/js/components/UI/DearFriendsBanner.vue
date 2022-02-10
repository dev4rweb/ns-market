<template>
    <div class="card shadow dear-banner p-3">
        <img :src="dearFriends" alt="car">
        <div class="content-block">
            <h4>Дорогие друзья!</h4>
            <p>Обращаем ваше внимание, что заказы на сумму от 7 000 руб. доставляются бесплатно службой DPD!</p>
            <p>Дорогие друзья!</p>
        </div>
    </div>
</template>

<script>
import dearFriends from '../../../assets/img/dear-friends.png'

export default {
    name: "DearFriendsBanner",
    data() {
        return {
            dearFriends
        }
    }
}
</script>

<style lang="scss" scoped>
.dear-banner {
    width: 100%;
    max-width: 560px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    img{
        width: 100%;
        max-width: 200px;
    }

    .content-block{
        max-width: 280px;

        p {
            font-size: 18px;
        }
    }
}
</style>
