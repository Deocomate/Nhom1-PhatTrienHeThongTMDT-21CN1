<?php

namespace App\Models\BusSystem;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class RouteProvince extends Model
{
    protected $table = "route_provinces";

    public function route_districts(): HasMany
    {
        return $this->hasMany(RouteDistrict::class);
    }

    public function bus_company_routes(): HasMany
    {
        return $this->hasMany(BusCompanyRoute::class, 'bus_company_id', 'id');
    }

    public function province_start(): BelongsTo
    {
        return $this->belongsTo(Province::class, 'province_id_start', 'id');
    }

    public function province_end(): BelongsTo
    {
        return $this->belongsTo(Province::class, 'province_id_end', 'id');
    }

}
