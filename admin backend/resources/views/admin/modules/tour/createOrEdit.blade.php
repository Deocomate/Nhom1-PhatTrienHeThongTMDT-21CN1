<?php
/**
 * @var \App\Models\TourSystem\Tour|null $tour
 * @var \App\Models\TourSystem\Destination[] $destinations
 * @var \App\Models\TourSystem\Category[] $categories
 */
$isEdit = isset($tour) && $tour;
?>
@extends('admin.layouts.main')
@section('title', $isEdit ? 'Sửa tour' : 'Tạo tour')
@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">{{ $isEdit ? 'Sửa tour' : 'Tạo tour' }}</h3>
        </div>
        <div class="card-body">
            <form
                action="{{ $isEdit ? route('admin.tour.update', ['tour' => $tour->id]) : route('admin.tour.store') }}"
                method="post">
                @csrf
                @if($isEdit)
                    @method('PUT')
                @endif

                <x-inputs.text label="Tiêu đề" name="title" :value="$tour?->title"/>
                <x-inputs.image-link label="Ảnh đại diện" name="thumbnail" :value="$tour?->thumbnail"/>
                <x-inputs.text-area label="Mô tả" name="description"
                                    :value="@$tour->description"></x-inputs.text-area>
                <x-inputs.editor label="Chi tiết" name="detail" :value="$tour?->detail"></x-inputs.editor>
                <x-inputs.number label="Giá USD" name="price_usd" :value="$tour?->price_usd"/>
                <x-inputs.number label="Giá VND" name="price_vnd" :value="$tour?->price_vnd"/>

                <x-inputs.text label="Thời gian" name="duration" :value="$tour?->duration"/>
                <x-inputs.number label="Thời gian (số)" name="duration_number" :value="$tour?->duration_number"/>

                <x-inputs.text label="Điểm đến" name="destinations" :value="$tour?->destinations"/>
                <x-inputs.select-multiple label="Điểm đến" name="destinations_detail">
                    @foreach($destinations as $destination)
                        <option value="{{ $destination->name }}"
                                @if($isEdit && in_array($destination->name, $tour->destinations_detail)) selected @endif>
                            {{ $destination->title }}
                        </option>
                    @endforeach
                </x-inputs.select-multiple>

                <x-inputs.select-multiple label="Danh mục" name="categories">
                    @foreach($categories as $category)
                        <option value="{{ $category->name }}"
                                @if($isEdit && in_array($category->name, $tour->categories)) selected @endif>
                            {{ $category->title }}
                        </option>
                    @endforeach
                </x-inputs.select-multiple>
                <x-inputs.editor-array label="Lịch trình" name="itinerary"
                                       :value="$tour?->itinerary"></x-inputs.editor-array>
                <x-inputs.text-array label="Điểm nổi bật" name="highlights"
                                     :value="$tour?->highlights"></x-inputs.text-array>
                <x-inputs.text-array label="Bao gồm" name="includes"
                                     :value="$tour?->includes"></x-inputs.text-array>
                <x-inputs.text-array label="Không bao gồm" name="excludes"
                                     :value="$tour?->excludes"></x-inputs.text-array>
                <x-inputs.image-link-array label="Thư viện ảnh" name="images"
                                           :value="$tour?->images"></x-inputs.image-link-array>

                <x-inputs.number label="Thứ tự ưu tiên" name="priority"
                                 :value="$tour?->priority"></x-inputs.number>

                <button type="submit" class="btn btn-primary">{{ $isEdit ? 'Sửa' : 'Tạo' }}</button>
            </form>
        </div>
    </div>
@endsection
