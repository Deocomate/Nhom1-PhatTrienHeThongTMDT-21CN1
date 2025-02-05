<?php

namespace App\Http\Controllers\Client\BusTicketBookingClient;

use App\Http\Controllers\Controller;
use App\Models\BusSystem\RouteDistrict;
use App\Models\BusSystem\RouteProvince;

class BusTicketClientMainController extends Controller
{
    function home()
    {
        $routeProvinces = RouteProvince::with("route_districts")->orderByDesc('priority')->get();
        $routeDistricts = RouteDistrict::orderByDesc('priority')->get();

        return view("client.modules.home.index", compact([
            'routeProvinces',
            'routeDistricts'
        ]));
    }
}
