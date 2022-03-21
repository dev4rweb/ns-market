@extends('layouts.app')

@section('content')
    <div>
{{--        <h1>Aroma</h1>--}}
        {{--        <h1>Detail Card {{$fromWhere}} {{$lineSlug}} {{$slug}}</h1>--}}
        <product-aroma-detail-page
            :slug='@json($slug)'
        >
        </product-aroma-detail-page>
    </div>
@endsection
