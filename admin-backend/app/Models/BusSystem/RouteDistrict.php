<?php

namespace App\Models\BusSystem;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class RouteDistrict extends Model
{
    protected $table = 'route_districts';

    public function route_province(): BelongsTo
    {
        return $this->belongsTo(RouteProvince::class, 'route_province_id', 'id');
    }

    public function district_start(): BelongsTo
    {
        return $this->belongsTo(District::class, 'district_id_start', 'id');
    }

    public function district_end(): BelongsTo
    {
        return $this->belongsTo(District::class, 'district_id_end', 'id');
    }

    public function bus_company_routes(): BelongsToMany
    {
        return $this->belongsToMany(BusCompanyRoute::class, CompanyRouteDistrict::class);
    }
}
