<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductCardDetailPage extends Controller
{
    public function index($fromWhere, $lineSlug, $slug)
    {
        return view('product-card-detail', compact(['fromWhere','lineSlug','slug']));
    }
}
