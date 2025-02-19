<?php
/**
 * @var \stdClass[] $blogCategories
 */
?>
@extends('admin.layouts.main')
@section('title','Danh sách danh mục Blog')
@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Danh sách danh mục Blog</h3>
        </div>
        <div class="card-body">
            @if(session('success'))
                <div class="alert alert-success">
                    {{ session('success') }}
                </div>
            @endif
            <a href="{{ route('admin.blogcategory.create') }}" class="btn btn-primary mb-3">Tạo mới</a>
            <table id="data-table" class="table table-bordered table-striped table-hover">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên</th>
                    <th>Ảnh</th>
                    <th>Thứ tự</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                @foreach($blogCategories as $blogCategory)
                    <tr>
                        <td>{{ $blogCategory->id }}</td>
                        <td>{{ $blogCategory->name }}</td>
                        <td>
                            @if($blogCategory->thumbnail)
                                <img src="{{ $blogCategory->thumbnail }}" alt="{{ $blogCategory->name }}"
                                     style="max-width: 100px; max-height: 100px;">
                            @else
                                Không có
                            @endif
                        </td>
                        <td>{{ $blogCategory->priority }}</td>
                        <td>
                            <a class="btn btn-warning"
                               href="{{ route('admin.blogcategory.edit', ['blogcategory' => $blogCategory->id]) }}">Sửa</a>
                            <form action="{{ route('admin.blogcategory.destroy', ['blogcategory' => $blogCategory->id]) }}"
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