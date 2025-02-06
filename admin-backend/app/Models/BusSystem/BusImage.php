<?php

namespace App\Models\BusSystem;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BusImage extends Model
{
    protected $table = 'bus_images';

    public function bus(): BelongsTo
    {
        return $this->belongsTo(Bus::class, 'bus_id', 'id');
    }
}
