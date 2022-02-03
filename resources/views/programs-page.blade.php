@extends('layouts.app')

@section('content')
    <div>
        <product-programs-page
            :slug='@json($slug)'
        >
        </product-programs-page>
    </div>
@endsection
