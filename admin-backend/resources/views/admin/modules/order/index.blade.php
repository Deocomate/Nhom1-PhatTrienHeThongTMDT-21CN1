<?php
/**
 * @var \stdClass[] $orders
 */
?>
@extends('admin.layouts.main')
@section('title','Danh sách Đơn hàng')
@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Danh sách Đơn hàng</h3>
        </div>
        <div class="card-body">
            @if(session('success'))
                <div class="alert alert-success">
                    {{ session('success') }}
                </div>
            @endif
            <a href="{{ route('admin.order.create') }}" class="btn btn-primary mb-3">Tạo mới</a>
            <table id="data-table" class="table table-bordered table-striped table-hover">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Khách hàng</th>
                    <th>Nhân viên</th>
                    <th>Trạng thái</th>
                    <th>Phương thức thanh toán</th>
                    <th>Trạng thái thanh toán</th>
                    <th>Tổng tiền</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                @foreach($orders as $order)
                    <tr>
                        <td>{{ $order->id }}</td>
                        <td>{{ $order->customer_name }} (ID: {{ $order->customer_id }})</td>
                        <td>{{ $order->user_name }} (ID: {{ $order->user_id }})</td>
                        <td>{{ $order->status }}</td>
                        <td>{{ $order->payment_method }}</td>
                        <td>{{ $order->payment_status }}</td>
                        <td>{{ $order->total_price }}</td>
                        <td>
                            <a class="btn btn-warning"
                               href="{{ route('admin.order.edit', ['order' => $order->id]) }}">Sửa</a>
                            <form action="{{ route('admin.order.destroy', ['order' => $order->id]) }}"
                                  method="POST" style="display: inline-block;">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-danger"
                                        onclick="return confirm('Bạn có chắc muốn xóa?')">Xoá
                                </button>
                            </form>
                        </td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        </div>
    </div>
@endsection
@push('scripts')
    <script>
        // Apply data table
        $(document).ready(function () {
            $('#data-table').DataTable({
                "responsive": true,
                "lengthChange": false,
                "autoWidth": false,
                "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
            }).buttons().container().appendTo('#data-table_wrapper .col-md-6:eq(0)');
        });
    </script>
@endpush
