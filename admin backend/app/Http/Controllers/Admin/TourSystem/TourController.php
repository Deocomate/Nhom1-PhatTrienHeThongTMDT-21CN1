<?php

namespace App\Http\Controllers\Admin\TourSystem;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TourController extends Controller
{
    public function index()
    {
        $tours = DB::table('tours')->get();
        return view('admin.modules.tour.index', compact('tours'));
    }

    public function create()
    {
        $tour = null;
        $destinations = DB::table('destinations')->get();
        $categories = DB::table('categories')->get();
        return view('admin.modules.tour.createOrEdit', compact('tour', 'destinations', 'categories'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|max:1000',
            'thumbnail' => 'nullable|max:1000',
            'description' => 'nullable',
            'detail' => 'nullable',
            'price_usd' => 'nullable|numeric',
            'price_vnd' => 'nullable|numeric',
            'destinations' => 'nullable|max:1000',
            'destinations_detail' => 'nullable|array',
            'duration' => 'nullable|max:1000',
            'duration_number' => 'nullable|numeric',
            'categories' => 'nullable|array',
            'itinerary' => 'nullable|array',
            'highlights' => 'nullable|array',
            'includes' => 'nullable|array',
            'excludes' => 'nullable|array',
            'images' => 'nullable|array',
            'priority' => 'nullable|numeric',
        ]);

        $validated['slug'] = \Str::slug($validated['title']);

        // Convert array to JSON strings for database storage
        $validated['destinations_detail'] = json_encode($validated['destinations_detail']);
        $validated['categories'] = json_encode($validated['categories']);
        $validated['itinerary'] = json_encode($validated['itinerary']);
        $validated['highlights'] = json_encode($validated['highlights']);
        $validated['includes'] = json_encode($validated['includes']);
        $validated['excludes'] = json_encode($validated['excludes']);
        $validated['images'] = json_encode($validated['images']);


        DB::table('tours')->insert($validated);

        return redirect()->route('admin.tour.index')->with('success', 'Tour created successfully!');
    }

    public function edit(string $id)
    {
        $tour = DB::table('tours')->where('id', $id)->first();
        if (!$tour) {
            abort(404);
        }
        $destinations = DB::table('destinations')->get();
        $categories = DB::table('categories')->get();
        // Decode JSON strings for form input
        $tour->destinations_detail = json_decode($tour->destinations_detail, true) ?? [];
        $tour->categories = json_decode($tour->categories, true) ?? [];
        $tour->itinerary = json_decode($tour->itinerary, true) ?? [];
        $tour->highlights = json_decode($tour->highlights, true) ?? [];
        $tour->includes = json_decode($tour->includes, true) ?? [];
        $tour->excludes = json_decode($tour->excludes, true) ?? [];
        $tour->images = json_decode($tour->images, true) ?? [];
        return view('admin.modules.tour.createOrEdit', compact('tour', 'destinations', 'categories'));
    }

    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'title' => 'required|max:1000',
            'thumbnail' => 'nullable|max:1000',
            'description' => 'nullable',
            'detail' => 'nullable',
            'price_usd' => 'nullable|numeric',
            'price_vnd' => 'nullable|numeric',
            'destinations' => 'nullable|max:1000',
            'destinations_detail' => 'nullable|array',
            'duration' => 'nullable|max:1000',
            'duration_number' => 'nullable|numeric',
            'categories' => 'nullable|array',
            'itinerary' => 'nullable|array',
            'highlights' => 'nullable|array',
            'includes' => 'nullable|array',
            'excludes' => 'nullable|array',
            'images' => 'nullable|array',
            'priority' => 'nullable|numeric',
        ]);

        $validated['slug'] = \Str::slug($validated['title']);

        // Convert array to JSON strings for database storage
        $validated['destinations_detail'] = json_encode($validated['destinations_detail']);
        $validated['categories'] = json_encode($validated['categories']);
        $validated['itinerary'] = json_encode($validated['itinerary']);
        $validated['highlights'] = json_encode($validated['highlights']);
        $validated['includes'] = json_encode($validated['includes']);
        $validated['excludes'] = json_encode($validated['excludes']);
        $validated['images'] = json_encode($validated['images']);

        DB::table('tours')->where('id', $id)->update($validated);

        return redirect()->route('admin.tour.index')->with('success', 'Tour updated successfully!');
    }

    public function destroy(string $id)
    {
        DB::table('tours')->where('id', $id)->delete();
        return redirect()->route('admin.tour.index')->with('success', 'Tour deleted successfully!');
    }
}
