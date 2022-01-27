@extends('layouts.app')

@section('content')
    <div class="user-panel">
        <div class="container">
            @include('parts.user-sidebar')
            <div>
                <partner-congratulation-page></partner-congratulation-page>
            </div>
        </div>
    </div>
@endsection
