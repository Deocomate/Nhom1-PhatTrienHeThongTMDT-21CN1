<?php

namespace App\Models\BusSystem;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CompanyRouteBus extends Model
{
    protected $table = 'company_route_buses';

    public function bus(): BelongsTo
    {
        return $this->belongsTo(Bus::class);
    }

    public function bus_company_route(): BelongsTo
    {
        return $this->belongsTo(BusCompanyRoute::class, 'bus_company_route_id', 'id');
    }
}
