<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserChooseMentorPageController extends Controller
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
        $data = [
            'title' => 'Проверьте данные Вашего Наставника.',
            'content' => 'Введите номер телефона Вашего наставника в New Star',
            'isBecomePartner' => true
        ];
        return view('user-pages.user-choose-mentor', compact(['data']));
    }
}
