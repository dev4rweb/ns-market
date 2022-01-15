<ul class="nav nav-pills mb-3">
    <li class="nav-item">
        <a
            class="btn btn-outline-info @if(Request::url() == url('/user-data-panel')) active @endif"
            href="{{route('user-data-page')}}">
            Личные данные
        </a>
    </li>
    <li class="nav-item">
        <a
            class="btn btn-outline-info @if(Request::url() == url('/user-address-panel')) active @endif"
            href="{{route('user-address-page')}}"
        >
            Адреса
        </a>
    </li>
    <li class="nav-item">
        <a
            class="btn btn-outline-info  @if(Request::url() == url('/user-status-panel')) active @endif"
            href="{{route('user-status-page')}}"
        >
            Проф статус
        </a>
    </li>
    <li class="nav-item">
        <a
            class="btn btn-outline-info  @if(Request::url() == url('/user-passport-panel')) active @endif"
            href="{{route('user-passport-page')}}"
        >
            Паспорт
        </a>
    </li>
    <li class="nav-item">
        <a
            class="btn btn-outline-info @if(Request::url() == url('/user-payment-info-panel')) active @endif"
            href="{{route('user-payment-info-page')}}"
        >
            Платёжные реквизиты
        </a>
    </li>
    <li class="nav-item">
        <a
            href="{{route('user-mentor-page')}}"
            class="btn btn-outline-info @if(Request::url() == url('/user-mentor-panel')) active @endif"
        >
            Наставник
        </a>
    </li>
</ul>
