<?php
$isEdit = isset($order) && $order;
?>
@extends('admin.layouts.main')
@section('title', $isEdit ? 'Sửa đơn hàng' : 'Tạo đơn hàng')
@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">{{ $isEdit ? 'Sửa đơn hàng' : 'Tạo đơn hàng' }}</h3>
        </div>
        <div class="card-body">
            <form
                id="orderForm"
                action="{{ $isEdit ? route('admin.order.update', ['order' => $order->id]) : route('admin.order.store') }}"
                method="post">
                @csrf
                @if($isEdit)
                    @method('PUT')
                @endif

                <x-inputs.select label="Khách hàng" name="customer_id" required>
                    @foreach($customers as $customer)
                        <option value="{{ $customer->id }}"
                                @if(isset($order) && $order->customer_id == $customer->id) selected @endif>
                            {{ $customer->full_name }} (ID: {{ $customer->id }})
                        </option>
                    @endforeach
                </x-inputs.select>

                <x-inputs.select label="Nhân viên" name="user_id" required>
                    @foreach($users as $user)
                        <option value="{{ $user->id }}"
                                @if(isset($order) && $order->user_id == $user->id) selected @endif>
                            {{ $user->name }} (ID: {{ $user->id }})
                        </option>
                    @endforeach
                </x-inputs.select>

                <x-inputs.select label="Trạng thái" name="status" required>
                    @foreach($statuses as $status)
                        <option value="{{ $status }}"
                                @if(isset($order) && $order->status == $status) selected @endif>
                            {{ $status }}
                        </option>
                    @endforeach
                </x-inputs.select>

                <x-inputs.select label="Phương thức thanh toán" name="payment_method" required>
                    @foreach($paymentMethods as $paymentMethod)
                        <option value="{{ $paymentMethod }}"
                                @if(isset($order) && $order->payment_method == $paymentMethod) selected @endif>
                            {{ $paymentMethod }}
                        </option>
                    @endforeach
                </x-inputs.select>

                <x-inputs.select label="Trạng thái thanh toán" name="payment_status" required>
                    @foreach($paymentStatuses as $paymentStatus)
                        <option value="{{ $paymentStatus }}"
                                @if(isset($order) && $order->payment_status == $paymentStatus) selected @endif>
                            {{ $paymentStatus }}
                        </option>
                    @endforeach
                </x-inputs.select>

                <x-inputs.number label="Tổng tiền" name="total_price" :value="$order?->total_price" required/>

                <button type="submit" class="btn btn-primary">{{ $isEdit ? 'Sửa' : 'Tạo' }}</button>
                <a href="{{ route('admin.order.index') }}" class="btn btn-secondary">Hủy</a>
            </form>
        </div>
    </div>
@endsection
