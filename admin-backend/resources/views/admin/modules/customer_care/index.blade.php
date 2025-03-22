<?php
/**
 * @var \stdClass[] $customerCares
 */
?>
@extends('admin.layouts.main')
@section('title','Danh sách Chăm sóc khách hàng')
@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Danh sách Chăm sóc khách hàng</h3>
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
                    <th>Họ tên</th>
                    <th>Email</th>
                    <th>Số điện thoại</th>
                    <th>Địa chỉ</th>
                    <th>Nội dung</th>
                    <th>Ngày tạo</th>
                    <th>Thao tác</th>
                </tr>
                </thead>
                <tbody>
                @foreach($customerCares as $care)
                    <tr>
                        <td>{{ $care->id }}</td>
                        <td>{{ $care->full_name }}</td>
                        <td>{{ $care->email }}</td>
                        <td>{{ $care->phone_number }}</td>
                        <td>{{ $care->address }}</td>
                        <td>{{ Str::limit($care->content, 50) }}</td> <!-- Giới hạn nội dung -->
                        <td>{{ $care->created_at }}</td>
                        <td>
                            <form action="{{ route('admin.customer_care.destroy', ['customer_care' => $care->id]) }}"
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
