<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StockPageController extends Controller
{
    public function index()
    {
        return view('stock');
    }
}
