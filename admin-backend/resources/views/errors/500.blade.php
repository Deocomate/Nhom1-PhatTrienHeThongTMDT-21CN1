@extends('client.layouts.main')
@section('title',"Không tìm thấy trang này")
@section("content")
    <div class="container py-4">
        <h1>404 Không tìm thấy trang này</h1>
        <a id="redirect_button" href="{{ route('client.homepage') }}" class="btn btn-warning btn-lg">Quay về trang
            chủ</a>
    </div>
    @push('scripts')
        <script>
            let redirect_button = document.getElementById('redirect_button')
            redirect_button.click()
        </script>
    @endpush
@endsection
