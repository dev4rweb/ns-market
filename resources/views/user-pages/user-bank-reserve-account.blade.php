@extends('layouts.app')

@section('content')
    <div class="user-panel">
        <div class="container">
            @include('parts.user-sidebar')
            <user-my-bank-reserve-account></user-my-bank-reserve-account>
        </div>
    </div>
@endsection
