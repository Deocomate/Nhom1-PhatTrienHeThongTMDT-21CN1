<?php

namespace App\Http\Controllers\Client\BusTicketBookingClient;

use App\Http\Controllers\Controller;
use App\Models\BusSystem\CompanyRouteBus;
use App\Models\BusSystem\District;
use App\Models\BusSystem\Province;
use App\Models\BusSystem\RouteDistrict;
use App\Models\BusSystem\RouteProvince;
use Illuminate\Http\Request;

class FindTicketController extends Controller
{
    public function find_bus(Request $request)
    {
        $validated = $request->validate([
            "district_id_start" => "required|exists:App\Models\BusSystem\District,id",
            "district_id_end" => "required|exists:App\Models\BusSystem\District,id",
            "date" => "required",
        ]);

        $districtStart = District::find($validated['district_id_start']);
        $districtEnd = District::find($validated['district_id_end']);
        $provinceStart = Province::find($districtStart->province_id);
        $provinceEnd = Province::find($districtEnd->province_id);

        // Store Data to Session
        $request->session()->put("districtStart", $districtStart);
        $request->session()->put("districtEnd", $districtEnd);
        $request->session()->put("date", $validated['date']);
        //

        $routeDistrict = RouteDistrict::where([
            'district_id_start' => $districtStart->id,
            'district_id_end' => $districtEnd->id,
        ])->first();

        $routeProvince = RouteProvince::where([
            'province_id_start' => $provinceStart->id,
            'province_id_end' => $provinceEnd->id,
        ])->first();

        $topLinks = RouteProvince::all();

        $busCompanyRoutes = [];

        $seo = [
            'title' => "",
            'description' => "",
            'image' => "",
        ];


        if ($routeDistrict != null) {
            $busCompanyRoutes = $routeDistrict->bus_company_routes->merge($routeDistrict->route_province->bus_company_routes);
            return to_route('client.find_bus_get', ["slug" => $routeDistrict->slug]);
        }

        if ($routeProvince != null) {
            $busCompanyRoutes = $routeProvince->bus_company_routes;
            return to_route('client.find_bus_get', ["slug" => $routeProvince->slug]);
        }

        return view("client.modules.bus.list", compact(['topLinks', 'seo', 'busCompanyRoutes', 'districtStart', 'districtEnd']));
    }

    public function find_bus_get($slug, Request $request)
    {
        $districtStart = session("districtStart");
        $districtEnd = session("districtEnd");

        $routeDistrict = RouteDistrict::where("slug", $slug)->first();
        $routeProvince = RouteProvince::where("slug", $slug)->first();

        $topLinks = RouteProvince::all();

        $busCompanyRoutes = [];

        $seo = [
            'title' => "",
            'description' => "",
            'image' => "",
        ];

        if ($routeProvince != null) {
            $busCompanyRoutes = $routeProvince->bus_company_routes;

            $seo['title'] = $routeProvince->title;
            $seo['description'] = $routeProvince->description;
            $seo['image'] = $routeProvince->thumbnail;
        }

        if ($routeDistrict != null) {
            $busCompanyRoutes = $routeDistrict->bus_company_routes->merge($routeDistrict->route_province->bus_company_routes);

            $seo['title'] = $routeDistrict->title;
            $seo['description'] = $routeDistrict->description;
            $seo['image'] = $routeDistrict->thumbnail;
        }

        return view("client.modules.bus.list", compact(['busCompanyRoutes', 'seo', 'districtStart', 'districtEnd', 'topLinks']));

    }

    public function detail_bus($slug, Request $request)
    {
        $busDetail = CompanyRouteBus::where("slug", $slug)->first();
        $busCompany = $busDetail->bus->bus_company;

        $districtStart = $request->session()->get('districtStart');
        $districtEnd = $request->session()->get('districtEnd');

        $pickupList = $busCompany->bus_stations->where('district_id', $districtStart->id);

        $dropoffList = $busCompany->bus_stations->where('district_id', $districtEnd->id);


        return view("client.modules.bus.detail", compact(['busDetail', 'busCompany', 'pickupList', 'dropoffList']));
    }
}
