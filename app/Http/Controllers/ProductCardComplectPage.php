<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductCardComplectPage extends Controller
{
    public function index($fromWhere, $lineSlug, $slug)
    {
        return view('product-card-complect-page', compact(['fromWhere','lineSlug','slug']));
    }
}
