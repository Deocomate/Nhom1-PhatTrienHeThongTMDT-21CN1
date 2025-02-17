<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {

        // // Contact Table

        // Contact Table
        
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

    }

    public function down(): void
    {
        // Schema::dropIfExists('contact');
        // Schema::dropIfExists('destinations');
        // Schema::dropIfExists('categories');
        // Schema::dropIfExists('tours');
    }
};
