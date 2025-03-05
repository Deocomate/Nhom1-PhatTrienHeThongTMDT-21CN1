<?php
$isEdit = isset($brand) && $brand;
?>
@extends('admin.layouts.main')
@section('title', $isEdit ? 'Sửa thương hiệu' : 'Tạo thương hiệu')
@section('content')
<div class="card">
    <div class="card-header">
        <h3 class="card-title">{{ $isEdit ? 'Sửa thương hiệu' : 'Tạo thương hiệu' }}</h3>
    </div>
    <div class="card-body">
        <form
            id="brandForm"
            action="{{ $isEdit ? route('admin.brand.update', ['brand' => $brand->id]) : route('admin.brand.store') }}"
            method="post">
            @csrf
            @if($isEdit)
                @method('PUT')
            @endif

            <x-inputs.text label="Tên" name="name" :value="$brand?->name"/>
            <x-inputs.image-link label="Ảnh đại diện" name="thumbnail" :value="$brand?->thumbnail"/>
            <x-inputs.textarea label="Mô tả" name="description" :value="$brand?->description"/>
            <x-inputs.number label="Thứ tự ưu tiên" name="priority"
                             :value="$brand?->priority"></x-inputs.number>

            <button type="submit" class="btn btn-primary">{{ $isEdit ? 'Sửa' : 'Tạo' }}</button>
            <a href="{{ route('admin.brand.index') }}" class="btn btn-secondary">Hủy</a>
        </form>
    </div>
</div>
@endsection