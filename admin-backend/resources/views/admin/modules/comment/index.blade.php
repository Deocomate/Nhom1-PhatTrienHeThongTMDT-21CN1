<?php
/**
 * @var \stdClass[] $comments
 */
?>
@extends('admin.layouts.main')
@section('title','Quản lý bình luận')
@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Danh sách bình luận</h3>
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
                    <th>Sản phẩm</th>
                    <th>Khách hàng</th>
                    <th>Nội dung</th>
                    <th>Ngày đăng</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                @foreach($comments as $comment)
                    <tr>
                        <td>{{ $comment->id }}</td>
                        <td>{{ $comment->product_title }}</td>
                        <td>{{ $comment->customer_name }}</td>
                        <td>{{ Str::limit($comment->content, 100) }}</td>
                        <td>{{ $comment->created_at }}</td>
                        <td>
                            <a class="btn btn-info"
                               href="{{ route('admin.comment.edit', ['comment' => $comment->id]) }}">
                                Chi tiết/Trả lời
                            </a>
                            <form action="{{ route('admin.comment.destroy', ['comment' => $comment->id]) }}"
                                  method="POST" style="display: inline-block;">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-danger"
                                        onclick="return confirm('Bạn có chắc muốn xóa bình luận này?')">
                                    Xóa
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
