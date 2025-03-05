<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
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

        $faker = Faker::create();
        $data = [];

        for ($i = 0; $i < 10; $i++) {  // Tạo 10 user mẫu
            $data[] = [
                'name' => $faker->name(),
                'email' => $faker->unique()->safeEmail(),
                'password' => bcrypt('password'),  // Mật khẩu mặc định
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }

        DB::table('users')->insert($data);
    }
}
