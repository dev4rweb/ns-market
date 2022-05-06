@extends('layouts.app')

@section('content')
    <div class="user-panel">
        <div class="container">
            @include('parts.user-sidebar')
            <user-my-bank-bonus-rub-account></user-my-bank-bonus-rub-account>
        </div>
    </div>
@endsection
