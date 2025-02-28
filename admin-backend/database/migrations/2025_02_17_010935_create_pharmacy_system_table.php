<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Create Customers table
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('email')->unique();
            $table->string('password');
            $table->string('full_name');
            $table->enum('gender', ['male', 'female']);
            $table->string('phone_number');
            $table->string('address');
            $table->string('profile_pic')->nullable();
            $table->timestamps();
        });

        // Create Categories table
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->string('thumbnail')->nullable();
            $table->string('slug')->unique();
            $table->integer('priority')->nullable();
            $table->foreignId('parent_id')->nullable()->constrained('categories');
            $table->timestamps();
        });

        // Create Brands table
        Schema::create('brands', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->longText('description')->nullable();
            $table->timestamps();
        });

        // Create Products table
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('thumbnail');
            $table->foreignId('brand_id')->constrained('brands');
            $table->string('type');
            $table->string('active_ingredient');
            $table->text('indications');
            $table->string('manufacturer');
            $table->foreignId('category_id')->constrained('categories');
            $table->string('dosage_form');
            $table->text('noted')->nullable();
            $table->text('description');
            $table->integer('quantity')->default(0);
            $table->decimal('price', 10, 2);
            $table->string('registration_number')->unique();
            $table->string('slug')->unique();
            $table->timestamps();
        });

        // Create ProductImages table
        Schema::create('product_images', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained('products');
            $table->string('url');
            $table->timestamps();
        });

        // Create Wishlists table
        Schema::create('wishlists', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained('products');
            $table->foreignId('customer_id')->constrained('customers');
            $table->timestamps();
        });

        // Create Comments table
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained('products');
            $table->foreignId('customer_id')->constrained('customers');
            $table->text('content');
            $table->timestamps();
        });

        // Create ReplyComments table
        Schema::create('reply_comments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('comment_id')->constrained('comments');
            $table->text('reply_content');
            $table->timestamps();
        });

        // Create Orders table
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('customer_id')->constrained('customers');
            $table->foreignId('user_id')->constrained('users');
            $table->enum('status', ['waiting', 'processing', 'shipped', 'admin_cancelled', 'customer_cancelled'])->default('waiting');
            $table->enum('payment_method', ['online', 'offline']);
            $table->enum('payment_status', ['fail', 'pending', 'success'])->default('pending');
            $table->integer('total_price');
            $table->timestamps();
        });

        // Create OrderDetails table
        Schema::create('order_details', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained('products');
            $table->foreignId('order_id')->constrained('orders');
            $table->integer('quantity');
            $table->integer('price_at_order');
            $table->timestamps();
        });

        // Create Payments table
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('order_id')->constrained('orders');
            $table->string('payment_gateway');
            $table->enum('payment_status', ['fail', 'pending', 'success'])->default('pending');
            $table->timestamps();
        });

        // Create BlogCategories table
        Schema::create('blog_categories', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->string('thumbnail')->nullable();
            $table->integer('priority')->nullable();
            $table->string('slug')->unique();
            $table->timestamps();
        });

        // Create Blogs table
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('content')->nullable();
            $table->string('thumbnail')->nullable();
            $table->integer('priority')->nullable();
            $table->foreignId('blogcategory_id')->constrained('blog_categories');
            $table->string('slug')->unique();
            $table->timestamps();
        });

        // Create CustomerCares table
        Schema::create('customer_cares', function (Blueprint $table) {
            $table->id();
            $table->string('fullname');
            $table->string('email');
            $table->string('phone_number');
            $table->string('address');
            $table->text('content');
            $table->timestamps();
        });

        Schema::create('invalidated_token', function (Blueprint $table) {
            $table->string("id")->primary(); // Đặt 'id' làm primary key
            $table->string("expiry_time");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customers');
        Schema::dropIfExists('product_images');
        Schema::dropIfExists('wishlists');
        Schema::dropIfExists('comments');
        Schema::dropIfExists('reply_comments');
        Schema::dropIfExists('orders');
        Schema::dropIfExists('order_details');
        Schema::dropIfExists('payments');
        Schema::dropIfExists('products');
        Schema::dropIfExists('brands');
        Schema::dropIfExists('categories');
        Schema::dropIfExists('blogs');
        Schema::dropIfExists('blog_categories');
        Schema::dropIfExists('customer_cares');
    }
};
