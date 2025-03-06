<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;
use Illuminate\Support\Str;
use App\Models\User;

class PharmacySystemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->seed_pharmacy_database();
    }

    public function seed_pharmacy_database()
    {
        // Clear existing data
        $this->truncateTables();

        // Seed blog categories
        $this->seedBlogCategories(10);

        // Seed brands
        $this->seedBrands(20);

        // Seed categories with parent-child relationships
        $this->seedCategories(15);

        // Seed customers
        $this->seedCustomers(50);

        // Seed products
        $this->seedProducts(100);

        // Seed blogs
        $this->seedBlogs(30);

        // Seed product images
        $this->seedProductImages(200);

        // Seed customer cares
        $this->seedCustomerCares(25);

        // Seed comments and replies
        $this->seedComments(150);

        // Seed wishlists
        $this->seedWishlists(80);

        // Seed carts
        $this->seedCarts(70); // Added cart seeding

        // Seed orders and related tables
        $this->seedOrders(100);

        return "Pharmacy database seeded successfully with sample data!";
    }

    private function truncateTables()
    {
        // Disable foreign key checks to allow truncating tables with relationships
        DB::statement('SET FOREIGN_KEY_CHECKS=0');

        // Truncate tables in the correct order to avoid constraint violations
        DB::table('wishlists')->truncate();
        DB::table('payments')->truncate();
        DB::table('order_details')->truncate();
        DB::table('orders')->truncate();
        DB::table('reply_comments')->truncate();
        DB::table('comments')->truncate();
        DB::table('product_images')->truncate();
        DB::table('blogs')->truncate();
        DB::table('products')->truncate();
        DB::table('customer_cares')->truncate();
        DB::table('carts')->truncate(); // Added cart truncate
        DB::table('customers')->truncate();
        DB::table('categories')->truncate();
        DB::table('brands')->truncate();
        DB::table('blog_categories')->truncate();

        // Re-enable foreign key checks
        DB::statement('SET FOREIGN_KEY_CHECKS=1');
    }

    private function seedBlogCategories($count)
    {
        $data = [];
        $faker = Faker::create();
        $imageUrl = 'https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg';

        for ($i = 0; $i < $count; $i++) {
            $name = $faker->unique()->words(rand(1, 3), true);
            $slug = Str::slug($name);

            $data[] = [
                'name' => $name,
                'thumbnail' => $imageUrl,
                'priority' => $faker->numberBetween(1, 10),
                'slug' => $slug,
                'created_at' => now(),
                'updated_at' => now()
            ];
        }

        DB::table('blog_categories')->insert($data);
    }

    private function seedBrands($count)
    {
        $data = [];
        $faker = Faker::create();

        $brandNames = [
            'Pfizer', 'Novartis', 'Roche', 'Merck', 'GlaxoSmithKline', 'Johnson & Johnson',
            'AstraZeneca', 'Sanofi', 'Bayer', 'Abbott', 'Eli Lilly', 'Bristol-Myers Squibb',
            'Amgen', 'Gilead Sciences', 'Biogen', 'Teva', 'Boehringer Ingelheim', 'Novo Nordisk',
            'Takeda', 'Mylan', 'Allergan', 'Genentech', 'Astellas', 'Daiichi Sankyo'
        ];
        $thumb = "/test/placeholder.png";

        foreach (array_slice($brandNames, 0, $count) as $brandName) {
            $slug = Str::slug($brandName);

            $data[] = [
                'name' => $brandName,
                'slug' => $slug,
                'description' => $faker->paragraphs(rand(2, 5), true),
                'created_at' => now(),
                'updated_at' => now(),
                'thumbnail' => $thumb,
            ];
        }

        DB::table('brands')->insert($data);
    }

    private function seedCategories($count)
    {
        // First create parent categories
        $faker = Faker::create();
        $parentCount = ceil($count / 3); // About 1/3 will be parent categories
        $parentCategories = [];
        $imageUrl = 'https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg';

        for ($i = 0; $i < $parentCount; $i++) {
            $name = $faker->unique()->words(rand(1, 3), true);
            $slug = Str::slug($name);

            $parentId = [
                'name' => $name,
                'thumbnail' => $imageUrl,
                'slug' => $slug,
                'priority' => $faker->numberBetween(1, 10),
                'parent_id' => null,
                'created_at' => now(),
                'updated_at' => now()
            ];

            $parentCategories[] = $parentId;
        }

        DB::table('categories')->insert($parentCategories);

        // Get the IDs of the parent categories
        $parentIds = DB::table('categories')->whereNull('parent_id')->pluck('id')->toArray();

        // Create child categories
        $childCategories = [];

        for ($i = 0; $i < ($count - $parentCount); $i++) {
            $name = $faker->unique()->words(rand(1, 3), true);
            $slug = Str::slug($name);

            $childCategories[] = [
                'name' => $name,
                'thumbnail' => $imageUrl,
                'slug' => $slug,
                'priority' => $faker->numberBetween(1, 10),
                'parent_id' => $parentIds[array_rand($parentIds)],
                'created_at' => now(),
                'updated_at' => now()
            ];
        }

        DB::table('categories')->insert($childCategories);
    }

    private function seedCustomers($count)
    {
        $data = [];
        $faker = Faker::create();

        for ($i = 0; $i < $count; $i++) {
            $gender = $faker->randomElement(['male', 'female']);
            $firstName = $gender === 'male' ? $faker->firstNameMale() : $faker->firstNameFemale();
            $lastName = $faker->lastName();
            $fullName = $firstName . ' ' . $lastName;

            $data[] = [
                'email' => $faker->unique()->safeEmail(),
                'password' => bcrypt('password'), // Default password for all customers
                'full_name' => $fullName,
                'gender' => $gender,
                'phone_number' => $faker->phoneNumber(),
                'address' => $faker->address(),
                'created_at' => $faker->dateTimeBetween('-1 year', 'now'),
                'updated_at' => now()
            ];
        }

        DB::table('customers')->insert($data);
    }

    private function seedProducts($count)
    {
        $data = [];
        $faker = Faker::create();
        $imageUrl = 'https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg';

        // Get all brand and category IDs
        $brandIds = DB::table('brands')->pluck('id')->toArray();
        $categoryIds = DB::table('categories')->pluck('id')->toArray();

        // Define common pharmaceutical types and dosage forms
        $types = ['OTC', 'Prescription', 'Supplement', 'Herbal', 'Medical Device'];
        $dosageForms = ['Tablet', 'Capsule', 'Liquid', 'Injection', 'Cream', 'Ointment', 'Powder', 'Spray', 'Patch', 'Gel'];

        // Some common active ingredients
        $activeIngredients = [
            'Paracetamol', 'Ibuprofen', 'Aspirin', 'Amoxicillin', 'Omeprazole',
            'Simvastatin', 'Metformin', 'Ramipril', 'Amlodipine', 'Salbutamol',
            'Atorvastatin', 'Levothyroxine', 'Fluoxetine', 'Codeine', 'Cetirizine',
            'Diazepam', 'Warfarin', 'Tramadol', 'Lansoprazole', 'Allopurinol'
        ];

        for ($i = 0; $i < $count; $i++) {
            $title = $faker->words(rand(2, 5), true);
            $slug = Str::slug($title);
            $price = $faker->numberBetween(50, 500) * 1000;

            $data[] = [
                'title' => $title,
                'thumbnail' => $imageUrl,
                'brand_id' => $brandIds[array_rand($brandIds)],
                'type' => $faker->randomElement($types),
                'active_ingredient' => $faker->randomElement($activeIngredients),
                'indications' => $faker->paragraphs(rand(1, 3), true),
                'manufacturer' => $faker->company(),
                'category_id' => $categoryIds[array_rand($categoryIds)],
                'dosage_form' => $faker->randomElement($dosageForms),
                'noted' => $faker->optional(0.7)->paragraphs(rand(1, 2), true),
                'description' => $faker->paragraphs(rand(3, 6), true),
                'quantity' => $faker->numberBetween(0, 500),
                'price' => $price,
                'registration_number' => 'REG' . $faker->unique()->numerify('#####-######-##'),
                'slug' => $slug,
                'created_at' => $faker->dateTimeBetween('-1 year', 'now'),
                'updated_at' => now()
            ];
        }

        DB::table('products')->insert($data);
    }

    private function seedBlogs($count)
    {
        $data = [];
        $faker = Faker::create();
        $imageUrl = 'https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg';

        // Get all blog category IDs
        $blogCategoryIds = DB::table('blog_categories')->pluck('id')->toArray();

        for ($i = 0; $i < $count; $i++) {
            $title = $faker->sentence(rand(6, 12));
            $slug = Str::slug($title);

            $data[] = [
                'title' => $title,
                'content' => $faker->paragraphs(rand(5, 15), true),
                'thumbnail' => $imageUrl,
                'priority' => $faker->numberBetween(1, 10),
                'blogcategory_id' => $blogCategoryIds[array_rand($blogCategoryIds)],
                'slug' => $slug,
                'created_at' => $faker->dateTimeBetween('-1 year', 'now'),
                'updated_at' => now()
            ];
        }

        DB::table('blogs')->insert($data);
    }

    private function seedProductImages($count)
    {
        $data = [];
        $faker = Faker::create();
        $imageUrl = 'https://thumbs.dreamstime.com/b/pharmacy-logo-letter-p-pharmacy-cross-icon-isolated-dark-green-background-pharmacy-logo-letter-p-pharmacy-cross-130130949.jpg';

        // Get all product IDs
        $productIds = DB::table('products')->pluck('id')->toArray();

        for ($i = 0; $i < $count; $i++) {
            $data[] = [
                'product_id' => $productIds[array_rand($productIds)],
                'url' => $imageUrl,
                'created_at' => now(),
                'updated_at' => now()
            ];
        }

        DB::table('product_images')->insert($data);
    }

    private function seedCustomerCares($count)
    {
        $data = [];
        $faker = Faker::create();

        for ($i = 0; $i < $count; $i++) {
            $data[] = [
                'full_name' => $faker->name(),
                'email' => $faker->email(),
                'phone_number' => $faker->phoneNumber(),
                'address' => $faker->address(),
                'content' => $faker->paragraphs(rand(1, 3), true),
                'created_at' => $faker->dateTimeBetween('-6 months', 'now'),
                'updated_at' => now()
            ];
        }

        DB::table('customer_cares')->insert($data);
    }

    private function seedComments($count)
    {
        // Get all product and customer IDs
        $faker = Faker::create();
        $productIds = DB::table('products')->pluck('id')->toArray();
        $customerIds = DB::table('customers')->pluck('id')->toArray();

        $comments = [];

        for ($i = 0; $i < $count; $i++) {
            $comments[] = [
                'product_id' => $productIds[array_rand($productIds)],
                'customer_id' => $customerIds[array_rand($customerIds)],
                'content' => $faker->paragraphs(rand(1, 3), true),
                'created_at' => $faker->dateTimeBetween('-6 months', 'now'),
                'updated_at' => now()
            ];
        }

        DB::table('comments')->insert($comments);

        // Now add some replies to comments (about 30% of comments get replies)
        $commentIds = DB::table('comments')->pluck('id')->toArray();
        $replyCount = intval($count * 0.3);
        $replies = [];

        for ($i = 0; $i < $replyCount; $i++) {
            $replies[] = [
                'comment_id' => $commentIds[array_rand($commentIds)],
                'reply_content' => $faker->paragraphs(rand(1, 2), true),
                'created_at' => $faker->dateTimeBetween('-5 months', 'now'),
                'updated_at' => now()
            ];
        }

        DB::table('reply_comments')->insert($replies);
    }

    private function seedWishlists($count)
    {
        $data = [];
        $faker = Faker::create();

        // Get all product and customer IDs
        $productIds = DB::table('products')->pluck('id')->toArray();
        $customerIds = DB::table('customers')->pluck('id')->toArray();

        // Keep track of product-customer pairs to avoid duplicates
        $pairs = [];

        for ($i = 0; $i < $count; $i++) {
            $productId = $productIds[array_rand($productIds)];
            $customerId = $customerIds[array_rand($customerIds)];

            // Skip if this pair already exists
            if (isset($pairs["$productId-$customerId"])) {
                continue;
            }

            $pairs["$productId-$customerId"] = true;

            $data[] = [
                'product_id' => $productId,
                'customer_id' => $customerId,
                'created_at' => $faker->dateTimeBetween('-1 year', 'now'),
                'updated_at' => now()
            ];
        }

        DB::table('wishlists')->insert($data);
    }

    private function seedCarts($count)
    {
        $data = [];
        $faker = Faker::create();

        // Get all product and customer IDs
        $productIds = DB::table('products')->pluck('id')->toArray();
        $customerIds = DB::table('customers')->pluck('id')->toArray();

        // Keep track of product-customer pairs to avoid duplicates
        $pairs = [];

        for ($i = 0; $i < $count; $i++) {
            $productId = $productIds[array_rand($productIds)];
            $customerId = $customerIds[array_rand($customerIds)];

            // Skip if this pair already exists
            if (isset($pairs["$productId-$customerId"])) {
                continue;
            }

            $pairs["$productId-$customerId"] = true;

            $data[] = [
                'product_id' => $productId,
                'customer_id' => $customerId,
                'quantity' => random_int(1, 10),
            ];
        }

        DB::table('carts')->insert($data);
    }

    private function seedOrders($count)
    {
        // Get all customer and user IDs
        $faker = Faker::create();
        $customerIds = DB::table('customers')->pluck('id')->toArray();
        $userIds = DB::table('users')->pluck('id')->toArray();
        $productIds = DB::table('products')->pluck('id')->toArray();

        // Order status options
        $statuses = ['waiting', 'processing', 'shipped', 'admin_cancelled', 'customer_cancelled'];
        $paymentMethods = ['online', 'offline'];
        $paymentStatuses = ['fail', 'pending', 'success'];
        $paymentGateways = ['PayPal', 'Stripe', 'MoMo', 'VNPay', 'Bank Transfer', 'Cash on Delivery'];

        for ($i = 0; $i < $count; $i++) {
            $customerId = $customerIds[array_rand($customerIds)];
            $userId = $userIds[array_rand($userIds)];
            $status = $statuses[array_rand($statuses)];
            $paymentMethod = $paymentMethods[array_rand($paymentMethods)];
            $paymentStatus = $paymentStatuses[array_rand($paymentStatuses)];

            // If status is 'cancelled', payment status should be 'fail'
            if ($status === 'admin_cancelled') {
                $paymentStatus = 'fail';
            }
            if ($status === 'customer_cancelled') {
                $paymentStatus = 'fail';
            }

            // Create the order first (without total price, we'll calculate that later)
            $createdAt = $faker->dateTimeBetween('-1 year', 'now');
            $orderId = DB::table('orders')->insertGetId([
                'customer_id' => $customerId,
                'user_id' => $userId,
                'status' => $status,
                'payment_method' => $paymentMethod,
                'payment_status' => $paymentStatus,
                'total_price' => 0, // Temporary value
                'created_at' => $createdAt,
                'updated_at' => $createdAt
            ]);

            // Create order details for this order (1-5 products per order)
            $totalPrice = 0;
            $orderDetails = [];
            $numProducts = rand(1, 5);
            $usedProducts = [];

            for ($j = 0; $j < $numProducts; $j++) {
                // Ensure no duplicate products in the same order
                do {
                    $productId = $productIds[array_rand($productIds)];
                } while (isset($usedProducts[$productId]));

                $usedProducts[$productId] = true;

                $quantity = rand(1, 3);
                $price = DB::table('products')->where('id', $productId)->value('price');
                $lineTotal = $price * $quantity;
                $totalPrice += $lineTotal;

                $orderDetails[] = [
                    'product_id' => $productId,
                    'order_id' => $orderId,
                    'quantity' => $quantity,
                    'price_at_order' => $price,
                    'created_at' => $createdAt,
                    'updated_at' => $createdAt
                ];
            }

            // Update the order with the correct total price
            DB::table('orders')
                ->where('id', $orderId)
                ->update(['total_price' => $totalPrice]);

            // Insert order details
            DB::table('order_details')->insert($orderDetails);

            // Create payment record
            if ($paymentMethod === 'online') {
                $vnp_amount = $faker->numberBetween(10000, 1000000);
                $vnp_txn_ref = $faker->numberBetween(100000, 999999);
                DB::table('payments')->insert([
                    'vnp_amount' => $vnp_amount,
                    'vnp_order_info' => $faker->sentence(),
                    'vnp_pay_date' => $faker->dateTimeThisYear()->format('YmdHis'),
                    'vnp_transaction_status' => $paymentStatus === 'success' ? 0 : 1,
                    'vnp_txn_ref' => $vnp_txn_ref,
                    'order_id' => $orderId,
                    'created_at' => $createdAt,
                    'updated_at' => $createdAt,
                ]);
            }
        }
    }
}
