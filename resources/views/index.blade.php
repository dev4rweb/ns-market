@extends('layouts.app')

@section('content')
    <div>
    @include('pages-parts.home-page.stock')
    @include('pages-parts.home-page.advantage')
    @include('pages-parts.home-page.reviews')
    @include('pages-parts.home-page.mobile-hands')
{{--    @include('auth.login-modal')--}}
    <!--        <example-component></example-component>
        <test-component></test-component>-->

    </div>
@endsection
