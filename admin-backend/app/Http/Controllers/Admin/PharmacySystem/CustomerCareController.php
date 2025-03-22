<?php

namespace App\Http\Controllers\Admin\PharmacySystem;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class CustomerCareController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $customerCares = DB::table('customer_cares')->get();
        return view('admin.modules.customer_care.index', compact('customerCares'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        DB::table('customer_cares')->where('id', $id)->delete();
        return redirect()->route('admin.customer_care.index')->with('success', 'Customer care entry deleted successfully!');
    }
}
