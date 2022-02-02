<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CategoryPageController extends Controller
{
    public function index($slug)
    {
        return view('category-page', compact(['slug']));
    }
}
