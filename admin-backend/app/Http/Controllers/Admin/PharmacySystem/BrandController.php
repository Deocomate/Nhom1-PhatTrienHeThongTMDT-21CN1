<?php

namespace App\Http\Controllers\Admin\PharmacySystem;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BrandController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $brands = DB::table('brands')
            ->get();

        return view('admin.modules.brand.index', compact('brands'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $brand = null;
        return view('admin.modules.brand.createOrEdit', compact('brand'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|unique:brands|max:255',
            'slug' => 'required|unique:brands|max:255',
            'description' => 'nullable|string',
            'thumbnail' => 'required'
        ]);

        DB::table('brands')->insert($validated);

        return redirect()->route('admin.brand.index')->with('success', 'Brand created successfully!');
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
        $brand = DB::table('brands')->where('id', $id)->first();
        if (!$brand) {
            abort(404);
        }
        return view('admin.modules.brand.createOrEdit', compact('brand'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'name' => 'required|unique:brands,name,' . $id . '|max:255',
            'slug' => 'required|unique:brands,slug,' . $id . '|max:255',
            'description' => 'nullable|string',
            'thumbnail' => 'required'
        ]);

        DB::table('brands')->where('id', $id)->update($validated);

        return redirect()->route('admin.brand.index')->with('success', 'Brand updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        DB::table('brands')->where('id', $id)->delete();
        return redirect()->route('admin.brand.index')->with('success', 'Brand deleted successfully!');
    }
}
