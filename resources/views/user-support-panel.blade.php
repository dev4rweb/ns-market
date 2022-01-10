@extends('layouts.app')

@section('content')
<div class="user-panel">
    <div class="container">
        @include('parts.user-sidebar')
        <div class="user-content">
            <div class="row">
                <div class="card news-card">
                    <h3>Здравствуйте, {{Auth::user()->first_name}}!</h3>
                    <h1>User Support Page</h1>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
