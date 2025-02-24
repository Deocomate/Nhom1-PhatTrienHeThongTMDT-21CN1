<?php
/**
 * @var \App\Models\User|null $manager
 */
$isEdit = isset($manager) && $manager;
?>
@extends('admin.layouts.main')
@section('title', $isEdit ? 'Sửa quản trị viên' : 'Tạo quản trị viên')
@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">{{ $isEdit ? 'Sửa quản trị viên' : 'Tạo quản trị viên' }}</h3>
        </div>
        <div class="card-body">
            <form
                action="{{ $isEdit ? route('admin.manager.update', ['manager' => $manager ? $manager->id : null]) : route('admin.manager.store') }}"
                method="post">
                @csrf
                @if($isEdit)
                    @method('PUT')
                @endif

                <x-inputs.text label="Tên" name="name" :value="$manager ? $manager->name : ''"/>
                <x-inputs.email label="Email" name="email" :value="$manager ? $manager->email : ''"/>

                <x-inputs.text label="Mật khẩu" type="password" name="password"/>
                <x-inputs.text label="Xác nhận mật khẩu" type="password" name="password_confirmation"/>

                <button type="submit" class="btn btn-primary">{{ $isEdit ? 'Sửa' : 'Tạo' }}</button>
            </form>
        </div>
    </div>
@endsection
