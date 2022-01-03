@extends('layouts.app')

@section('content')
    <div class="user-panel">
        <div class="container">
            <aside>
                <div class="profile-block">
                    <div class="avatar-block">
                        <img src="{{asset('images/avatar-profile.png')}}" alt="ava">
                        <img
                            class="add-photo"
                            src="{{asset('images/ic-camera.svg')}}"
                            alt="icon"
                        >
                    </div>
                    <h2>
                        {{Auth::user()->first_name}} {{Auth::user()->last_name}}
                    </h2>
                    <p>ID: {{Auth::user()->user_id}} <br>Статус: {{Auth::user()->type}}</p>
                    <button
                        class="btn btn-secondary"
                    >
                        Пригласить в New Star
                    </button>
                    <hr>
                </div>
                <ul class="user-sidebar">
                    <li><a href="#">Мои данные</a></li>
                    <li><a href="#">Мои адреса</a></li>
                    <li><a href="#">Мой наставник</a></li>
                    <li><a href="#">Техподдержка</a></li>
                    <li><a href="{{ route('logout') }}"
                           onclick="event.preventDefault();
                            document.getElementById('logout-form').submit();">
                            {{ __('Logout') }}
                        </a>
                    </li>
                </ul>
            </aside>
            <div class="user-content">
                <div class="row">
                    <div class="card news-card">
                        <h3>Здравствуйте, {{Auth::user()->first_name}}!</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="card news-card">
                        <img class="img-preview" src="{{asset('images/news-one.png')}}" alt="card">
                        <div class="card-body news-content">
                            <h3>Заголовок новости</h3>
                            <p>Краткое описание Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna....</p>
                            <div class="btn-wrapper">
                                <button class="btn btn-outline-info">Читать далее</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="card news-card">
                        <img class="img-preview" src="{{asset('images/news-two.png')}}" alt="card">
                        <div class="card-body news-content">
                            <h3>Заголовок новости</h3>
                            <p>Краткое описание Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna....</p>
                            <div class="btn-wrapper">
                                <button class="btn btn-outline-info">Читать далее</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
