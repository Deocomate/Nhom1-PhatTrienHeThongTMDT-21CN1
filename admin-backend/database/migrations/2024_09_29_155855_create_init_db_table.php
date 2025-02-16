<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        // // Contact Table
        // Schema::create('contact', function (Blueprint $table) {
        //     $table->id();
        //     $table->string('company_name', 1000)->nullable();
        //     $table->string('logo', 1000)->nullable();
        //     $table->string('title', 1000)->nullable();
        //     $table->string('thumbnail', 1000)->nullable();
        //     $table->text('description')->nullable();
        //     $table->string('address', 1000)->nullable();
        //     $table->longText('detail')->nullable();
        //     $table->string('email', 1000)->nullable();
        //     $table->string('phone', 1000)->nullable();
        //     $table->string('hotline', 1000)->nullable();
        //     $table->string('whatsapp', 1000)->nullable();
        //     $table->string('zalo', 1000)->nullable();
        //     $table->json('phone_detail')->nullable();
        //     $table->string('whatsapp_link', 1000)->nullable();
        //     $table->string('zalo_link', 1000)->nullable();
        //     $table->string('facebook', 1000)->nullable();
        //     $table->text('map_link')->nullable();
        //     $table->json('images')->nullable();
        //     $table->timestamps();
        // });

        // // Destinations Table
        // Schema::create('destinations', function (Blueprint $table) {
        //     $table->id();
        //     $table->string('name', 1000)->nullable();
        //     $table->string('title', 1000)->nullable();
        //     $table->string('thumbnail', 1000)->nullable();
        //     $table->text('description')->nullable();
        //     $table->longText('detail')->nullable();
        //     $table->string('slug', 1000)->nullable();
        //     $table->integer('priority')->nullable();
        //     $table->timestamps();
        // });

        // // Categories Table
        // Schema::create('categories', function (Blueprint $table) {
        //     $table->id();
        //     $table->string('name', 1000)->nullable();
        //     $table->string('title', 1000)->nullable();
        //     $table->string('thumbnail', 1000)->nullable();
        //     $table->text('description')->nullable();
        //     $table->longText('detail')->nullable();
        //     $table->string('slug', 1000)->nullable();
        //     $table->integer('priority')->nullable();
        //     $table->timestamps();
        // });

        // // Tours Table
        // Schema::create('tours', function (Blueprint $table) {
        //     $table->id();
        //     $table->string('title', 1000)->nullable();
        //     $table->string('thumbnail', 1000)->nullable();
        //     $table->text('description')->nullable();
        //     $table->longText('detail')->nullable();
        //     $table->integer('price_usd')->nullable();
        //     $table->integer('price_vnd')->nullable();
        //     $table->string('destinations', 1000)->nullable();
        //     $table->json('destinations_detail')->nullable();
        //     $table->string('duration', 1000)->nullable();
        //     $table->integer('duration_number')->nullable();
        //     $table->json('categories')->nullable();
        //     $table->json('itinerary')->nullable();
        //     $table->json('highlights')->nullable();
        //     $table->json('includes')->nullable();
        //     $table->json('excludes')->nullable();
        //     $table->json('images')->nullable();
        //     $table->string('slug', 1000)->nullable();
        //     $table->integer('priority')->nullable();
        //     $table->timestamps();
        // });

        //users
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('email')->unique();
            $table->string('password');
            $table->string('full_name');
            $table->enum('gender', ['male', 'female']);
            $table->string('phone_number')->unique();
            $table->string('address')->nullable();
            $table->string('profile_pic')->nullable();
            $table->timestamps();
        });

        //Roles
        Schema::create('roles', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });

        //admins
        Schema::create('admins', function (Blueprint $table) {
            $table->id();
            $table->string('email')->unique();
            $table->string('password');
            $table->string('full_name');
            $table->enum('gender', ['male', 'female']);
            $table->string('phone_number')->unique();
            $table->string('address')->nullable();
            $table->string('profile_pic')->nullable();
            $table->foreignId('role_id')->constrained('roles')->onDelete('cascade');
            $table->timestamps();
        });

        //categories
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('parent_id')->nullable()->constrained('categories')->onDelete('set null');
            $table->timestamps();
        });

        //product
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('thumbnail')->nullable();
            $table->string('brand')->nullable();
            $table->string('type')->nullable();
            $table->text('active_ingredient')->nullable();
            $table->text('indications')->nullable();
            $table->string('manufacturer')->nullable();
            $table->foreignId('category_id')->nullable()->constrained('categories')->onDelete('set null');
            $table->text('dosage_form')->nullable();
            $table->text('noted')->nullable();
            $table->text('description')->nullable();
            $table->integer('quantity')->default(0);
            $table->decimal('price', 10, 2);
            $table->string('registration_number')->nullable();
            $table->timestamps();
        });

        //product_images
        Schema::create('product_images', function (Blueprint $table) {
            $table->id();
            $table->string('path');
            $table->foreignId('product_id')->constrained('products')->onDelete('cascade');
            $table->timestamps();
        });

        //orders
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->enum('status', ['new', 'processing', 'shipped', 'cancelled']);
            $table->enum('payment_method', ['online', 'offline']);
            $table->enum('payment_status', ['fail', 'pending', 'success']);
            $table->integer('total_price');
            $table->timestamps();
        });

        //orders_detail
        Schema::create('order_details', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained('products')->onDelete('cascade');
            $table->foreignId('order_id')->constrained('orders')->onDelete('cascade');
            $table->integer('quantity');
            $table->integer('price_at_order');
            $table->timestamps();
        });

        //Payments
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('order_id')->constrained('orders')->onDelete('cascade');
            $table->string('transaction_id')->nullable();
            $table->string('payment_gateway');
            $table->enum('payment_status', ['fail', 'pending', 'success']);
            $table->timestamps();
        });

        //blogs
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('content');
            $table->foreignId('category_id')->nullable()->constrained('categories')->onDelete('set null');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        // Schema::dropIfExists('contact');
        // Schema::dropIfExists('destinations');
        // Schema::dropIfExists('categories');
        // Schema::dropIfExists('tours');


        Schema::dropIfExists('users');
        Schema::dropIfExists('roles');
        Schema::dropIfExists('admins');
        Schema::dropIfExists('categories');
        Schema::dropIfExists('products');
        Schema::dropIfExists('product_images');
        Schema::dropIfExists('orders');
        Schema::dropIfExists('order_details');
        Schema::dropIfExists('payments');
        Schema::dropIfExists('blogs');
    }
};
