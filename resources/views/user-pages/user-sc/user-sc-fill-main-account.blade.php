@extends('layouts.app')

@section('content')
    <div class="user-panel">
        <div class="container">
            @include('parts.user-sidebar')
            <user-sc-fill-main-account></user-sc-fill-main-account>
        </div>
    </div>
@endsection
