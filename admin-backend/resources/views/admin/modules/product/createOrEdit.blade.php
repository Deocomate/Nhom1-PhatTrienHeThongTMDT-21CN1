<?php
/**
 * @var \stdClass|null $product
 * @var \stdClass[] $categories
 */
$isEdit = isset($product) && $product;
?>
@extends('admin.layouts.main')
@section('title', $isEdit ? 'Sửa sản phẩm' : 'Tạo sản phẩm')
@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">{{ $isEdit ? 'Sửa sản phẩm' : 'Tạo sản phẩm' }}</h3>
        </div>
        <div class="card-body">
            <form
                action="{{ $isEdit ? route('admin.product.update', ['product' => $product ? $product->id : null]) : route('admin.product.store') }}"
                method="post">
                @csrf
                @if($isEdit)
                    @method('PUT')
                @endif

                <x-inputs.text label="Tên sản phẩm" name="title" :value="$product ? $product->title : ''"/>
                <x-inputs.image-link label="Ảnh đại diện" name="thumbnail"
                                     :value="$product ? $product->thumbnail : ''"/>
                <x-inputs.text label="Thương hiệu" name="brand" :value="$product ? $product->brand : ''"/>
                <x-inputs.text label="Loại" name="type" :value="$product ? $product->type : ''"/>
                <x-inputs.text label="Hoạt chất" name="active_ingredient"
                               :value="$product ? $product->active_ingredient : ''"/>
                <x-inputs.text-area label="Chỉ định" name="indications" :value="$product ? $product->indications : ''"/>
                <x-inputs.text label="Nhà sản xuất" name="manufacturer"
                               :value="$product ? $product->manufacturer : ''"/>
                <x-inputs.select label="Danh mục" name="category_id">
                    @foreach($categories as $category)
                        <option value="{{ $category->id }}"
                                @if($product && $product->category_id == $category->id) selected @endif>{{ $category->name }}</option>
                    @endforeach
                </x-inputs.select>
                <x-inputs.text label="Dạng bào chế" name="dosage_form" :value="$product ? $product->dosage_form : ''"/>
                <x-inputs.text-area label="Lưu ý" name="noted" :value="$product ? $product->noted : ''"/>
                <x-inputs.editor label="Mô tả" name="description" :value="$product ? $product->description : ''"/>
                <x-inputs.number label="Số lượng" name="quantity" :value="$product ? $product->quantity : ''"/>
                <x-inputs.number label="Giá" name="price" :value="$product ? $product->price : ''"/>
                <x-inputs.text label="Số đăng ký" name="registration_number"
                               :value="$product ? $product->registration_number : ''"/>

                <x-inputs.image-link-array label="Thư viện ảnh" name="images"
                                           :value="$product ? json_decode($product->images) : []"></x-inputs.image-link-array>

                <button type="submit" class="btn btn-primary">{{ $isEdit ? 'Sửa' : 'Tạo' }}</button>
            </form>
        </div>
    </div>
@endsection
