<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CategoryPageController extends Controller
{
    public function index($slug)
    {
        return view('category-page', compact(['slug']));
    }

    public function indexFavorite($slug)
    {
        return view('list-page-fav', compact(['slug']));
    }
}
