@extends('layouts.app')

@section('content')
    <div class="user-panel">
        <div class="container">
            @include('parts.user-sidebar')
            <user-my-bank-main-account></user-my-bank-main-account>
        </div>
    </div>
@endsection
