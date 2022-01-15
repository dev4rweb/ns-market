<template>
    <div class="mentor-phone-form-confirmation mt-4">
        <p class="text-center mb-5">
            Смена наставника успешно завершена!
        </p>
        <a
            href="/user-mentor-panel"
            class="btn btn-lg btn-info w-100"
        >
            Личный кабинет
        </a>
    </div>
</template>

<script>
export default {
    name: "MentorPhoneFormConfirmation"
}
</script>

<style lang="scss" scoped>
.mentor-phone-form-confirmation{
    max-width: 300px;

    p {
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 29px;
        color: #333333;
    }
}
</style>
