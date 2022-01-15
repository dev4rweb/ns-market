@extends('layouts.app')

@section('content')
<div class="user-panel">
    <div class="container">
        @include('parts.user-sidebar')
        <div>
            @include('parts.nab-user-data')
            <user-mentor-panel></user-mentor-panel>
        </div>
    </div>
</div>
@endsection
