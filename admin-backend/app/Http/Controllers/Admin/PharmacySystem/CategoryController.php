<?php

namespace App\Http\Controllers\Admin\PharmacySystem;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = DB::table('categories')
            ->leftJoin('categories as parents', 'categories.parent_id', '=', 'parents.id')
            ->select('categories.*', 'parents.name as parent_name') // Lấy categories.* và parents.name
            ->get();

        return view('admin.modules.category.index', compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $category = null;
        $categories = DB::table('categories')->get();
        return view('admin.modules.category.createOrEdit', compact('category', 'categories'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|unique:categories|max:255',
            'thumbnail' => 'nullable|max:255',
            'priority' => 'nullable|integer',
            'parent_id' => 'nullable|exists:categories,id',
        ]);

        DB::table('categories')->insert($validated);

        return redirect()->route('admin.category.index')->with('success', 'Category created successfully!');
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
        $category = DB::table('categories')->where('id', $id)->first();
        if (!$category) {
            abort(404);
        }
        $categories = DB::table('categories')->get();
        return view('admin.modules.category.createOrEdit', compact('category', 'categories'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'name' => 'required|unique:categories,name,' . $id . '|max:255',
            'thumbnail' => 'nullable|max:255',
            'priority' => 'nullable|integer',
            'parent_id' => 'nullable|exists:categories,id',
        ]);

        DB::table('categories')->where('id', $id)->update($validated);

        return redirect()->route('admin.category.index')->with('success', 'Category updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        DB::table('categories')->where('id', $id)->delete();
        return redirect()->route('admin.category.index')->with('success', 'Category deleted successfully!');
    }
}