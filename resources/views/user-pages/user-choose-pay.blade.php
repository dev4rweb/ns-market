@extends('layouts.app')

@section('content')
    <div class="user-panel">
        <div class="container">
            @include('parts.user-sidebar')
            <div>
                <user-choose-pay-page></user-choose-pay-page>
            </div>
        </div>
    </div>
@endsection
