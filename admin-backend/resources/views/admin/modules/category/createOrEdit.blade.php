<?php
$isEdit = isset($category) && $category;
?>
@extends('admin.layouts.main')
@section('title', $isEdit ? 'Sửa danh mục' : 'Tạo danh mục')
@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">{{ $isEdit ? 'Sửa danh mục' : 'Tạo danh mục' }}</h3>
        </div>
        <div class="card-body">
            <form
                id="categoryForm"
                action="{{ $isEdit ? route('admin.category.update', ['category' => $category->id]) : route('admin.category.store') }}"
                method="post">
                @csrf
                @if($isEdit)
                    @method('PUT')
                @endif

                <x-inputs.text label="Tên" name="name" :value="$category?->name"/>
                <x-inputs.image-link label="Ảnh đại diện" name="thumbnail" :value="$category?->thumbnail"/>
                <x-inputs.number label="Thứ tự ưu tiên" name="priority"
                                 :value="$category?->priority"></x-inputs.number>

                <div class="form-group">
                    <label for="parent_id">Danh mục cha</label>
                    <select name="parent_id" id="parent_id" class="form-control">
                        <option value="">Không có</option>
                        @foreach($categories as $parentCategory)
                            @if(isset($category) && $category->id == $parentCategory->id)
                                @continue
                            @endif
                            <option value="{{ $parentCategory->id }}"
                                @if(isset($category) && $category->parent_id == $parentCategory->id) selected @endif>
                                {{ $parentCategory->name }}
                            </option>
                        @endforeach
                    </select>
                </div>

                <button type="submit" class="btn btn-primary">{{ $isEdit ? 'Sửa' : 'Tạo' }}</button>
                <a href="{{ route('admin.category.index') }}" class="btn btn-secondary">Hủy</a>
            </form>
        </div>
    </div>
@endsection