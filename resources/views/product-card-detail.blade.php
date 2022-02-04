@extends('layouts.app')

@section('content')
    <div>
{{--        <h1>Detail Card {{$fromWhere}} {{$lineSlug}} {{$slug}}</h1>--}}
        <product-detail-page
            :slug='@json($slug)'
        >
        </product-detail-page>
    </div>
@endsection
