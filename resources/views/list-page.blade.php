@extends('layouts.app')

@section('content')
    <div>
        <product-list-page
            :slug='@json($slug)'
        >
        </product-list-page>
    </div>
@endsection
