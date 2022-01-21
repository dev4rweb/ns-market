@extends('layouts.app')

@section('content')
    <div class="user-panel">
        <div class="container">
            @include('parts.user-sidebar')
            <div>
                @include('parts.nab-user-data')
                <div class="user-content">
                    <user-address-panel></user-address-panel>
                </div>
            </div>
        </div>
    </div>
@endsection
