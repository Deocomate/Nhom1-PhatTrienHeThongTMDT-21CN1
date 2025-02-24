@extends('admin.layouts.main')
@section('title','Danh sách quản trị viên')
@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Danh sách quản trị viên</h3>
        </div>
        <div class="card-body">
            @if(session('success'))
                <div class="alert alert-success">
                    {{ session('success') }}
                </div>
            @endif
 6
            @if(session('error'))
                <div class="alert alert-danger">
                    {{ session('error') }}
                </div>
            @endif

            <a href="{{ route('admin.manager.create') }}" class="btn btn-primary mb-3">Tạo mới</a>
            <table id="data-table" class="table table-bordered table-striped table-hover">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên</th>
                    <th>Email</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                @foreach($managers as $manager)
                    <tr>
                        <td>{{ $manager->id }}</td>
                        <td>{{ $manager->name }}</td>
                        <td>{{ $manager->email }}</td>
                        <td>
                            <a class="btn btn-warning"
                               href="{{ route('admin.manager.edit', ['manager' => $manager->id]) }}">Sửa</a>
                            @if($manager->email !== 'admin@gmail.com')
                                <form action="{{ route('admin.manager.destroy', ['manager' => $manager->id]) }}"
                                      method="POST" style="display: inline-block;">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="btn btn-danger"
                                            onclick="return confirm('Bạn có chắc muốn xóa?')">Xoá
                                    </button>
                                </form>
                            @endif
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
