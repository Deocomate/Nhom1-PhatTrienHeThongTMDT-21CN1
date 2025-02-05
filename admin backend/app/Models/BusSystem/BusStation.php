<?php

namespace App\Models\BusSystem;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BusStation extends Model
{
    protected $table = 'bus_stations';

    public function bus_company(): BelongsTo
    {
        return $this->belongsTo(BusCompany::class);
    }

    public function district(): BelongsTo
    {
        return $this->belongsTo(District::class);
    }
}
