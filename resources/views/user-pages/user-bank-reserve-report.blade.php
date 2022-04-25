@extends('layouts.app')

@section('content')
    <div class="user-panel">
        <div class="container">
            @include('parts.user-sidebar')
            <user-my-bank-reserve-report></user-my-bank-reserve-report>
        </div>
    </div>
@endsection
