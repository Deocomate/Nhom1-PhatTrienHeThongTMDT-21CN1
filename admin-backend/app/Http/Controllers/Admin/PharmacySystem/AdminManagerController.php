<?php

namespace App\Http\Controllers\Admin\PharmacySystem;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\Password;

class AdminManagerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $managers = User::all();
        return view('admin.modules.manager.index', compact('managers'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $manager = null;
        return view('admin.modules.manager.createOrEdit', compact('manager'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', 'confirmed', Password::defaults()],
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return redirect()->route('admin.manager.index')->with('success', 'Quản trị viên đã được tạo thành công!');
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
        $manager = User::find($id);
        if (!$manager) {
            abort(404);
        }
        return view('admin.modules.manager.createOrEdit', compact('manager'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $manager = User::find($id);
        if (!$manager) {
            abort(404);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $id,
            'password' => ['nullable', 'confirmed', Password::defaults()],
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        $manager->name = $request->name;
        $manager->email = $request->email;
        if ($request->filled('password')) {
            $manager->password = Hash::make($request->password);
        }
        $manager->save();

        return redirect()->route('admin.manager.index')->with('success', 'Quản trị viên đã được cập nhật thành công!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $manager = User::find($id);

        if (!$manager) {
            abort(404);
        }

        if ($manager->email === 'admin@gmail.com') {
            return redirect()->route('admin.manager.index')
                ->with('error', 'Không thể xóa tài khoản root!');
        }

        $manager->delete();

        return redirect()->route('admin.manager.index')->with('success', 'Quản trị viên đã được xóa thành công!');
    }
}
