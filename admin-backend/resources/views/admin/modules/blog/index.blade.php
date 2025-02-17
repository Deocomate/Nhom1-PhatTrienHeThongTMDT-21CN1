<?php
/**
 * @var \stdClass[] $blogs
 */
?>
@extends('admin.layouts.main')
@section('title','Danh sách Blog')
@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Danh sách Blog</h3>
        </div>
        <div class="card-body">
            @if(session('success'))
                <div class="alert alert-success">
                    {{ session('success') }}
                </div>
            @endif
            <a href="{{ route('admin.blog.create') }}" class="btn btn-primary mb-3">Tạo mới</a>
            <table id="data-table" class="table table-bordered table-striped table-hover">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Tiêu đề</th>
                    <th>Ảnh</th>
                    <th>Danh mục</th>
                    <th>Thứ tự</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                @foreach($blogs as $blog)
                    <tr>
                        <td>{{ $blog->id }}</td>
                        <td>{{ $blog->title }}</td>
                        <td>
                            @if($blog->thumbnail)
                                <img src="{{ $blog->thumbnail }}" alt="{{ $blog->title }}"
                                     style="max-width: 100px; max-height: 100px;">
                            @else
                                Không có
                            @endif
                        </td>
                        <td>
                            @php
                                $blogCategory = DB::table('blog_categories')->where('id', $blog->blogcategory_id)->first();
                            @endphp
                            {{ $blogCategory ? $blogCategory->name : 'Không có' }}
                        </td>
                        <td>{{ $blog->priority }}</td>
                        <td>
                            <a class="btn btn-warning"
                               href="{{ route('admin.blog.edit', ['blog' => $blog->id]) }}">Sửa</a>
                            <form action="{{ route('admin.blog.destroy', ['blog' => $blog->id]) }}"
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