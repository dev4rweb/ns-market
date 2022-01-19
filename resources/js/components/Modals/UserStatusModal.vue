<template>
    <div
        class="modal fade"
        id="userStatusModal"
        tabindex="-1"
        aria-labelledby="userStatusModalLabel"
        aria-hidden="true">
        <div class="modal-dialog  modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title" id="userStatusModalLabel">
                        Профессиональный статус
                    </h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>
                        В New Star market можно заказать товары, которые доступны только для специалистов в определённой
                        области.
                    </p>
                    <p>
                        Если вы являетесь таким специалистом и хотите приобретать соответствующие товары, то загрузите в
                        базу данных New Star market данные Вашего паспорта и его скан, а также документ, подтверждающий
                        Ваше образование в соответствующем виде деятельности.
                    </p>
                    <p>
                        После проверки корректности внесенных данных Вам будут доступны для заказа специальные товары.
                    </p>
                    <p>
                        New Star market использует эти данные только для доступа к специальным товарам и не передает
                        Ваши личные данные третьим лицам.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserStatusModal"
}
</script>

<style scoped>
h3{
    color: black;
}
p {
    font-size: 18px;
}
</style>
