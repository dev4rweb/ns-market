<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function user_bank_panel()
    {
        return view('user-pages.user-bank-panel');
    }
}
