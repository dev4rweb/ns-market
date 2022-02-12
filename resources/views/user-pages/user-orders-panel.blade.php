@extends('layouts.app')

@section('content')
    <div class="user-panel">
        <div class="container">
            @include('parts.user-sidebar')
            <div class="user-content">
                <div class="row">
                    <h3>My Orders</h3>
                </div>
            </div>
        </div>
    </div>
@endsection
