<?php

namespace App\Models\TourSystem;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'thumbnail',
        'priority',
        'blogcategory_id',
    ];

    public function blogCategory()
    {
        return $this->belongsTo(BlogCategory::class, 'blogcategory_id'); // Thêm foreign key nếu cần thiết
    }
}
