<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class SeederController extends Controller
{
    public function index()
    {
        $this->user_init();
        return "Seeder successfully";
    }

    public function province_seeding()
    {
        $provinces = json_decode(Storage::disk('public')->get('provinces.json'), true);
        $provinceCount = DB::table("provinces")->get()->count();
        $districtCount = DB::table("districts")->get()->count();
        if ($provinceCount < 1) {
            foreach ($provinces as $province) {
                $type = 'tinh';

                if ($province["division_type"] == "thành phố trung ương") {
                    $type = 'thanhpho';
                }

                DB::table('provinces')->insert([
                    "id" => $province["code"],
                    "name" => $province["name"],
                    "type" => $type,
                ]);

                foreach ($province["districts"] as $district) {
                    $type = 'huyen';

                    if ($district["division_type"] == "quận") {
                        $type = 'quan';
                    }

                    if ($district["division_type"] == "thành phố") {
                        $type = 'thanhpho';
                    }

                    if ($district["division_type"] == "thị xã") {
                        $type = 'thixa';
                    }

                    DB::table('districts')->insert([
                        "province_id" => $province["code"],
                        "name" => $district["name"],
                        "type" => $type,
                        "priority" => 0
                    ]);

                }

            }
        }
    }

    public function user_init()
    {
        DB::table('users')->delete();
        $countUser = DB::table('users')->get()->count();
        if ($countUser < 1) {
            User::insert([
                'name' => "Admin",
                'email' => "admin@gmail.com",
                'password' => bcrypt('admin')
            ]);
        }
    }
}
