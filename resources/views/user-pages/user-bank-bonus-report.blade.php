@extends('layouts.app')

@section('content')
    <div class="user-panel">
        <div class="container">
            @include('parts.user-sidebar')
            <user-my-bank-bonus-mark-report></user-my-bank-bonus-mark-report>
        </div>
    </div>
@endsection
