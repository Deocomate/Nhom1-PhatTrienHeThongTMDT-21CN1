<?php

namespace App\Http\Controllers\Admin\PharmacySystem;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $blogs = DB::table('blogs')->get();
        return view('admin.modules.blog.index', compact('blogs'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $blog = null;
        $blogCategories = DB::table('blog_categories')->get();
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

        DB::table('blogs')->insert($validated);

        return redirect()->route('admin.blog.index')->with('success', 'Blog created successfully!');
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
        $blog = DB::table('blogs')->where('id', $id)->first();
        if (!$blog) {
            abort(404);
        }
        $blogCategories = DB::table('blog_categories')->get();
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

        DB::table('blogs')->where('id', $id)->update($validated);

        return redirect()->route('admin.blog.index')->with('success', 'Blog updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        DB::table('blogs')->where('id', $id)->delete();
        return redirect()->route('admin.blog.index')->with('success', 'Blog deleted successfully!');
    }
}
