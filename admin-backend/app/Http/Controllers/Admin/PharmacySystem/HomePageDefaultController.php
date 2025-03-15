<?php

namespace App\Http\Controllers\Admin\PharmacySystem;

use App\Http\Controllers\Controller;
use App\Models\AnKhangPharmacy\PharmacyHomePage;

// Sử dụng model vừa tạo.
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;


class HomePageDefaultController extends Controller
{
    public function index()
    {
        // Lấy bản ghi đầu tiên (hoặc tạo mới nếu chưa có)
        $homePageSettings = PharmacyHomePage::first();

        if (!$homePageSettings) {
            $homePageSettings = PharmacyHomePage::create([
                // Các giá trị mặc định, bạn có thể tùy chỉnh
                'top_banner' => [],
                'banner_2' => '',
                'banner_3' => '',
                'category_1_banner' => '',
                'category_1_title' => '',
                'category_1_id' => null,
                'category_2_banner' => '',
                'category_2_title' => '',
                'category_2_id' => null,
                'most_searches' => [],
            ]);
        }

        $categories = DB::table('categories')->get(); // Để chọn category_1_id và category_2_id

        return view('admin.modules.homepage.index', compact('homePageSettings', 'categories'));
    }

    public function update(Request $request, string $id)
    {
        $homePageSettings = PharmacyHomePage::findOrFail($id); // Tìm bản ghi để cập nhật

        $validated = $request->validate([
            'top_banner' => 'array',
            'banner_2' => 'string',
            'banner_3' => 'string',
            'category_1_banner' => 'string',
            'category_1_title' => 'string',
            'category_1_id' => [
                Rule::exists('categories', 'id')->where(function ($query) {
                    return $query->where('parent_id', null); // ràng buộc là category lớn nhất
                }),
            ],
            'category_2_banner' => 'string',
            'category_2_title' => 'string',
            'category_2_id' => [
                Rule::exists('categories', 'id')->where(function ($query) {
                    return $query->where('parent_id', null); // ràng buộc là category lớn nhất
                }),
            ],
            'most_searches' => 'array',
        ]);

        $homePageSettings->update($validated);

        return redirect()->route('admin.homepage.index')->with('success', 'Cập nhật cài đặt trang chủ thành công!');
    }
}
