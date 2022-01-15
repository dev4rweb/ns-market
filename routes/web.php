<?php

use App\Http\Controllers\AdminPageController;
use App\Http\Controllers\CatalogPageController;
use App\Http\Controllers\ContactsPageController;
use App\Http\Controllers\HomePageController;
use App\Http\Controllers\StockPageController;
use App\Http\Controllers\UserAddressPageController;
use App\Http\Controllers\UserDataPageController;
use App\Http\Controllers\UserMentorPageController;
use App\Http\Controllers\UserPageController;
use App\Http\Controllers\UserPassportPageController;
use App\Http\Controllers\UserPaymentInfoPageController;
use App\Http\Controllers\UserStatusPageController;
use App\Http\Controllers\UserSupportPageController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/welcome', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/admin-panel', [AdminPageController::class, 'index'])->name('admin-page');
Route::get('/user-panel', [UserPageController::class, 'index'])->name('user-page');
Route::get('/user-data-panel', [UserDataPageController::class, 'index'])->name('user-data-page');
Route::get('/user-address-panel', [UserAddressPageController::class, 'index'])->name('user-address-page');
Route::get('/user-mentor-panel', [UserMentorPageController::class, 'index'])->name('user-mentor-page');
Route::get('/user-support-panel', [UserSupportPageController::class, 'index'])->name('user-support-page');
Route::get('/user-passport-panel', [UserPassportPageController::class, 'index'])->name('user-passport-page');
Route::get('/user-status-panel', [UserStatusPageController::class, 'index'])->name('user-status-page');
Route::get('/user-payment-info-panel', [UserPaymentInfoPageController::class, 'index'])->name('user-payment-info-page');
Route::get('/', [HomePageController::class, 'index'])->name('home-page');
Route::get('/catalog', [CatalogPageController::class, 'index'])->name('catalog-page');
Route::get('/stock', [StockPageController::class, 'index'])->name('stock-page');
Route::get('/contacts', [ContactsPageController::class, 'index'])->name('contacts-page');
