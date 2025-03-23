<?php
/**
 * @var \stdClass $comment
 * @var \stdClass[] $replies
 */
?>
@extends('admin.layouts.main')
@section('title', 'Chi tiết bình luận')
@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Chi tiết bình luận</h3>
        </div>
        <div class="card-body">
            @if(session('success'))
                <div class="alert alert-success">
                    {{ session('success') }}
                </div>
            @endif

            <div class="mb-4">
                <a href="{{ route('admin.comment.index') }}" class="btn btn-secondary mb-3">
                    <i class="fas fa-arrow-left"></i> Quay lại
                </a>

                <div class="card bg-light">
                    <div class="card-header">
                        <h5 class="mb-0">
                            Bình luận từ khách hàng "{{ $comment->customer_name }}" về sản phẩm
                            "{{ $comment->product_title }}"
                        </h5>
                        <small class="text-muted">Đăng lúc: {{ $comment->created_at }}</small>
                    </div>
                    <div class="card-body">
                        <p class="card-text">{{ $comment->content }}</p>
                    </div>
                </div>
            </div>

            <div class="mb-4">
                <h4>Trả lời bình luận</h4>
                <form action="{{ route('admin.comment.add_reply') }}" method="post">
                    @csrf
                    <input type="hidden" name="comment_id" value="{{ $comment->id }}">
                    <x-inputs.text-area label="Nội dung trả lời" name="reply_content"/>
                    <button type="submit" class="btn btn-primary">Gửi trả lời</button>
                </form>
            </div>

            @if(count($replies) > 0)
                <div>
                    <h4>Danh sách trả lời ({{ count($replies) }})</h4>
                    <div class="timeline">
                        @foreach($replies as $reply)
                            <div class="time-label">
                                <span class="bg-info">{{ date('d/m/Y', strtotime($reply->created_at)) }}</span>
                            </div>
                            <div>
                                <i class="fas fa-comments bg-blue"></i>
                                <div class="timeline-item">
                                <span class="time">
                                    <i class="fas fa-clock"></i>
                                    {{ date('H:i', strtotime($reply->created_at)) }}
                                </span>
                                    <h3 class="timeline-header">Phản hồi từ admin</h3>
                                    <div class="timeline-body">
                                        {{ $reply->reply_content }}
                                    </div>
                                </div>
                            </div>
                        @endforeach
                        <div>
                            <i class="fas fa-clock bg-gray"></i>
                        </div>
                    </div>
                </div>
            @else
                <p>Chưa có phản hồi nào cho bình luận này.</p>
            @endif
        </div>
    </div>
@endsection
