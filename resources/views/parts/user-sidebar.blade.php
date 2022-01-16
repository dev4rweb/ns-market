<aside>
    <div class="profile-block">
        <upload-avatar></upload-avatar>
        <h2>
            {{Auth::user()->first_name}} {{Auth::user()->last_name}}
        </h2>
        {{--                    <p>ID: {{Auth::user()->user_id}} <br>Статус: {{Auth::user()->type}}</p>--}}
        <physical-person></physical-person>
        <button
            class="btn btn-secondary"
        >
            Пригласить в New Star
        </button>
        <hr>
    </div>
    <ul class="user-sidebar">
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
