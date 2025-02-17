<?php

namespace App\Models\TourSystem;

use Illuminate\Database\Eloquent\Model;

class BlogCategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'thumbnail',
        'priority',
    ];

    public function blogs()
    {
        return $this->hasMany(Blog::class, 'blogcategory_id'); // Thêm foreign key nếu cần thiết
    }
}
