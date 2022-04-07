<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ReviewsPageController extends Controller
{
    public function index()
    {
        return view('reviews-page');
    }
}
