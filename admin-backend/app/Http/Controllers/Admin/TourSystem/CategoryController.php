<?php

namespace App\Http\Controllers\Admin\TourSystem;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = DB::table('categories')->get();
        return view('admin.modules.category.index', compact('categories'));
    }

    public function create()
    {
        $category = null;
        return view('admin.modules.category.createOrEdit', compact('category'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|max:1000',
            'name' => 'required|max:1000',
            'thumbnail' => 'nullable|max:1000',
            'description' => 'nullable',
            'detail' => 'nullable',
            'priority' => 'nullable|numeric',
        ]);

        $validated['slug'] = \Str::slug($validated['title']);

        DB::table('categories')->insert($validated);

        return redirect()->route('admin.category.index')->with('success', 'Category created successfully!');
    }

    public function edit(string $id)
    {
        $category = DB::table('categories')->where('id', $id)->first();
        if (!$category) {
            abort(404);
        }
        return view('admin.modules.category.createOrEdit', compact('category'));
    }

    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'title' => 'required|max:1000',
            'name' => 'required|max:1000',
            'thumbnail' => 'nullable|max:1000',
            'description' => 'nullable',
            'detail' => 'nullable',
            'priority' => 'required|numeric',
        ]);

        $validated['slug'] = \Str::slug($validated['title']);

        DB::table('categories')->where('id', $id)->update($validated);

        return redirect()->route('admin.category.index')->with('success', 'Category updated successfully!');
    }

    public function destroy(string $id)
    {
        DB::table('categories')->where('id', $id)->delete();
        return redirect()->route('admin.category.index')->with('success', 'Category deleted successfully!');
    }
}
