<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function user_bank_panel()
    {
        return view('user-pages.user-bank-panel');
    }

    public function user_bank_bonus_mark()
    {
        return view('user-pages.user-bank-bonus-account');
    }

    public function user_bank_bonus_report()
    {
        return view('user-pages.user-bank-bonus-report');
    }

    public function user_bank_reserve()
    {
        return view('user-pages.user-bank-reserve-account');
    }

    public function user_bank_reserve_report()
    {
        return view('user-pages.user-bank-reserve-report');
    }

    public function user_bank_main()
    {
        return view('user-pages.user-bank-main-account');
    }

    public function user_bank_main_report()
    {
        return view('user-pages.user-bank-main-report');
    }

    public function user_bank_bonus_rub()
    {
        return view('user-pages.user-bank-bonus-rub-account');
    }

    public function user_bank_bonus_rub_report()
    {
        return view('user-pages.user-bank-bonus-rub-report');
    }

    public function user_service_center()
    {
        return view('user-pages.user-service-center');
    }
}
