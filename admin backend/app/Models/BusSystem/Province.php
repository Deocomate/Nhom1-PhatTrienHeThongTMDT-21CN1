<?php

namespace App\Models\BusSystem;

use App\Models\BusSystem\District;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Province extends Model
{
    protected $table = "provinces";

    public function districts(): HasMany
    {
        return $this->hasMany(District::class);
    }
}
