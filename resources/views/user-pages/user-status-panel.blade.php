@extends('layouts.app')

@section('content')
    <div class="user-panel data-panel">
        <div class="container">
            @include('parts.user-sidebar')

            <div>
                @include('parts.nab-user-data')
                <user-status-panel></user-status-panel>
            </div>
        </div>
    </div>
@endsection
