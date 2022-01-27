@extends('layouts.app')

@section('content')
    <div class="user-panel">
        <div class="container">
            @include('parts.user-sidebar')
            <user-become-status></user-become-status>
        </div>
    </div>
@endsection
