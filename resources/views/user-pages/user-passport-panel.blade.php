@extends('layouts.app')

@section('content')
    <div class="user-panel data-panel">
        <div class="container">
            @include('parts.user-sidebar')

            <div>
                @include('parts.nab-user-data')
                <div>
                    Passport
                </div>
            </div>
        </div>
    </div>
@endsection
