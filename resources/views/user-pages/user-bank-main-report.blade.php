@extends('layouts.app')

@section('content')
    <div class="user-panel">
        <div class="container">
            @include('parts.user-sidebar')
            <user-my-bank-main-report></user-my-bank-main-report>
        </div>
    </div>
@endsection
