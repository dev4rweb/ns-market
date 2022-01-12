@extends('layouts.app')

@section('content')
    <div class="user-panel">
        <div class="container">
            @include('parts.user-sidebar')
            <div class="user-content">
                <div class="row">
                    <div class="card news-card">
                        <h3>мои адреса</h3>
                        <p>
                            В данный момент вы не добавили ни одного адреса. Вы можете сделать это, нажав кнопку
                            «Добавить адрес» ниже.
                        </p>
                    </div>
                </div>
                <div class="row mt-4">
                    <button type="button" class="btn btn-info">
                        Добавить адрес
                    </button>
                </div>
            </div>
        </div>
    </div>
@endsection
