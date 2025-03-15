<?php

namespace App\Models\AnKhangPharmacy;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PharmacyHomePage extends Model
{
    use HasFactory;

    protected $table = 'pharmacy_homepage';

    protected $fillable = [
        'top_banner',
        'banner_2',
        'banner_3',
        'category_1_banner',
        'category_1_title',
        'category_1_id',
        'category_2_banner',
        'category_2_title',
        'category_2_id',
        'most_searches',
    ];

    protected $casts = [
        'top_banner' => 'array', // Chuyển đổi sang kiểu array
        'most_searches' => 'array', // Chuyển đổi sang kiểu array
    ];
}
