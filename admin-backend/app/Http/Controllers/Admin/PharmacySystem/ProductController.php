<?php

namespace App\Http\Controllers\Admin\PharmacySystem;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = DB::table('products')->get();
        return view('admin.modules.product.index', compact('products'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $product = null;
        $categories = DB::table('categories')->get();
        return view('admin.modules.product.createOrEdit', compact('product', 'categories'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|max:255',
            'thumbnail' => 'required|max:255',
            'brand' => 'required|max:255',
            'type' => 'required|max:255',
            'active_ingredient' => 'required|max:255',
            'images' => 'required|json',
            'indications' => 'required',
            'manufacturer' => 'required|max:255',
            'category_id' => 'required|exists:categories,id',
            'dosage_form' => 'required|max:255',
            'noted' => 'nullable',
            'description' => 'required',
            'quantity' => 'required|integer|min:0',
            'price' => 'required|numeric|min:0',
            'registration_number' => 'required|unique:products|max:255',
        ]);

        DB::table('products')->insert($validated);

        return redirect()->route('admin.product.index')->with('success', 'Sản phẩm đã được tạo thành công!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // Không cần thiết cho CRUD cơ bản
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $product = DB::table('products')->where('id', $id)->first();
        if (!$product) {
            abort(404);
        }
        $categories = DB::table('categories')->get();
        return view('admin.modules.product.createOrEdit', compact('product', 'categories'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'title' => 'required|max:255',
            'thumbnail' => 'required|max:255',
            'brand' => 'required|max:255',
            'type' => 'required|max:255',
            'active_ingredient' => 'required|max:255',
            'images' => 'required|json',
            'indications' => 'required',
            'manufacturer' => 'required|max:255',
            'category_id' => 'required|exists:categories,id',
            'dosage_form' => 'required|max:255',
            'noted' => 'nullable',
            'description' => 'required',
            'quantity' => 'required|integer|min:0',
            'price' => 'required|numeric|min:0',
            'registration_number' => 'required|unique:products,registration_number,' . $id . '|max:255',
        ]);

        DB::table('products')->where('id', $id)->update($validated);

        return redirect()->route('admin.product.index')->with('success', 'Sản phẩm đã được cập nhật thành công!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        DB::table('products')->where('id', $id)->delete();
        return redirect()->route('admin.product.index')->with('success', 'Sản phẩm đã được xóa thành công!');
    }
}
