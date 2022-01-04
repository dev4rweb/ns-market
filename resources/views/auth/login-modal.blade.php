<!-- Modal -->
<div
    class="modal fade"
    id="loginModal"
    tabindex="-1"
    aria-labelledby="loginModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-login">
        <div class="modal-content">
<!--            <div class="modal-header">
                <h5 class="modal-title" id="loginModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>-->
            <div class="modal-body">
                <div class="modal-wrapper">
                    <img src={{asset('images/logo-market.svg')}} alt="">
                    <h4>Вход и регистрация</h4>
                    <modal-auth-form></modal-auth-form>
{{--                    <modal-login></modal-login>--}}
                </div>
                <p style="text-align: center;">
                    Установите приложение New Star Market для быстрого доступа к каталогу на вашем мобильном устройстве.
                </p>
                <div class="market-wrapper">
                    <a href="/"><img src="{{asset('images/ic-app-store.svg')}}" alt="app-store"></a>
                    <a href="/"><img src="{{asset('images/ic-google-play.svg')}}" alt="google-play"></a>
                </div>
            </div>
<!--            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>-->
        </div>
    </div>
</div>
