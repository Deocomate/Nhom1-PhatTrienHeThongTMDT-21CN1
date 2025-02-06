<?php

namespace App\Http\Controllers\Admin\TourSystem;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DestinationController extends Controller
{
    public function index()
    {
        $destinations = DB::table('destinations')->get();
        return view('admin.modules.destination.index', compact('destinations'));
    }

    public function create()
    {
        $destination = null;
        return view('admin.modules.destination.createOrEdit', compact('destination'));
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

        DB::table('destinations')->insert($validated);

        return redirect()->route('admin.destination.index')->with('success', 'Destination created successfully!');
    }

    public function edit(string $id)
    {
        $destination = DB::table('destinations')->where('id', $id)->first();
        if (!$destination) {
            abort(404);
        }
        return view('admin.modules.destination.createOrEdit', compact('destination'));
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

        DB::table('destinations')->where('id', $id)->update($validated);

        return redirect()->route('admin.destination.index')->with('success', 'Destination updated successfully!');
    }

    public function destroy(string $id)
    {
        DB::table('destinations')->where('id', $id)->delete();
        return redirect()->route('admin.destination.index')->with('success', 'Destination deleted successfully!');
    }
}
