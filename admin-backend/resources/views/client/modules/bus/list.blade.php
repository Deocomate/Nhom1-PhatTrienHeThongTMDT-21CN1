<?php
/**
 * @var \App\Models\BusSystem\BusCompanyRoute[] $busCompanyRoutes
 * @var \App\Models\BusSystem\District $districtStart
 * @var \App\Models\BusSystem\District $districtEnd
 * @var \App\Models\BusSystem\RouteProvince[] $topLinks
 */
?>
@extends('client.layouts.main')
@section('title',"King Express Bus ".$seo["title"])

@section('seo')
    <x-client.head-seo
        :description="$seo['description']"
        :image="$seo['image']"
    ></x-client.head-seo>
@endsection

@section("content")
    <main>
        <section class="component-breadcrumb">
            <div class="container py-3">
                <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0">
                        <li class="breadcrumb-item"><a href="{{ route('client.homepage') }}">Trang chủ</a></li>
                        <li class="breadcrumb-item active" aria-current="page">
                            {{$seo['title']}}
                        </li>
                    </ol>
                </nav>
            </div>
        </section>
        <section>
            <div class="container">
                <x-client.search-bar></x-client.search-bar>
            </div>
        </section>
        <section class="search-all-contain py-4">
            <div class="container">
                <h1 class="fs-3">
                    Đặt mua vé: {{$seo["title"]}}
                </h1>
                <hr>
                <div class="row g-3">
                    <div class="col-lg-2 order-2 order-lg-1">
                        <div class="sort">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Bộ lọc</h5>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="sort" id="radio_default"
                                               value="default" checked="">
                                        <label class="form-check-label" for="radio_default">
                                            Mặc định
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h5>Top tìm kiếm</h5>
                                <ul class="list-group list-group-flush">
                                    @foreach($topLinks as $linkProvince)
                                        <li class="list-group-item px-0">
                                            <a href="{{ route('client.find_bus_get',['slug'=>$linkProvince->slug]) }}"
                                               class="text-decoration-underline">{{$linkProvince->title}}</a>
                                        </li>
                                        @foreach($linkProvince->route_districts as $link)
                                            <li class="list-group-item px-0">
                                                <a href="{{ route('client.find_bus_get',['slug'=>$link->slug]) }}"
                                                   class="text-decoration-underline">{{$link->title}}</a>
                                            </li>
                                        @endforeach
                                        @if($loop->index == 10)
                                            @break
                                        @endif
                                    @endforeach
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-10 order-1 order-lg-2">
                        <div class="sort-items-contain">
                            <div class="row g-3">
                                @foreach($busCompanyRoutes as $busCompanyRoute)
                                    @foreach($busCompanyRoute->company_route_buses as $bus)
                                        <div class="col-12">
                                            <div class="search-item-card">
                                                <div class="card border p-3">
                                                    <div class="d-flex flex-column flex-lg-row">
                                                        <div class="image-left">
                                                            <img
                                                                src="{{$bus->bus->thumbnail}}"
                                                                alt="">
                                                            <span>Hot</span>
                                                        </div>
                                                        <div class="content-right">
                                                            <a href="{{ route('client.detail_bus',['slug'=>$bus->slug]) }}">
                                                                <div
                                                                    class="d-flex justify-content-between flex-column flex-lg-row">
                                                                    <h3 class="fs-4">
                                                                        [{{$busCompanyRoute->bus_company->name}}]
                                                                        {{$bus->title}}</h3>
                                                                    <h3 class="fw-bold">
                                                            <span style="text-wrap: nowrap!important;"
                                                                  class="text-success">{{number_format($bus->retail_price)}}VND</span>
                                                                    </h3>
                                                                </div>
                                                            </a>
                                                            <p class="mb-3">
                                                                @if($bus->bus->type == "sleeper")
                                                                    Giường nằm đơn (Sleeper)
                                                                @elseif($bus->bus->type == "cabin")
                                                                    Cabin VIP
                                                                @else
                                                                    Limosion VIP
                                                                @endif
                                                            </p>
                                                            <div class="bus-time-information-contain">
                                                                <div class="bus-time-grid">
                                                                    <div class="grid-icon">
                                                                        <img
                                                                            src="{{asset("/client/assets/images/search-bar/pickup.svg")}}"
                                                                            alt="">
                                                                    </div>
                                                                    <div class="grid-item content">
                                                                        <h5 class="mb-0">
                                                                            Giờ xuất phát - điểm khởi hành: <br>
                                                                            <time>
                                                                                <b>{{implode(' / ',json_decode($bus->start_at))}}</b>
                                                                            </time>
                                                                            -
                                                                            <span>{{$districtStart->name}}</span>
                                                                        </h5>
                                                                    </div>
                                                                    <div class="grid-icon grid-dot">
                                                                        <div class="dotted"></div>
                                                                    </div>
                                                                    <div class="grid-item content">
                                                                        <b class="bus-type">
                                                                            Thời lượng:
                                                                            {{$bus->duration}} giờ
                                                                        </b>
                                                                    </div>
                                                                    <div class="grid-icon">
                                                                        <img
                                                                            src="{{asset("/client/assets/images/search-bar/drop.svg")}}"
                                                                            alt="">
                                                                    </div>
                                                                    <div class="grid-item content">
                                                                        <h5 class="mb-0">
                                                                            Điểm đến:
                                                                            <span>{{$districtEnd->name}} ({{$districtEnd->province->name}})</span>
                                                                        </h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="button">
                                                                <a href="{{ route('client.detail_bus',['slug'=>$bus->slug]) }}">
                                                                    <button class="btn btn-warning">
                                                                        Thông tin chi tiết, đặt vé ngay!
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    @endforeach
                                @endforeach
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
@endsection
