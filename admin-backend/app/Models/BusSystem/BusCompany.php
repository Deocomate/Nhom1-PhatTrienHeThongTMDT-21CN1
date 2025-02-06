<?php

namespace App\Models\BusSystem;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class BusCompany extends Model
{
    protected $table = 'bus_companies';

    public function buses(): HasMany
    {
        return $this->hasMany(Bus::class, 'bus_company_id', 'id');
    }

    public function bus_stations(): HasMany
    {
        return $this->hasMany(BusStation::class);
    }
}
