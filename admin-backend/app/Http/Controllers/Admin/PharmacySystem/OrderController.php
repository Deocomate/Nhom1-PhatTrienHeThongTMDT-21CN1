<?php

namespace App\Http\Controllers\Admin\PharmacySystem;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = DB::table('orders')
            ->join('customers', 'orders.customer_id', '=', 'customers.id')
            ->join('users', 'orders.user_id', '=', 'users.id')
            ->select('orders.*', 'customers.full_name as customer_name', 'users.name as user_name')
            ->get();

        return view('admin.modules.order.index', compact('orders'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $order = null;
        $customers = DB::table('customers')->get();
        $users = DB::table('users')->get();
        $statuses = ['waiting', 'processing', 'shipped', 'admin_cancelled', 'customer_cancelled'];
        $paymentMethods = ['online', 'offline'];
        $paymentStatuses = ['fail', 'pending', 'success'];

        return view('admin.modules.order.createOrEdit', compact('order', 'customers', 'users', 'statuses', 'paymentMethods', 'paymentStatuses'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'customer_id' => 'required|exists:customers,id',
            'user_id' => 'required|exists:users,id',
            'status' => 'required|in:waiting,processing,shipped,admin_cancelled,customer_cancelled',
            'payment_method' => 'required|in:online,offline',
            'payment_status' => 'required|in:fail,pending,success',
            'total_price' => 'required|integer|min:0',
        ]);

        DB::table('orders')->insert($validated);

        return redirect()->route('admin.order.index')->with('success', 'Order created successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // Not needed for basic CRUD
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $order = DB::table('orders')->where('id', $id)->first();

        if (!$order) {
            abort(404);
        }

        $customers = DB::table('customers')->get();
        $users = DB::table('users')->get();
        $statuses = ['waiting', 'processing', 'shipped', 'admin_cancelled', 'customer_cancelled'];
        $paymentMethods = ['online', 'offline'];
        $paymentStatuses = ['fail', 'pending', 'success'];

        return view('admin.modules.order.createOrEdit', compact('order', 'customers', 'users', 'statuses', 'paymentMethods', 'paymentStatuses'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'customer_id' => 'required|exists:customers,id',
            'user_id' => 'required|exists:users,id',
            'status' => 'required|in:waiting,processing,shipped,admin_cancelled,customer_cancelled',
            'payment_method' => 'required|in:online,offline',
            'payment_status' => 'required|in:fail,pending,success',
            'total_price' => 'required|integer|min:0',
        ]);

        DB::table('orders')->where('id', $id)->update($validated);

        return redirect()->route('admin.order.index')->with('success', 'Order updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        DB::table('orders')->where('id', $id)->delete();

        return redirect()->route('admin.order.index')->with('success', 'Order deleted successfully!');
    }
}
