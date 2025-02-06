<?php

namespace App\Http\Controllers\Admin\TourSystem;

use App\Http\Controllers\Controller;
use App\Models\TourSystem\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * Hiển thị form chỉnh sửa Contact.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        // Nếu chưa có bản ghi nào, tạo một bản ghi rỗng
        if (\DB::table("contact")->get()->count() < 1) {
            $contact = \DB::table("contact")->insert([
                "company_name" => env("APP_NAME")
            ]);
        }
        $contact = \DB::table("contact")->first();
        return view('admin.modules.contact.index', compact('contact'));
    }

    /**
     * Cập nhật dữ liệu Contact.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request)
    {
        // Lấy bản ghi Contact đầu tiên
        $contact = \DB::table("contact")->first();

        // Xác thực dữ liệu từ form
        $validated = $request->validate([
            'company_name' => 'required|string|max:1000',
            'logo' => 'required|string|max:1000',
            'title' => 'required|string|max:1000',
            'thumbnail' => 'required|string|max:1000',
            'description' => 'required|string',
            'address' => 'required|string|max:1000',
            'detail' => 'required|string',
            'email' => 'required|email|max:1000',
            'phone' => 'required|string|max:1000',
            'hotline' => 'required|string|max:1000',
            'whatsapp' => 'required|string|max:1000',
            'zalo' => 'required|string|max:1000',
            'phone_detail' => 'required|array',
            'whatsapp_link' => 'required|url|max:1000',
            'zalo_link' => 'required|url|max:1000',
            'facebook' => 'required|url|max:1000',
            'map_link' => 'required|string',
            'images' => 'required|array',
            'priority' => 'required|integer|min:0',
        ]);

        // Xử lý dữ liệu JSON
        if (isset($validated['phone_detail'])) {
            $validated['phone_detail'] = json_encode($validated['phone_detail']);
        }

        if (isset($validated['images'])) {
            $validated['images'] = json_encode($validated['images']);
        }

        // Cập nhật dữ liệu vào bản ghi Contact
        \DB::table("contact")->update($validated);

        return redirect()->route('admin.contact.index')->with('success', 'Cập nhật Contact thành công!');
    }
}
