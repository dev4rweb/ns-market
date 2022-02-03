<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProgramsPageController extends Controller
{
    public function index($slug)
    {
        return view('programs-page', compact(['slug']));
    }
}
