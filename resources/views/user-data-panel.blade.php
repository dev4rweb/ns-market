@extends('layouts.app')

@section('content')
    <div class="user-panel data-panel">
        <div class="container">
            @include('parts.user-sidebar')
            <user-data-panel></user-data-panel>
        </div>
    </div>
@endsection