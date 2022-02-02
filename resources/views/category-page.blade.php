@extends('layouts.app')

@section('content')
    <div>
        <category-page
            :slug='@json($slug)'
        >
        </category-page>
    </div>
@endsection

