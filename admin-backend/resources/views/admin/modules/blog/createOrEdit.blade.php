<?php
/**
 * @var \App\Models\Blog|null $blog
 * @var \App\Models\BlogCategory[] $blogCategories
 */
$isEdit = isset($blog) && $blog;
?>
@extends('admin.layouts.main')
@section('title', $isEdit ? 'Sửa Blog' : 'Tạo Blog')
@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">{{ $isEdit ? 'Sửa Blog' : 'Tạo Blog' }}</h3>
        </div>
        <div class="card-body">
            <form
                action="{{ $isEdit ? route('admin.blog.update', ['blog' => $blog->id]) : route('admin.blog.store') }}"
                method="post">
                @csrf
                @if($isEdit)
                    @method('PUT')
                @endif

                <x-inputs.text label="Tiêu đề" name="title" :value="$blog?->title"/>
                <x-inputs.editor label="Nội dung" name="content" :value="$blog?->content"/>
                <x-inputs.image-link label="Ảnh đại diện" name="thumbnail" :value="$blog?->thumbnail"/>
                <x-inputs.number label="Thứ tự ưu tiên" name="priority"
                                 :value="$blog?->priority"></x-inputs.number>

                <x-inputs.select label="Danh mục Blog" name="blogcategory_id">
                    @foreach($blogCategories as $blogCategory)
                        <option value="{{ $blogCategory->id }}" @if($blog?->blogcategory_id == $blogCategory->id) selected @endif>{{ $blogCategory->name }}</option>
                    @endforeach
                </x-inputs.select>

                <button type="submit" class="btn btn-primary">{{ $isEdit ? 'Sửa' : 'Tạo' }}</button>
            </form>
        </div>
    </div>
@endsection