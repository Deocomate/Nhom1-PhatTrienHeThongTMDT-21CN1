<?php
/**
 * @var \App\Models\TourSystem\Destination|null $destination
 */
$isEdit = isset($destination) && $destination;
?>
@extends('admin.layouts.main')
@section('title', $isEdit ? 'Sửa điểm đến' : 'Tạo mới điểm đến')
@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">{{ $isEdit ? 'Sửa điểm đến' : 'Tạo điểm đến' }}</h3>
        </div>
        <div class="card-body">
            <form
                    action="{{ $isEdit ? route('admin.destination.update', ['destination' => $destination->id]) : route('admin.destination.store') }}"
                    method="post">
                @csrf
                @if($isEdit)
                    @method('PUT')
                @endif

                <x-inputs.text label="Tiêu đề" name="title" :value="$destination?->title"/>
                <x-inputs.text label="Tên" name="name" :value="$destination?->name"/>
                <x-inputs.image-link label="Ảnh đại diện" name="thumbnail" :value="$destination?->thumbnail"/>
                <x-inputs.text-area label="Mô tả" name="description"
                                    :value="$destination?->description"></x-inputs.text-area>
                <x-inputs.editor label="Chi tiết" name="detail" :value="$destination?->detail"></x-inputs.editor>
                <x-inputs.number label="Thứ tự ưu tiên" name="priority"
                                 :value="$destination?->priority"></x-inputs.number>

                <button type="submit" class="btn btn-primary">{{ $isEdit ? 'Sửa' : 'Tạo' }}</button>
            </form>
        </div>
    </div>
@endsection
