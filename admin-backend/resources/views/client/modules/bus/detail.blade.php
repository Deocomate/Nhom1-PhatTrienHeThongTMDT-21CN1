<?php
/**
 * @var \App\Models\BusSystem\CompanyRouteBus $busDetail
 * @var \App\Models\BusSystem\BusCompany $busCompany
 * @var \App\Models\BusSystem\BusStation[] $pickupList
 * @var \App\Models\BusSystem\BusStation[] $dropoffList
 */
?>
@extends('client.layouts.main')
@section('title',"King Express Bus ".$busDetail->title)
@section('seo')
    <x-client.head-seo
        :description="$busDetail->description"
        :image="$busDetail->bus->thumbnail"
    ></x-client.head-seo>
@endsection
@section("content")
    <main>

        <!-- Bus Header Title and Image -->
        <section class="pt-4">
            <div class="container position-relative">
                <div class="row g-3">
                    <div class="col-12">
                        <div class="d-flex justify-content-between align-items-lg-center">
                            <!-- Title -->
                            <ul class="nav nav-divider align-items-center mb-0">
                                <li class="nav-item h4">
                                    <h1 class="fs-3">{{$busDetail->bus_company_route->bus_company->name}} -
                                        {{$busDetail->title}}</h1>
                                </li>
                                {{-- <li class="nav-item h5 fw-light">Hà Nội</li> --}}
                                {{-- <li class="nav-item h5 fw-light">Lào Cai</li> --}}
                                {{-- <li class="nav-item h5 fw-light">Sa Pa</li> --}}
                            </ul>
                        </div>
                    </div>
                    @if(session("userData"))
                        @php
                            $userData = session()->get("userData")
                        @endphp
                        <div class="col-12">
                            <div class="alert alert-success" role="alert">
                                Xác nhận đặt vé thành công!. Chung tôi sẽ liên hệ lại với bạn sớm nhất
                                <ul class="list-group">
                                    <li class="list-group-item"><b>Họ và tên: </b>{{$userData['name']}}</li>
                                    <li class="list-group-item"><b>Email: </b>{{$userData['email']}}</li>
                                    <li class="list-group-item"><b>Số điện thoại: </b>{{$userData['phone']}}</li>
                                </ul>
                            </div>
                        </div>
                    @endif
                </div>
            </div>
        </section>

        <section class="pt-0">
            <div class="container" data-sticky-container>
                <div class="row g-4 py-4">
                    <div class="col-xl-8">
                        <div class="vstack gap-5">
                            <!-- Bus Header Information and Image -->
                            <div class="card border p-4">
                                <div class="card-body p-0 mb-3">
                                    <div class="row g-4 align-items-center">
                                        <div class="col-md-4">
                                            <div class="bg-light rounded-3 overflow-hidden">
                                                <img
                                                    style="object-fit: cover"
                                                    class="w-100"
                                                    src="{{$busDetail->bus->thumbnail}}"
                                                    alt="">
                                            </div>
                                        </div>
                                        <div class="col-md-8">
                                            <!-- Tiêu đề -->
                                            <div class="d-sm-flex justify-content-sm-between">
                                                <div>
                                                    <h4 class="card-title mb-2">{{$busDetail->bus->title}}</h4>
                                                    <ul class="nav nav-divider h6 fw-normal mb-2">
                                                        <li class="nav-item">{{strtoupper($busDetail->bus->type)}}</li>
                                                        <li class="nav-item">{{$busDetail->bus->number_of_seats}}chỗ
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- Rating Star -->
                                                <ul class="list-inline mb-0">
                                                    <li class="list-inline-item me-0"><i
                                                            class="fa-solid fa-star text-warning"></i></li>
                                                    <li class="list-inline-item me-0"><i
                                                            class="fa-solid fa-star text-warning"></i></li>
                                                    <li class="list-inline-item me-0"><i
                                                            class="fa-solid fa-star text-warning"></i></li>
                                                    <li class="list-inline-item me-0"><i
                                                            class="fa-solid fa-star text-warning"></i></li>
                                                    <li class="list-inline-item"><i
                                                            class="fa-solid fa-star-half-alt text-warning"></i></li>
                                                </ul>
                                            </div>

                                            <!-- Danh sách -->
                                            <ul class="list-group list-group-borderless mt-2 mb-3">
                                                <li class="list-group-item d-flex pb-0 mb-0">
                                                <span class="h6 fw-normal mb-0"><i class="bi bi-check-circle me-2"></i>
                                                    <b>Các chuyến, khung giờ: </b> {{implode(' / ',json_decode($busDetail->start_at))}}
                                                </span>
                                                </li>
                                                <li class="list-group-item d-flex pb-0 mb-0">
                                                <span class="h6 fw-normal mb-0"><i class="bi bi-check-circle me-2"></i>
                                                    <b>Thời lượng di chuyển: </b> {{$busDetail->duration}} tiếng
                                                </span>
                                                </li>
                                                <li class="list-group-item d-flex pb-0 mb-0">
                                                <span class="h6 fw-normal mb-0"><i class="bi bi-check-circle me-2"></i>
                                                    <b>Giá vé (Price):</b> {{number_format($busDetail->retail_price)}}VND
                                                </span>
                                                </li>
                                                <li class="list-group-item d-flex pb-0 mb-0">
                                                <span class="h6 fw-normal mb-0"><i class="bi bi-check-circle me-2"></i>
                                                    <b>Danh sách điểm đón trả: </b>
                                                    <a class="text-decoration-underline" href="#pickup-dropoff-detail">Xem ở đây</a>
                                                </span>
                                                </li>
                                                <li class="list-group-item d-flex pb-0 mb-0">
                                                <span class="h6 fw-normal mb-0"><i class="bi bi-check-circle me-2"></i>
                                                    <b>Thông tin xe chi tiết: </b>
                                                    <a class="text-decoration-underline"
                                                       href="#bus-detail">Xem ở đây</a>
                                                </span>
                                                </li>
                                                <li class="list-group-item d-flex pb-0 mb-0">
                                                <span class="h6 fw-normal mb-0"><i class="bi bi-check-circle me-2"></i>
                                                    <b>Giá vé chi tiết và chính sách: </b>
                                                    <a class="text-decoration-underline"
                                                       href="#bus-policy">Xem ở đây</a>
                                                </span>
                                                </li>
                                                <li class="list-group-item d-flex pb-0 mb-0">
                                                <span class="h6 fw-normal mb-0"><i class="bi bi-check-circle me-2"></i>
                                                    <b>Giới thiệu nhà xe: </b>
                                                    <a class="text-decoration-underline"
                                                       href="#bus-company-information">Xem ở đây</a>
                                                </span>
                                                </li>
                                            </ul>

                                            <a href="#booking-ticket" class="btn btn-dark d-block d-xl-none">Đặt vé
                                                ngay</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-image-list">
                                    <div class="row">
                                        <!-- Slider START -->
                                        <div class="tiny-slider arrow-round arrow-xs arrow-dark">
                                            <div class="tiny-slider-inner rounded-2" data-autoplay="false"
                                                 data-arrow="true"
                                                 data-dots="false" data-items="3" data-items-sm="1">
                                                <!-- Image item -->
                                                @foreach($busDetail->bus->bus_images as $busImage)
                                                    <div>
                                                        <a class="w-100 h-100" data-glightbox data-gallery="gallery"
                                                           href="{{$busImage->link}}">
                                                            <div
                                                                class="card card-element-hover card-overlay-hover overflow-hidden">
                                                                <!-- Image -->
                                                                <img
                                                                    style="width: 100%;height: 200px;object-fit: cover"
                                                                    src="{{$busImage->link}}"
                                                                    class="rounded-3" alt="">
                                                                <!-- Full screen button -->
                                                                <div class="hover-element w-100 h-100">
                                                                    <i class="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"></i>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                @endforeach
                                            </div>
                                        </div>
                                        <!-- Slider END -->
                                    </div>
                                </div>
                            </div>
                            <!-- Bus Header Information and Image END -->

                            <!-- Điểm đón, trả khách -->
                            <div class="card border" id="pickup-dropoff-detail">
                                <div class="card-header border-bottom bg-transparent">
                                    <h4 class="mb-0">Chi tiết điểm đón - trả khách</h4>
                                </div>
                                <div class="card-body">
                                    <div class="mb-3">
                                        <h6>Điểm đón</h6>
                                        <ul class="list-group">
                                            @foreach($pickupList as $pickup)
                                                <li class="list-group-item">{{$pickup->name}}</li>
                                            @endforeach
                                        </ul>
                                    </div>
                                    <h6>Điểm trả</h6>
                                    <ul class="list-group">
                                        @foreach($dropoffList as $dropoff)
                                            <li class="list-group-item">{{$dropoff->name}}</li>
                                        @endforeach
                                    </ul>
                                </div>
                            </div>

                            <!-- Thông tin xe chi tiết -->
                            <div class="card bg-transparent" id="bus-detail">
                                <div class="card-header border-bottom bg-transparent px-0 pt-0">
                                    <h4 class="mb-0">Thông tin, tiện ích xe</h4>
                                </div>
                                <div class="card-body pt-4 p-0">
                                    <div class="content">
                                        {!! $busDetail->bus->detail !!}
                                    </div>
                                </div>
                            </div>
                            <!-- Thông tin xe chi tiết -->

                            <!-- Chính sách nhà xe -->
                            <div class="card bg-transparent" id="bus-policy">
                                <div class="card-header border-bottom bg-transparent px-0 pt-0">
                                    <h4 class="mb-0">Bao gồm, không bao gồm, chính sách vé xe</h4>
                                </div>
                                <div class="card-body pt-4 p-0">
                                    <div class="content">
                                        {!! $busCompany->policy !!}
                                    </div>
                                </div>
                            </div>
                            <!-- Chính sách nhà xe -->

                            <!-- Chính sách nhà xe -->
                            <div class="card bg-transparent" id="bus-company-information">
                                <div class="card-header border-bottom bg-transparent px-0 pt-0">
                                    <h4 class="mb-0">Giới thiệu nhà xe</h4>
                                </div>
                                <div class="card-body pt-4 p-0">
                                    <div class="content">
                                        {!! $busCompany->information !!}
                                    </div>
                                </div>
                            </div>
                            <!-- Chính sách nhà xe -->

                        </div>
                    </div>

                    <aside class="col-xl-4" id="booking-ticket">
                        <div data-sticky data-margin-top="80" data-sticky-for="1199" class="pb-4">
                            <div class="card border bg-light bg-transparent">
                                <div class="card-body">
                                    <!-- Title -->
                                    <h5 class="text-success fw-bold mb-3">
                                        Xác nhận giữ chỗ ngay <br>(Miễn phí)
                                    </h5>

                                    <!-- List -->
                                    <ul class="list-group list-group-borderless mb-0 border p-3 mb-3">
                                        <li class="list-group-item d-flex justify-content-between">
                                            <span class="h6 fw-light mb-0">Giá vé cơ bản</span>
                                            <span class="h6 fw-light mb-0">{{number_format($busDetail->retail_price)}}đ / người</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between">
                                            <span class="h6 fw-light mb-0">Giá vé nhóm</span>
                                            <span class="h6 fw-light mb-0"><a href="" class="text-decoration-underline">Liên hệ nhận ưu đãi</a></span>
                                        </li>
                                    </ul>

                                    @php
                                        use Carbon\Carbon;
                                        $dateValue = session("date") ?? Carbon::now()->format('d-m-Y');
                                    @endphp

                                    <form action="{{ route('client.send_information') }}" method="post">
                                        @csrf
                                        <input type="hidden" name="company_route_bus_id" value="{{ $busDetail->id }}">
                                        <input type="hidden" name="date" value="{{ $dateValue }}">

                                        <div class="d-grid gap-2">
                                            <div class="form-control-bg-light">
                                                <label class="form-label" for="input-name">Tên (Full name)</label>
                                                <input type="text" id="input-name" name="name"
                                                       class="form-control form-control-lg"
                                                       placeholder="Nhập tên của bạn (Enter full name)" required>
                                            </div>
                                            <div class="form-control-bg-light">
                                                <label class="form-label" for="input-email">Email</label>
                                                <input type="email" id="input-email" name="email"
                                                       class="form-control form-control-lg"
                                                       placeholder="Nhập email của bạn (Enter email)" required>
                                            </div>
                                            <div class="form-control-bg-light">
                                                <label class="form-label" for="input-phone">Số điện thoại
                                                    (Phone)</label>
                                                <input type="text" id="input-phone" name="phone"
                                                       class="form-control form-control-lg"
                                                       placeholder="Nhập số điện thoại (Enter phone)" required>
                                            </div>

                                            <button class="btn btn-outline-success mb-0 mt-2">
                                                Gửi thông tin giữ vé
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>


    </main>

    <div class="section-booking-redirect">
        <a href="#booking-ticket" class="btn btn-dark">Đặt vé ngay</a>
    </div>

    <div class="back-top"></div>
@endsection
