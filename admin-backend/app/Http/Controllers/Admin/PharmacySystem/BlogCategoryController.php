<?php

namespace App\Http\Controllers\Admin\PharmacySystem;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BlogCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $blogCategories = DB::table('blog_categories')->get();
        return view('admin.modules.bclog_category.index', compact('blogCategories'));
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

        DB::table('blog_categories')->insert($validated);

        return redirect()->route('admin.blogcategory.index')->with('success', 'Blog Category created successfully!');
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
        $blogCategory = DB::table('blog_categories')->where('id', $id)->first();
        if (!$blogCategory) {
            abort(404);
        }
        return view('admin.modules.blog_category.createOrEdit', compact('blogCategory'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'name' => 'required|unique:blog_categories,name,' . $id . '|max:255',
            'thumbnail' => 'nullable|max:255',
            'priority' => 'nullable|integer',
        ]);

        DB::table('blog_categories')->where('id', $id)->update($validated);

        return redirect()->route('admin.blogcategory.index')->with('success', 'Blog Category updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        DB::table('blog_categories')->where('id', $id)->delete();
        return redirect()->route('admin.blogcategory.index')->with('success', 'Blog Category deleted successfully!');
    }
}
