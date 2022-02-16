<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class InviteController extends Controller
{
    public function inviteUser($data)
    {
        $invite = base64_decode($data);

        return Redirect::route('home-page')->with(['invite' => $invite]);
    }
}
