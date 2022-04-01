@extends('layouts.app')

@section('content')
    <div class="user-panel">
        <div class="container">
            @include('parts.user-sidebar')
            <div class="user-content">
                <div class="row">
                    <div class="card news-card">
                        <h3>Здравствуйте, {{Auth::user()->first_name}}!</h3>
                    </div>
                </div>
                <user-panel-page></user-panel-page>
<!--                <div class="row">
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
                </div>-->
            </div>
        </div>
    </div>
@endsection
