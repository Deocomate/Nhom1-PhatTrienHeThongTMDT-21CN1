<?php

use App\Http\Controllers\Admin\{AdminController,
    SeederController,
    TourSystem\CategoryController,
    TourSystem\ContactController,
    TourSystem\DestinationController,
    TourSystem\TourController
    
};


use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Client\{BusTicketBookingClient\ClientHomeController};
use App\Http\Middleware\AuthenticationMiddleware;
use Illuminate\Support\Facades\Route;

// Development
Route::get('/seeder', [SeederController::class, "index"]);

// Client
Route::get('/', [ClientHomeController::class, "index"])->name("client.index");
Route::get('/', [ClientHomeController::class, "index"])->name("client.homepage");

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

    // Các chức năng chính dựa theo module (Đây là các module mẫu)
    Route::resource("category", CategoryController::class);
    Route::resource("destination", DestinationController::class);
    Route::resource("tour", TourController::class);
    Route::resource("contact", ContactController::class)
        ->except("create", "show", "edit", "destroy", "store");

    // BlogCategory
    Route::resource("blogcategory", BlogCategoryController::class);
    Route::resource("blog", BlogController::class);

});

Route::any('/ckfinder/connector', '\CKSource\CKFinderBridge\Controller\CKFinderController@requestAction')
    ->name('ckfinder_connector');
Route::any('/ckfinder/browser', '\CKSource\CKFinderBridge\Controller\CKFinderController@browserAction')
    ->name('ckfinder_browser');


