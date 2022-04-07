<?php

use App\Http\Controllers\AdminPageController;
use App\Http\Controllers\BasketPageController;
use App\Http\Controllers\CatalogPageController;
use App\Http\Controllers\CategoryPageController;
use App\Http\Controllers\ContactsPageController;
use App\Http\Controllers\HomePageController;
use App\Http\Controllers\InviteController;
use App\Http\Controllers\ListPageController;
use App\Http\Controllers\pages\OrderConfigPageController;
use App\Http\Controllers\pages\OrderDeliveryPageController;
use App\Http\Controllers\pages\OrderPaymentPageController;
use App\Http\Controllers\PartnerCongratulationPage;
use App\Http\Controllers\ProductCardComplectPage;
use App\Http\Controllers\ProductCardDetailPage;
use App\Http\Controllers\ProductCardDetailReviewsPage;
use App\Http\Controllers\ProgramsPageController;
use App\Http\Controllers\ReviewsPageController;
use App\Http\Controllers\StockPageController;
use App\Http\Controllers\UserAddressPageController;
use App\Http\Controllers\UserBecomePartnerPage;
use App\Http\Controllers\UserChooseMentorPageController;
use App\Http\Controllers\UserChoosePayPageController;
use App\Http\Controllers\UserDataPageController;
use App\Http\Controllers\UserInvitePageController;
use App\Http\Controllers\UserMentorChangePageController;
use App\Http\Controllers\UserMentorPageController;
use App\Http\Controllers\UserOrdersPage;
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
Route::get('/user-mentor-change', [UserMentorChangePageController::class, 'index'])->name('user-mentor-change-page');
Route::get('/user-support-panel', [UserSupportPageController::class, 'index'])->name('user-support-page');
Route::get('/user-orders-panel/{fromWhere?}', [UserOrdersPage::class, 'index'])->name('user-orders-page');
Route::get('/user-passport-panel', [UserPassportPageController::class, 'index'])->name('user-passport-page');
Route::get('/user-status-panel', [UserStatusPageController::class, 'index'])->name('user-status-page');
Route::get('/user-become-partner', [UserBecomePartnerPage::class, 'index'])->name('user-become-partner-page');
Route::get('/user-choose-mentor', [UserChooseMentorPageController::class, 'index'])->name('user-choose-mentor-page');
Route::get('/user-choose-pay', [UserChoosePayPageController::class, 'index'])->name('user-choose-pay-page');
Route::get('/user-invite', [UserInvitePageController::class, 'index'])->name('user-invite-page');
Route::get('/partner-congratulation', [PartnerCongratulationPage::class, 'index'])->name('partner-congratulation-page');
Route::get('/user-payment-info-panel', [UserPaymentInfoPageController::class, 'index'])->name('user-payment-info-page');
Route::get('/', [HomePageController::class, 'index'])->name('home-page');
Route::get('/invite/{data}', [InviteController::class, 'inviteUser']);
Route::get('/catalog', [CatalogPageController::class, 'index'])->name('catalog-page');
Route::get('/catalog/products/{slug}', [CategoryPageController::class, 'index'])->name('category-page');
Route::get('/catalog/products-list-favorite/{slug}', [CategoryPageController::class, 'indexFavorite'])->name('category-page-fav');
Route::get('/catalog/programs/{slug}', [ProgramsPageController::class, 'index'])->name('programs-page');
Route::get('/catalog/products-list/{slug}', [ListPageController::class, 'index'])->name('products-list-page');
Route::get('/catalog/{fromWhere}/{lineSlug}/{slug}', [ProductCardDetailPage::class, 'index'])->name('product-detail-page');
Route::get('/catalog-aroma/{fromWhere}/{lineSlug}/{slug}', [ProductCardDetailPage::class, 'indexAroma'])->name('product-aroma-detail-page');
Route::get('/catalog/{fromWhere}/{lineSlug}/{slug}/reviews', [ProductCardDetailReviewsPage::class, 'index'])->name('product-detail-reviews-page');
Route::get('/catalog/{fromWhere}/{lineSlug}/{slug}/kits', [ProductCardComplectPage::class, 'index'])->name('product-detail-kits-page');
Route::get('/stock', [StockPageController::class, 'index'])->name('stock-page');
Route::get('/contacts', [ContactsPageController::class, 'index'])->name('contacts-page');
Route::get('/basket', [BasketPageController::class, 'index'])->name('basket-page');
Route::get('/order-config', [OrderConfigPageController::class, 'index'])->name('order-config-page');
Route::get('/order-delivery', [OrderDeliveryPageController::class, 'index'])->name('order-delivery-page');
Route::get('/order-payment', [OrderPaymentPageController::class, 'index'])->name('order-payment-page');
Route::get('/reviews', [ReviewsPageController::class, 'index'])->name('reviews-page');
