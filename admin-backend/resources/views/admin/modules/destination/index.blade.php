<?php
/**
 * @var \App\Models\TourSystem\Destination[] $destinations
 */
?>
@extends('admin.layouts.main')
@section('title','Danh sách điểm đến')
@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Danh sách điểm đến</h3>
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
                @foreach($destinations as $destination)
                    <tr>
                        <td>{{ $destination->id }}</td>
                        <td>{{ $destination->title }}</td>
                        <td>
                            @if($destination->thumbnail)
                                <img src="{{ $destination->thumbnail }}" alt="{{ $destination->title }}"
                                     style="max-width: 100px; max-height: 100px;">
                            @else
                                Không có
                            @endif
                        </td>
                        <td>{{ $destination->description }}</td>
                        <td>{{ $destination->priority }}</td>
                        <td>
                            <a class="btn btn-warning"
                               href="{{ route('admin.destination.edit', ['destination' => $destination->id]) }}">Sửa</a>
                            <form action="{{ route('admin.destination.destroy', ['destination' => $destination->id]) }}"
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
