<?php

namespace App\Models\TourSystem;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tour extends Model
{
    protected $table = 'tours';

    protected $guarded = [];

    protected function casts(): array
    {
        return [
            'categories' => 'array',
            'itinerary' => 'array',
            'highlights' => 'array',
            'includes' => 'array',
            'excludes' => 'array',
            'images' => 'array',
        ];
    }
}
