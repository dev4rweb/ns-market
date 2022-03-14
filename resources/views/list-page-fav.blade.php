@extends('layouts.app')

@section('content')
    <div>
        <product-list-page-fav
            :slug='@json($slug)'
        >
        </product-list-page-fav>
    </div>
@endsection
