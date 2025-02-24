<?php
/**
 * @var \stdClass|null $blog
 * @var \stdClass[] $blogCategories
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
                action="{{ $isEdit ? route('admin.blog.update', ['blog' => $blog ? $blog->id : null]) : route('admin.blog.store') }}"
                method="post">
                @csrf
                @if($isEdit)
                    @method('PUT')
                @endif

                <x-inputs.text label="Tiêu đề" name="title" :value="$blog ? $blog->title : ''"/>
                <x-inputs.editor label="Nội dung" name="content" :value="$blog ? $blog->content : ''"/>
                <x-inputs.image-link label="Ảnh đại diện" name="thumbnail" :value="$blog ? $blog->thumbnail : ''"/>
                <x-inputs.number label="Thứ tự ưu tiên" name="priority"
                                 :value="$blog ? $blog->priority : ''"></x-inputs.number>

                <x-inputs.select label="Danh mục Blog" name="blogcategory_id">
                    @foreach($blogCategories as $blogCategory)
                        <option value="{{ $blogCategory->id }}" @if($blog && $blog->blogcategory_id == $blogCategory->id) selected @endif>{{ $blogCategory->name }}</option>
                    @endforeach
                </x-inputs.select>

                <button type="submit" class="btn btn-primary">{{ $isEdit ? 'Sửa' : 'Tạo' }}</button>
            </form>
        </div>
    </div>
@endsection