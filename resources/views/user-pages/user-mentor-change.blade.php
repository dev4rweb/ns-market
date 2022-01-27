@extends('layouts.app')

@section('content')
    <div class="user-panel">
        <div class="container">
            @include('parts.user-sidebar')
            <div>
                @include('parts.nab-user-data')
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
