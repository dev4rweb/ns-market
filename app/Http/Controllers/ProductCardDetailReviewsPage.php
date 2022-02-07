<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductCardDetailReviewsPage extends Controller
{
    public function index($fromWhere, $lineSlug, $slug)
    {
        return view('product-card-detail-reviews', compact(['fromWhere','lineSlug','slug']));
    }
}
