@extends('layouts.app')

@section('content')
    <div class="user-panel">
        <div class="container">
            @include('parts.user-sidebar')
            <div class="user-content">
                <div class="row">
                    <div class="card data-card mb-5">
                        <h3>Работа СЦ</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
