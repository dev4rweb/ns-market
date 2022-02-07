@extends('layouts.app')

@section('content')
<div>
    {{--        <h1>Detail Card {{$fromWhere}} {{$lineSlug}} {{$slug}}</h1>--}}
    <product-detail-complectations-page
        :slug='@json($slug)'
    >
    </product-detail-complectations-page>
</div>
@endsection
