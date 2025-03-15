<?php
/**
 * @var \App\Models\PharmacySystem\PharmacyHomePage $homePageSettings
 * @var \stdClass[] $categories
 */
?>

@extends('admin.layouts.main')

@section('title', 'Cài đặt Trang Chủ')

@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Cài đặt Trang Chủ</h3>
        </div>
        <div class="card-body">
            @if(session('success'))
                <div class="alert alert-success">
                    {{ session('success') }}
                </div>
            @endif

            <form action="{{ route('admin.homepage.update', ['homepage' => $homePageSettings->id]) }}" method="post">
                @csrf
                @method('PUT')

                <x-inputs.image-link-array label="Top Banners (Array)" name="top_banner"
                                           :value="$homePageSettings->top_banner"/>
                <x-inputs.image-link label="Banner 2" name="banner_2" :value="$homePageSettings->banner_2"/>
                <x-inputs.image-link label="Banner 3" name="banner_3" :value="$homePageSettings->banner_3"/>

                <x-inputs.image-link label="Ảnh Danh Mục Nổi Bật 1" name="category_1_banner"
                                     :value="$homePageSettings->category_1_banner"/>
                <x-inputs.text label="Tiêu Đề Danh Mục 1" name="category_1_title"
                               :value="$homePageSettings->category_1_title"/>
                <x-inputs.select label="Chọn Danh Mục 1" name="category_1_id">
                    <option value="">---</option>
                    @foreach($categories as $category)
                        <option
                            value="{{ $category->id }}" @selected($homePageSettings->category_1_id == $category->id)>
                            {{ $category->name }}
                        </option>
                    @endforeach
                </x-inputs.select>


                <x-inputs.image-link label="Ảnh Danh Mục Nổi Bật 2" name="category_2_banner"
                                     :value="$homePageSettings->category_2_banner"/>
                <x-inputs.text label="Tiêu Đề Danh Mục 2" name="category_2_title"
                               :value="$homePageSettings->category_2_title"/>

                <x-inputs.select label="Chọn Danh Mục 2" name="category_2_id">
                    <option value="">---</option>
                    @foreach($categories as $category)
                        <option
                            value="{{ $category->id }}" @selected($homePageSettings->category_2_id == $category->id)>
                            {{ $category->name }}
                        </option>
                    @endforeach
                </x-inputs.select>

                <x-inputs.text-array label="Sản Phẩm Tìm Kiếm Nhiều (Array)" name="most_searches"
                                     :value="$homePageSettings->most_searches"/>


                <button type="submit" class="btn btn-primary">Cập nhật</button>
            </form>
        </div>
    </div>
@endsection
