<?php
/**
 * @var \App\Models\TourSystem\Tour[] $tours
 */
?>
@extends('admin.layouts.main')
@section('title','Danh sách tour')
@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Danh sách tour</h3>
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
                    <th>Giá USD</th>
                    <th>Giá VND</th>
                    <th>Thời gian</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                @foreach($tours as $tour)
                    <tr>
                        <td>{{ $tour->id }}</td>
                        <td>{{ $tour->title }}</td>
                        <td>
                            @if($tour->thumbnail)
                                <img src="{{ $tour->thumbnail }}" alt="{{ $tour->title }}"
                                     style="max-width: 100px; max-height: 100px;">
                            @else
                                Không có
                            @endif
                        </td>
                        <td>{{ $tour->description }}</td>
                        <td>{{ $tour->price_usd }}</td>
                        <td>{{ $tour->price_vnd }}</td>
                        <td>{{ $tour->duration }}</td>
                        <td>
                            <a class="btn btn-warning"
                               href="{{ route('admin.tour.edit', ['tour' => $tour->id]) }}">Sửa</a>
                            <form action="{{ route('admin.tour.destroy', ['tour' => $tour->id]) }}"
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
