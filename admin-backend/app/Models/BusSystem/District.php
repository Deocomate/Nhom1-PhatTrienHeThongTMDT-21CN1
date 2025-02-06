<?php

namespace App\Models\BusSystem;

use App\Models\BusSystem\Province;
use App\Models\Tour;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class District extends Model
{
    protected $table = 'districts';

    public function tours(): BelongsToMany
    {
        return $this->belongsToMany(Tour::class, 'tour_locations', 'district_id', 'tour_id');
    }

    public function province(): BelongsTo
    {
        return $this->belongsTo(Province::class);
    }
}
