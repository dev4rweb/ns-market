@extends('layouts.app')

@section('content')
<div class="user-panel">
    <div class="container">
        @include('parts.user-sidebar')
        <div class="user-content">
            <div class="row">
                <user-support-panel></user-support-panel>
            </div>
        </div>
    </div>
</div>
@endsection
