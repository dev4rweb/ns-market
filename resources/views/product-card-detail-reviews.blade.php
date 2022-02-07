@extends('layouts.app')

@section('content')
    <div>
        {{--        <h1>Detail Card {{$fromWhere}} {{$lineSlug}} {{$slug}}</h1>--}}
        <product-detail-reviews-page
            :slug='@json($slug)'
        >
        </product-detail-reviews-page>
    </div>
@endsection
