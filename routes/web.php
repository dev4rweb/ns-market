<?php

use App\Http\Controllers\AdminPageController;
use App\Http\Controllers\CatalogPageController;
use App\Http\Controllers\ContactsPageController;
use App\Http\Controllers\HomePageController;
use App\Http\Controllers\StockPageController;
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
Route::get('/', [HomePageController::class, 'index'])->name('home-page');
Route::get('/catalog', [CatalogPageController::class, 'index'])->name('catalog-page');
Route::get('/stock', [StockPageController::class, 'index'])->name('stock-page');
Route::get('/contacts', [ContactsPageController::class, 'index'])->name('contacts-page');
