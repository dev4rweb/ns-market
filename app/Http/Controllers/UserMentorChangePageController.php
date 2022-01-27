<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserMentorChangePageController extends Controller
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
            'title' => 'Смена наставника',
            'content' => 'Введите номер телефона действующего Партнёра New Star, которого Вы хотите выбрать в качестве наставника.',
            'isBecomePartner' => false
        ];
        return view('user-pages.user-mentor-change', compact(['data']));
    }
}
