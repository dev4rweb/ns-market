<aside>
    <div class="profile-block">
        <upload-avatar></upload-avatar>
        <h2>
            {{Auth::user()->first_name}} {{Auth::user()->last_name}}
        </h2>
        {{--                    <p>ID: {{Auth::user()->user_id}} <br>Статус: {{Auth::user()->type}}</p>--}}
        <physical-person></physical-person>
        <a
            href="{{route('user-invite-page')}}"
            class="btn btn-secondary"
        >
            Пригласить в New Star
        </a>
        <hr>
    </div>

    <ul class="user-sidebar">
        <user-sidebar></user-sidebar>
{{--        <li>--}}
{{--            <a--}}
{{--                href="{{route('user-page')}}"--}}
{{--                class="@if(Request::url() == url('/user-panel')) active @endif"--}}
{{--            >--}}
{{--                Новости--}}
{{--            </a>--}}
{{--        </li>--}}
{{--        <li>--}}
{{--            <a--}}
{{--                href="{{route('user-data-page')}}"--}}
{{--                class="@if(Request::url() == url('/user-data-panel')) active @endif"--}}
{{--            >--}}
{{--                Мои данные--}}
{{--            </a>--}}
{{--        </li>--}}
{{--        <li>--}}
{{--            <a--}}
{{--                href="{{route('user-orders-page')}}"--}}
{{--                class="@if(Request::url() == url('/user-orders-panel') || Request::url() == url('/user-orders-panel/save')) active @endif"--}}
{{--            >--}}
{{--                Мои заказы--}}
{{--            </a>--}}
{{--        </li>--}}
{{--        <li>--}}
{{--            <a--}}
{{--                href="{{route('user-service-center-page')}}"--}}
{{--                class="@if(Request::url() == url('/user-service-center')) active @endif"--}}
{{--            >--}}
{{--                Работа СЦ--}}
{{--            </a>--}}
{{--        </li>--}}
{{--        <li>--}}
{{--            <a--}}
{{--                href="{{route('user-bank-page')}}"--}}
{{--                class="@if(Request::url() == url('/user-bank-panel')) active @endif"--}}
{{--            >--}}
{{--                Мои банк--}}
{{--            </a>--}}
{{--        </li>--}}
{{--        <li>--}}
{{--            <a--}}
{{--                href="{{route('user-support-page')}}"--}}
{{--                class="@if(Request::url() == url('/user-support-panel')) active @endif"--}}
{{--            >--}}
{{--                Техподдержка--}}
{{--            </a>--}}
{{--        </li>--}}
        <li
            style="display: none"
        >
            <a href="{{ route('logout') }}"
               id="logoutBtn"
               onclick="event.preventDefault();
                            document.getElementById('logout-form').submit();">
                Выйти
            </a>
        </li>

        <li>
            <logout-btn></logout-btn>
        </li>
    </ul>
</aside>
