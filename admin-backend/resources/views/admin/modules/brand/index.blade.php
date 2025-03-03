<?php
/**
 * @var \stdClass[] $brands
 */
?>
@extends('admin.layouts.main')
@section('title','Danh sách Thương hiệu')
@section('content')
<div class="card">
    <div class="card-header">
        <h3 class="card-title">Danh sách Thương hiệu</h3>
    </div>
    <div class="card-body">
        @if(session('success'))
            <div class="alert alert-success">
                {{ session('success') }}
            </div>
        @endif
        <a href="{{ route('admin.brand.create') }}" class="btn btn-primary mb-3">Tạo mới</a>
        <table id="data-table" class="table table-bordered table-striped table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên</th>
                    <th>Ảnh</th>
                    <th>Mô tả</th>
                    <th>Thứ tự</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                @foreach($brands as $brand)
                    <tr>
                        <td>{{ $brand->id }}</td>
                        <td>{{ $brand->name }}</td>
                        <td>
                            @if(isset($brand->thumbnail) && $brand->thumbnail)
                                <img src="{{ $brand->thumbnail }}" alt="{{ $brand->name }}" 
                                     style="max-width: 100px; max-height: 100px;">
                            @else
                                Không có
                            @endif
                        </td>
                        <td>{{ $brand->description ?? 'Không có' }}</td>
                        <td>{{ $brand->priority ?? 'Không có' }}</td>
                        <td>
                            <a class="btn btn-warning" 
                               href="{{ route('admin.brand.edit', ['brand' => $brand->id]) }}">Sửa</a>
                            <form action="{{ route('admin.brand.destroy', ['brand' => $brand->id]) }}" 
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
    $(document).ready(function() {
        $('#data-table').DataTable({
            "responsive": true,
            "lengthChange": false,
            "autoWidth": false,
            "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
        }).buttons().container().appendTo('#data-table_wrapper .col-md-6:eq(0)');
    });
</script>
@endpush