<template>
    <div
        class="modal fade"
        id="userInviteModal"
        tabindex="-1"
        aria-labelledby="userInviteModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title" id="userInviteModalLabel">
                        Приглашайте Ваших знакомых в New Star market!
                    </h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>
                        Приглашая новых покупателей в New Star market
                    </p>
                    <ul>
                        <li>
                            Вы можете получать вознаграждения от 5 до 45 процентов со всех покупок Ваших приглашённых.
                        </li>
                        <li>
                            Став Партнёром New Star, Вы можете получать вознаграждения с покупок всех Партнёров и
                            Клиентов Вашей сети потребителей в соответствии с Партнёрской программой New Star market .
                        </li>
                    </ul>
                    <p>
                        <b>
                            Приглашая новых покупателей в New Star market, Вы создаёте дополнительный источник
                            собственных
                            доходов.
                        </b>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserInviteModal"
}
</script>

<style scoped>
h3 {
    color: black;
}

p, li {
    font-size: 18px;
}
</style>
