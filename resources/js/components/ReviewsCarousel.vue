<template>
    <div
        id="carouselExampleControlsNoTouching"
        class="carousel slide"
        data-touch="true"
        data-ride="carousel"
        data-interval="3000">
        <div class="carousel-inner">
            <div v-for="card in cards" class="carousel-item"
                :class="{' active' : card.id === 1}">
                <div class="card">
                    <div class="card-wrapper">
                        <img class="card-avatar" :src="card.ava" alt="avatar">
                        <div class="card-content">
                            <div class="header-card">
                                <h4>{{card.title}}</h4>
                                <span>{{card.date}}</span>
                            </div>
                            <p>{{card.text}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-target="#carouselExampleControlsNoTouching"
                data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-target="#carouselExampleControlsNoTouching"
                data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </button>
    </div>
</template>

<script>
import avatar from '../../assets/img/avatar.jpg'

export default {
    name: "ReviewsCarousel",
    data() {
        return {
            cards: [
                {
                    id: 1,
                    ava: avatar,
                    title: 'Женщина, 38 лет',
                    date: '23 июля 2020',
                    text: 'Я не большой знаток парфюма, но могу сказать о C-47, что это ооочень нежный, цветочный аромат, богатый, дорогой и очень чувственный аромат. Не приторный, легкий, не навязчивый. Стойкость средняя, к вечеру почти не заметен. Красивый женственный аромат.'
                },
                {
                    id: 2,
                    ava: avatar,
                    title: 'Женщина, 38 лет',
                    date: '23 июля 2020',
                    text: 'Я не большой знаток парфюма, но могу сказать о C-47, что это ооочень нежный, цветочный аромат, богатый, дорогой и очень чувственный аромат. Не приторный, легкий, не навязчивый. Стойкость средняя, к вечеру почти не заметен. Красивый женственный аромат.'
                },
                {
                    id: 3,
                    ava: avatar,
                    title: 'Женщина, 38 лет',
                    date: '23 июля 2020',
                    text: 'Я не большой знаток парфюма, но могу сказать о C-47, что это ооочень нежный, цветочный аромат, богатый, дорогой и очень чувственный аромат. Не приторный, легкий, не навязчивый. Стойкость средняя, к вечеру почти не заметен. Красивый женственный аромат.'
                },
                {
                    id: 4,
                    ava: avatar,
                    title: 'Женщина, 38 лет',
                    date: '23 июля 2020',
                    text: 'Я не большой знаток парфюма, но могу сказать о C-47, что это ооочень нежный, цветочный аромат, богатый, дорогой и очень чувственный аромат. Не приторный, легкий, не навязчивый. Стойкость средняя, к вечеру почти не заметен. Красивый женственный аромат.'
                },
                {
                    id: 5,
                    ava: avatar,
                    title: 'Женщина, 38 лет',
                    date: '23 июля 2020',
                    text: 'Я не большой знаток парфюма, но могу сказать о C-47, что это ооочень нежный, цветочный аромат, богатый, дорогой и очень чувственный аромат. Не приторный, легкий, не навязчивый. Стойкость средняя, к вечеру почти не заметен. Красивый женственный аромат.'
                },
            ]
        }
    }
}
</script>

<style scoped>

</style>
