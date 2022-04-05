<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>
{{--    <script src="{{ asset('js/jquery-1.2.6.pack.js') }}" defer></script>--}}
{{--    <script src="{{ asset('js/jquery.ajaxQueue.js') }}" defer></script>--}}
{{--    <script src="{{ asset('js/jquery.autocomplete.pack.js') }}" defer></script>--}}
    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css" integrity="sha384-ejwKkLla8gPP8t2u0eQyL0Q/4ItcnyveF505U0NIobD/SMsNyXrLti6CWaD0L52l" crossorigin="anonymous">

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
          integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
@if(auth()->check())
    <script>
        window.User = {!! auth()->user()  !!}
    </script>
@endif
<div id="app">

    @include('parts.header')

    {{--        <main class="py-4">--}}
    <main>
        @yield('content')
    </main>

    @include('parts.footer')
    <modal-success-message></modal-success-message>
    <toast></toast>
    <loader></loader>

    <!-- Button trigger modal -->
    <button
        type="button"
        class="btn btn-primary"
        style="display:none;"
        data-bs-toggle="modal"
        id="modalSuccessMessage"
        data-bs-target="#modalSuccessMsg">
        ModalSuccess
    </button>
</div>
{{--    @include('auth.login-modal')--}}
{{--    <modal-login></modal-login>--}}

<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF"
        crossorigin="anonymous"></script>
</body>
</html>
