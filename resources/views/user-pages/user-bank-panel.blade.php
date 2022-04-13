@extends('layouts.app')

@section('content')
    <div class="user-panel">
        <div class="container">
            @include('parts.user-sidebar')
            <user-my-bank-panel></user-my-bank-panel>
        </div>
    </div>
@endsection
