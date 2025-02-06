<?php
/**
 * @var \App\Models\TourSystem\Contact|null $contact
 */
$isEdit = isset($contact) && $contact;
?>
@extends('admin.layouts.main')

@section('title', $isEdit ? 'Sửa Contact' : 'Tạo Contact')

@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">{{ $isEdit ? 'Sửa Contact' : 'Tạo Contact' }}</h3>
        </div>
        <div class="card-body">
            <form
                action="{{ $isEdit ? route('admin.contact.update', ['contact' => $contact->id]) : route('admin.contact.store') }}"
                method="post"
                enctype="multipart/form-data"
            >
                @csrf
                @if($isEdit)
                    @method('PUT')
                @endif

                <!-- Company Name -->
                <x-inputs.text
                    label="Tên Công Ty"
                    name="company_name"
                    :value="$contact?->company_name"
                />

                <!-- Logo -->
                <x-inputs.image-link
                    label="Logo"
                    name="logo"
                    :value="$contact?->logo"
                />

                <!-- Title -->
                <x-inputs.text
                    label="Tiêu Đề"
                    name="title"
                    :value="$contact?->title"
                />

                <!-- Thumbnail -->
                <x-inputs.image-link
                    label="Ảnh Đại Diện"
                    name="thumbnail"
                    :value="$contact?->thumbnail"
                />

                <!-- Description -->
                <x-inputs.text-area
                    label="Mô Tả"
                    name="description"
                    :value="$contact?->description"
                />

                <!-- Address -->
                <x-inputs.text
                    label="Địa Chỉ"
                    name="address"
                    :value="$contact?->address"
                />

                <!-- Detail -->
                <x-inputs.editor
                    label="Chi Tiết"
                    name="detail"
                    :value="$contact?->detail"
                />

                <!-- Email -->
                <x-inputs.email
                    label="Email"
                    name="email"
                    :value="$contact?->email"
                />

                <!-- Phone -->
                <x-inputs.text
                    label="Số Điện Thoại"
                    name="phone"
                    :value="$contact?->phone"
                />

                <!-- Hotline -->
                <x-inputs.text
                    label="Hotline"
                    name="hotline"
                    :value="$contact?->hotline"
                />

                <!-- WhatsApp -->
                <x-inputs.text
                    label="WhatsApp"
                    name="whatsapp"
                    :value="$contact?->whatsapp"
                />

                <!-- Zalo -->
                <x-inputs.text
                    label="Zalo"
                    name="zalo"
                    :value="$contact?->zalo"
                />

                <!-- Phone Detail (JSON) -->
                <x-inputs.text-array
                    label="Chi Tiết Điện Thoại"
                    name="phone_detail"
                    :value="$contact?->phone_detail ? json_decode($contact->phone_detail, true) : []"
                />

                <!-- WhatsApp Link -->
                <x-inputs.text
                    label="Liên Kết WhatsApp"
                    name="whatsapp_link"
                    :value="$contact?->whatsapp_link"
                />

                <!-- Zalo Link -->
                <x-inputs.text
                    label="Liên Kết Zalo"
                    name="zalo_link"
                    :value="$contact?->zalo_link"
                />

                <!-- Facebook -->
                <x-inputs.text
                    label="Facebook"
                    name="facebook"
                    :value="$contact?->facebook"
                />

                <!-- Map Link -->
                <x-inputs.text-area
                    label="Liên Kết Bản Đồ"
                    name="map_link"
                    :value="$contact?->map_link"
                />

                <!-- Images (JSON) -->
                <x-inputs.image-link-array
                    label="Thư Viện Ảnh"
                    name="images"
                    :value="$contact?->images ? json_decode($contact->images, true) : []"
                />

                <button type="submit" class="btn btn-primary">
                    {{ $isEdit ? 'Cập Nhật' : 'Tạo Mới' }}
                </button>
            </form>
        </div>
    </div>
@endsection
