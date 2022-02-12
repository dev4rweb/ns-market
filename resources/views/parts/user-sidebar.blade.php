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
        <li>
            <a
                href="{{route('user-page')}}"
                class="@if(Request::url() == url('/user-panel')) active @endif"
            >
                Новости
            </a>
        </li>
        <li>
            <a
                href="{{route('user-data-page')}}"
                class="@if(Request::url() == url('/user-data-panel')) active @endif"
            >
                Мои данные
            </a>
        </li>
        <li>
            <a
                href="{{route('user-orders-page')}}"
                class="@if(Request::url() == url('/user-orders-panel')) active @endif"
            >
                Мои заказы
            </a>
        </li>
        <li>
            <a
                href="{{route('user-support-page')}}"
                class="@if(Request::url() == url('/user-support-panel')) active @endif"
            >
                Техподдержка
            </a>
        </li>
        <li>
            <a href="{{ route('logout') }}"
               onclick="event.preventDefault();
                            document.getElementById('logout-form').submit();">
                Выйти
            </a>
        </li>
    </ul>
</aside>
