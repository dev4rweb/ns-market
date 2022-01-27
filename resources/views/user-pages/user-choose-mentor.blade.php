@extends('layouts.app')

@section('content')
<div class="user-panel">
    <div class="container">
        @include('parts.user-sidebar')
        <div>
            <div>
                <user-mentor-change-page
                    :data='@json($data)'
                >
                </user-mentor-change-page>
            </div>
        </div>
    </div>
</div>
@endsection
