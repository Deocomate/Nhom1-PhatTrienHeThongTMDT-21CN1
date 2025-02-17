<?php

namespace App\Http\Controllers\Admin\TourSystem;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $blogs = Blog::all();
        return view('admin.modules.blog.index', compact('blogs'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $blog = null;
        $blogCategories = BlogCategory::all();
        return view('admin.modules.blog.createOrEdit', compact('blog', 'blogCategories'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|max:255',
            'content' => 'nullable',
            'thumbnail' => 'nullable|max:255',
            'priority' => 'nullable|integer',
            'blogcategory_id' => 'required|exists:blog_categories,id',
        ]);

        Blog::create($validated);

        return redirect()->route('admin.blog.index')->with('success', 'Blog created successfully!');
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
        $blogCategories = BlogCategory::all();
        return view('admin.modules.blog.createOrEdit', compact('blog', 'blogCategories'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'title' => 'required|max:255',
            'content' => 'nullable',
            'thumbnail' => 'nullable|max:255',
            'priority' => 'nullable|integer',
            'blogcategory_id' => 'required|exists:blog_categories,id',
        ]);

        $blog->update($validated);

        return redirect()->route('admin.blog.index')->with('success', 'Blog updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $blog->delete();

        return redirect()->route('admin.blog.index')->with('success', 'Blog deleted successfully!');
    }
}
