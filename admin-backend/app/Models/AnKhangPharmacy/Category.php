<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $table = 'categories'; // Xác định tên bảng

    protected $fillable = [
        'name',
        'thumbnail',
        'priority',
        'parent_id',
    ];

    /**
     * Lấy danh mục cha (Self-referencing Relationship)
     */
    public function parent()
    {
        return $this->belongsTo(Category::class, 'parent_id');
    }

    /**
     * Lấy danh mục con
     */
    public function children()
    {
        return $this->hasMany(Category::class, 'parent_id');
    }
}
