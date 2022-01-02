<template>
    <div class="advantage-cards-wrapper">
        <div
            v-for="card in cards"
            class="card"
            style="width: 18rem;"
        >
            <img :src="card.img" class="card-img-top" alt="...">
            <div class="card-body">
                <h3 class="card-title">{{ card.title }}</h3>
                <p class="card-text">{{ card.content }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import one from '../../assets/img/advantage-card-one.png'
import two from '../../assets/img/advantage-card-two.png'
import three from '../../assets/img/advantage-card-three.png'
import four from '../../assets/img/advantage-card-four.png'

export default {
    name: "AdvantageCard",
    data() {
        return {
            cards: [
                {
                    id: 1,
                    img: one,
                    title: 'Искать и находить лучшее',
                    content: 'Молодость, красота, здоровье. Сразу в нескольких направлениях мы выбираем самые интересные и эффективные предложения.'
                },
                {
                    id: 2,
                    img: two,
                    title: 'Качество и эффективность',
                    content: 'Высококачественные товары часто подделывают. Поэтому мы не используем торговые сети и продаём свою продукцию через авторизованных пользователей.'
                },
                {
                    id: 3,
                    img: three,
                    title: 'Реальный опыт',
                    content: 'Отзывы клиентов – самое правдивое, что можно услышать. Мы не используем  рекламу, чтобы сохранять стоимость товаров комфортной для вас.'
                },
                {
                    id: 4,
                    img: four,
                    title: 'Партнёрская программа',
                    content: 'Мы всегда открыты к сотрудничеству и щедро вознаграждаем своих Партнёров и Клиентов.'
                },
            ]
        }
    }
}
</script>

<style scoped>
.card {
    width: 100%;
    max-width: 270px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    -webkit-transition: all .2s;
    -moz-transition: all .2s;
    -ms-transition: all .2s;
    -o-transition: all .2s;
    transition: all .2s;
}

.card:hover {
    -webkit-transform: scale(1.1, 1.1);
    -moz-transform: scale(1.1, 1.1);
    -ms-transform: scale(1.1, 1.1);
    -o-transform: scale(1.1, 1.1);
    transform: scale(1.1, 1.1);
}

.card-body{
    /*padding: 1rem 4px;*/
}
</style>
