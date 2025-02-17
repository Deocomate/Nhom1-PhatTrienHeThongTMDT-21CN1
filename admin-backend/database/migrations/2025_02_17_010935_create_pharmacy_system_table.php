<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Create Customers Table
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('email')->unique();
            $table->string('password');
            $table->string('full_name');
            $table->enum('gender', ['male', 'female']);
            $table->string('phone_number')->unique();
            $table->string('address');
            $table->string('profile_pic')->nullable();
            $table->timestamps();
        });

        // Create Categories Table
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->foreignId('parent_id')->nullable()->constrained('categories');
            $table->timestamps();
        });

        // Create Products Table
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('thumbnail');
            $table->string('brand');
            $table->string('type');
            $table->string('active_ingredient');
            $table->json('images');
            $table->text('indications');
            $table->string('manufacturer');
            $table->foreignId('category_id')->constrained('categories');
            $table->string('dosage_form');
            $table->text('noted')->nullable();
            $table->text('description');
            $table->integer('quantity')->default(0);
            $table->decimal('price', 10, 2);
            $table->string('registration_number')->unique();
            $table->timestamps();
        });

        // Create Orders Table
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('customer_id')->constrained('customers');
            $table->enum('status', ['new', 'processing', 'shipped', 'cancelled'])->default('new');
            $table->enum('payment_method', ['online', 'offline']);
            $table->enum('payment_status', ['fail', 'pending', 'success'])->default('pending');
            $table->integer('total_price')->nullable();
            $table->timestamps();
        });

        // Create OrderDetails Table
        Schema::create('order_details', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained('products');
            $table->foreignId('order_id')->constrained('orders');
            $table->integer('quantity');
            $table->integer('price_at_order');
            $table->timestamps();
        });

        // Create Payments Table
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('order_id')->constrained('orders');
            $table->string('payment_gateway');
            $table->enum('payment_status', ['fail', 'pending', 'success'])->default('pending');
            $table->timestamps();
        });

        // Create Blogs Table
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('content');
            $table->foreignId('category_id')->nullable()->constrained('categories');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blogs');
        Schema::dropIfExists('payments');
        Schema::dropIfExists('order_details');
        Schema::dropIfExists('orders');
        Schema::dropIfExists('products');
        Schema::dropIfExists('categories');
        Schema::dropIfExists('customers');
    }
};
