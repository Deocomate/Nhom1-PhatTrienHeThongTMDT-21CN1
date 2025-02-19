<?php
/**
 * @var \stdClass[] $products
 */
?>
@extends('admin.layouts.main')
@section('title','Danh sách sản phẩm')
@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Danh sách sản phẩm</h3>
        </div>
        <div class="card-body">
            @if(session('success'))
                <div class="alert alert-success">
                    {{ session('success') }}
                </div>
            @endif
            <a href="{{ route('admin.product.create') }}" class="btn btn-primary mb-3">Tạo mới</a>
            <table id="data-table" class="table table-bordered table-striped table-hover">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên</th>
                    <th>Hình ảnh</th>
                    <th>Thương hiệu</th>
                    <th>Loại</th>
                    <th>Hoạt chất</th>
                    <th>Nhà sản xuất</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                @foreach($products as $product)
                    <tr>
                        <td>{{ $product->id }}</td>
                        <td>{{ $product->title }}</td>
                        <td>
                            @if($product->thumbnail)
                                <img src="{{ $product->thumbnail }}" alt="{{ $product->title }}"
                                     style="max-width: 100px; max-height: 100px;">
                            @else
                                Không có
                            @endif
                        </td>
                        <td>{{ $product->brand }}</td>
                        <td>{{ $product->type }}</td>
                        <td>{{ $product->active_ingredient }}</td>
                        <td>{{ $product->manufacturer }}</td>
                        <td>{{ $product->price }}</td>
                        <td>{{ $product->quantity }}</td>
                        <td>
                            <a class="btn btn-warning"
                               href="{{ route('admin.product.edit', ['product' => $product->id]) }}">Sửa</a>
                            <form action="{{ route('admin.product.destroy', ['product' => $product->id]) }}"
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
        $('#data-table').DataTable({
            "responsive": true, "lengthChange": false, "autoWidth": false,
            "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
        })
            .buttons().container().appendTo('#data-table_wrapper .col-md-6:eq(0)');
    </script>
@endpush
