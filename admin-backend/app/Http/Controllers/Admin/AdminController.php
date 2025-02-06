<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\BusSystem\BusCompany;
use Barryvdh\Debugbar\Facades\Debugbar;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index()
    {
        return view('admin.modules.home.index');
    }

    public function test_form()
    {
        return view('admin.modules.home.form');
    }

    public function test_form_post(Request $request)
    {
        Debugbar::info($request->all());
        return view('admin.modules.home.form');
    }
}
