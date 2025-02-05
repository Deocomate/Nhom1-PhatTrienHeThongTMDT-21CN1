<?php

namespace App\Providers;

use App\Models\BusSystem\District;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        if (Schema::hasTable("web_info")) {
            $webInfo = \DB::table("web_info")->first();
            View::share("webInfo", $webInfo);

            $districtStart = session()->get("districtStart");
            $districtEnd = session()->get('districtEnd');

            if ($districtStart == null || $districtEnd == null) {
                $districtStart = District::orderByDesc("priority")->first();
                $districtEnd = District::orderByDesc("priority")->skip(1)->first();
                session()->put('districtStart', $districtStart);
                session()->put('districtEnd', $districtEnd);
            }
        }
    }
}
