<?php

namespace App\Models\BusSystem;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Bus extends Model
{
    protected $table = "buses";

    public function bus_images(): HasMany
    {
        return $this->hasMany(BusImage::class, 'bus_id', 'id');
    }

    public function bus_company(): BelongsTo
    {
        return $this->belongsTo(BusCompany::class, 'bus_company_id', 'id');
    }
}
