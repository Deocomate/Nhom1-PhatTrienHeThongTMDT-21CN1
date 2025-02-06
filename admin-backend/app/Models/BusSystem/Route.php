<?php

namespace App\Models\BusSystem;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Route extends Model
{
    protected $table = "routes";

    // Mối quan hệ cho tỉnh pick-up
    public function pickupProvince(): BelongsTo
    {
        return $this->belongsTo(Province::class, 'pickup_province_id', 'id');
    }

    // Mối quan hệ cho tỉnh drop-off
    public function dropoffProvince(): BelongsTo
    {
        return $this->belongsTo(Province::class, 'dropoff_province_id', 'id');
    }
}
