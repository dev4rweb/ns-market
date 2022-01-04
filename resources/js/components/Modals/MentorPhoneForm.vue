<template>
    <form
        @submit.prevent="findMentorByPhone"
        class="needs-validation login-form "
        novalidate
    >
        <p
            class="description"
        >
            В соответствии с правилами
            <a href="#">Партнёрской программы Компании</a>
            New Star, для осуществления покупок Вам необходимо
            указать номер телефона человека, который пригласил Вас в New Star Market.
        </p>
    </form>
</template>

<script>
import Loader from "../UI/Loader";
export default {
    name: "MentorPhoneForm",
    data() {
        return {
            loading: false,
        }
    },
    methods: {
        findMentorByPhone() {
            console.log('findMentorByPhone')
        }
    }
}
</script>

<style scoped>
.login-form {
    width: 100%;
    display: flex;
    flex-direction: column;

}

.show {
    display: block;
}

.borderRed {
    border-color: red;
}
</style>
