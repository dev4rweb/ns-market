@extends('layouts.app')

@section('content')
    <div class="user-panel">
        <div class="container">
            @include('parts.user-sidebar')
            <h3>Отчёт о продажах по покупателям</h3>
        </div>
    </div>
@endsection
