<?php
/**
 * @var \App\Models\BlogCategory|null $blogCategory
 */
$isEdit = isset($blogCategory) && $blogCategory;
?>
@extends('admin.layouts.main')
@section('title', $isEdit ? 'Sửa danh mục Blog' : 'Tạo danh mục Blog')
@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">{{ $isEdit ? 'Sửa danh mục Blog' : 'Tạo danh mục Blog' }}</h3>
        </div>
        <div class="card-body">
            <form
                action="{{ $isEdit ? route('admin.blogcategory.update', ['blogcategory' => $blogCategory->id]) : route('admin.blogcategory.store') }}"
                method="post">
                @csrf
                @if($isEdit)
                    @method('PUT')
                @endif

                <x-inputs.text label="Tên danh mục" name="name" :value="$blogCategory?->name"/>
                <x-inputs.image-link label="Ảnh đại diện" name="thumbnail" :value="$blogCategory?->thumbnail"/>
                <x-inputs.number label="Thứ tự ưu tiên" name="priority"
                                 :value="$blogCategory?->priority"></x-inputs.number>

                <button type="submit" class="btn btn-primary">{{ $isEdit ? 'Sửa' : 'Tạo' }}</button>
            </form>
        </div>
    </div>
@endsection