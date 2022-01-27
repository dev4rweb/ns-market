<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserBecomePartnerPage extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('user-pages.user-become-partner');
    }
}
