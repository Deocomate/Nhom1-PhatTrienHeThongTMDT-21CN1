<?php
/**
 * @var \App\Models\TourSystem\Category[] $categories
 */
?>
@extends('admin.layouts.main')
@section('title','Danh sách danh mục')
@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Danh sách danh mục</h3>
        </div>
        <div class="card-body">
            @if(session('success'))
                <div class="alert alert-success">
                    {{ session('success') }}
                </div>
            @endif
            <table id="data-table" class="table table-bordered table-striped table-hover">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Tiêu đề</th>
                    <th>Ảnh</th>
                    <th>Mô tả</th>
                    <th>Thứ tự</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                @foreach($categories as $category)
                    <tr>
                        <td>{{ $category->id }}</td>
                        <td>{{ $category->title }}</td>
                        <td>
                            @if($category->thumbnail)
                                <img src="{{ $category->thumbnail }}" alt="{{ $category->title }}"
                                     style="max-width: 100px; max-height: 100px;">
                            @else
                                Không có
                            @endif
                        </td>
                        <td>{{ $category->description }}</td>
                        <td>{{ $category->priority }}</td>
                        <td>
                            <a class="btn btn-warning"
                               href="{{ route('admin.category.edit', ['category' => $category->id]) }}">Sửa</a>
                            <form action="{{ route('admin.category.destroy', ['category' => $category->id]) }}"
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
