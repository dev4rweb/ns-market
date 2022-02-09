<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BasketPageController extends Controller
{
    public function index()
    {
        return view('basket');
    }
}
