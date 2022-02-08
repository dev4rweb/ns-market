<header class="shadow-sm bg-white">
    <div class="navbar navbar-light bg-white desktop-header">
        <div class="container d-flex justify-content-between" style="margin-top: 30px;">
            <a class="navbar-brand" href="{{route('home-page')}}">
                {{--            {{ config('app.name', 'Laravel') }}--}}
                <img
                    src="{{asset('/images/NS_logo.png')}}"
                    class="brand-logo"
                    alt="logo">
            </a>

            <div class="input-header-search">
                <input type="text" placeholder="Поиск">
                <button
                    class="btn btn-info"
                >
                    <img src="{{asset('/images/ic-search.png')}}" alt="icon">
                </button>
            </div>

            <div class="header-btn-wrapper">
                @guest
                    <button
                        class="header-btn"
                        data-toggle="modal"
                        data-target="#loginModal"
                        onclick="setTimeout(()=>{document.getElementById('loginFormInput').focus()}, 1000);"
                    >
                        <img class="profile-icon" src="{{asset('/images/ic-profile.png')}}" alt="profile">
                        <span class="profile-title">Войти</span>
                    </button>
                @else
                    <a
                        href="{{route('user-page')}}"
                        class="header-btn"
                    >
                        <img class="profile-icon" src="{{asset('/images/ic-profile.png')}}" alt="profile">
                        <span class="profile-title">{{Auth::user()->name}}</span>
                    </a>
                @endguest
                <a class="header-btn" href="{{route('home-page')}}">
                    <img class="profile-icon" src="{{asset('/images/ic-orders.png')}}" alt="profile">
                    <span class="profile-title">Заказы</span>
                </a>

<!--                <a class="header-btn" href="{{route('home-page')}}">
                    <img class="profile-icon" src="{{asset('/images/ic-backet.png')}}" alt="profile">
                    <span class="profile-title">Корзина</span>
                </a>-->
                <basket-btn></basket-btn>
            </div>
        </div>
    </div>
    <nav class="navbar navbar-light bg-white desktop-header">
        <div class="container btn-group header-navigation desktop-header" style="margin-bottom: 50px">
            <a class="btn btn-outline-info btn-lg @if(Request::url() == url('/')) active @endif"
               href="{{route('home-page')}}">Главная</a>
            <a class="btn btn-outline-info btn-lg @if(str_contains(Request::url(),url('/catalog')) ) active @endif"
               href="{{route('catalog-page')}}">Каталог</a>
            <a class="btn btn-outline-info btn-lg @if(Request::url() == url('/stock')) active @endif"
               href="{{route('stock-page')}}">Акции</a>
            <a class="btn btn-outline-info btn-lg @if(Request::url() == url('/contacts')) active @endif"
               href="{{route('contacts-page')}}">Контакты</a>
        </div>
    </nav>
    <nav class="navbar navbar-expand-md navbar-light bg-white mobile-header">

        <div class="container">
            <a class="navbar-brand" href="{{route('home-page')}}">
                {{--            {{ config('app.name', 'Laravel') }}--}}
                <img
                    src="{{asset('/images/NS_logo.png')}}"
                    class="brand-logo"
                    alt="logo">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">

                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link @if(Request::url() == url('/')) active @endif" href="{{route('home-page')}}">Главная</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link @if(Request::url() == url('/catalog')) active @endif"
                           href="{{route('catalog-page')}}">Каталог</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link @if(Request::url() == url('/stock')) active @endif"
                           href="{{route('stock-page')}}">Акции</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link @if(Request::url() == url('/contacts')) active @endif"
                           href="{{route('contacts-page')}}">Контакты</a>
                    </li>
                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ms-auto">
                    <!-- Authentication Links -->
                    @guest
                        @if (Route::has('login'))
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                            </li>
                        @endif

                        @if (Route::has('register'))
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                            </li>
                        @endif
                    @else
                        <li class="nav-item dropdown">
                            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button"
                               data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                {{ Auth::user()->name }}
                            </a>

                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="{{ route('logout') }}"
                                   onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                    {{ __('Logout') }}
                                </a>

                                <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                    @csrf
                                </form>
                            </div>
                        </li>
                    @endguest
                </ul>
            </div>
        </div>
    </nav>
</header>
@include('auth.login-modal')
