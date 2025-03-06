<?php

use Illuminate\Support\Facades\Route;

// Admin default and Seeder
use App\Http\Controllers\Admin\SeederController;
use App\Http\Controllers\Admin\AdminController;

// Use Module Controller
use App\Http\Controllers\Admin\PharmacySystem\CategoryController;
use App\Http\Controllers\Admin\PharmacySystem\BlogController;
use App\Http\Controllers\Admin\PharmacySystem\ProductController;
use App\Http\Controllers\Admin\PharmacySystem\AdminManagerController;
use App\Http\Controllers\Admin\PharmacySystem\BlogCategoryController;
use App\Http\Controllers\Admin\PharmacySystem\BrandController;
use App\Http\Controllers\Admin\PharmacySystem\OrderController;

// Authenticate and Middleware auth
use App\Http\Controllers\Auth\LoginController;
use App\Http\Middleware\AuthenticationMiddleware;

// Development
Route::get('/seeder', [SeederController::class, "index"]);
Route::get('/test', [SeederController::class, "seed_pharmacy_database"]);

Route::get('/abc', [SeederController::class, "index"])->name("client.homepage");
// Client
Route::get('/', function () {
    return to_route("admin.index");
})->name("client.index");

// Admin

// Auth
Route::get('/login', [LoginController::class, "login"])->name("admin.login");
Route::get('/logout', [LoginController::class, "logout"])->name("admin.logout");
Route::post('/authenticate', [LoginController::class, "authenticate"])->name("admin.authenticate");

Route::prefix('admin')->name("admin.")->middleware(AuthenticationMiddleware::class)->group(function () {
    // Trang chủ admin
    Route::get('index', [AdminController::class, "index"])->name("index");
    Route::get('test/form', [AdminController::class, "test_form"])->name("test.form");
    Route::post('test/form', [AdminController::class, "test_form_post"])->name("test.form.post");

    // Quản lý nhà thuốc
    Route::resource("brand", BrandController::class);
    Route::resource("blogcategory", BlogCategoryController::class);
    Route::resource("blog", BlogController::class);
    Route::resource("category", CategoryController::class);
    Route::resource("product", ProductController::class);
    Route::resource("order", OrderController::class);

    // Quản trị
    Route::resource("manager", AdminManagerController::class);
});

Route::any('/ckfinder/connector', '\CKSource\CKFinderBridge\Controller\CKFinderController@requestAction')
    ->name('ckfinder_connector');
Route::any('/ckfinder/browser', '\CKSource\CKFinderBridge\Controller\CKFinderController@browserAction')
    ->name('ckfinder_browser');


