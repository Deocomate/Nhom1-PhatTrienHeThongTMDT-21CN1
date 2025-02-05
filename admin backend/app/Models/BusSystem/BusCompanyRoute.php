<?php

namespace App\Models\BusSystem;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class BusCompanyRoute extends Model
{
    protected $table = "bus_company_routes";

    public function bus_company(): BelongsTo
    {
        return $this->belongsTo(BusCompany::class);
    }

    public function route_province(): BelongsTo
    {
        return $this->belongsTo(RouteProvince::class);
    }

    public function route_districts(): BelongsToMany
    {
        return $this->belongsToMany(RouteDistrict::class, CompanyRouteDistrict::class);
    }

    public function company_route_buses(): HasMany
    {
        return $this->hasMany(CompanyRouteBus::class);
    }
}
