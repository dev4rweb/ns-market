@extends('layouts.app')

@section('content')
    <div class="user-panel">
        <div class="container">
            @include('parts.user-sidebar')
            <user-work-sc-page></user-work-sc-page>
        </div>
    </div>
@endsection
