@extends('layouts.app')

@section('content')
    <div class="user-panel">
        <div class="container">
            @include('parts.user-sidebar')
            <div>
                <user-invite-page></user-invite-page>
            </div>
        </div>
    </div>
@endsection
