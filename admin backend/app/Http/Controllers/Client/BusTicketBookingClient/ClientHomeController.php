<?php

namespace App\Http\Controllers\Client\BusTicketBookingClient;

use App\Http\Controllers\Controller;
use App\Models\TourSystem\Tour;
use Barryvdh\Debugbar\Facades\Debugbar;

class ClientHomeController extends Controller
{
    public function index()
    {
        $categories = \DB::table("categories")->get();
        $contact = \DB::table("contact")->first();
        $tours = Tour::all();
        $destinations = \DB::table("destinations")->get();

        Debugbar::info($categories, $contact, $tours, $destinations);
        return view("client.modules.home.index", compact("tours", "contact", "categories", "destinations"));
    }
}
