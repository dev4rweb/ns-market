@extends('layouts.app')

@section('content')
    <div class="user-panel">
        <div class="container">
            @include('parts.user-sidebar')
            <user-orders-panel></user-orders-panel>
        </div>
    </div>
@endsection
