<?php

namespace App\Http\Controllers\Admin\TourSystem;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BlogCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $blogCategories = BlogCategory::all();
        return view('admin.modules.blog_category.index', compact('blogCategories'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $blogCategory = null;
        return view('admin.modules.blog_category.createOrEdit', compact('blogCategory'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|unique:blog_categories|max:255',
            'thumbnail' => 'nullable|max:255',
            'priority' => 'nullable|integer',
        ]);

        BlogCategory::create($validated);

        return redirect()->route('admin.blogcategory.index')->with('success', 'Blog Category created successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return view('admin.modules.blog_category.createOrEdit', compact('blogCategory'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'name' => 'required|unique:blog_categories,name,' . $blogCategory->id . '|max:255',
            'thumbnail' => 'nullable|max:255',
            'priority' => 'nullable|integer',
        ]);

        $blogCategory->update($validated);

        return redirect()->route('admin.blogcategory.index')->with('success', 'Blog Category updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $blogCategory->delete();

        return redirect()->route('admin.blogcategory.index')->with('success', 'Blog Category deleted successfully!');
    }
}
