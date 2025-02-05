<?php
/**
 * @var \App\Models\Info\WebInfo $webInfo
 */
?>
@extends("client.layouts.main")

@section('title',"King Express Bus giới thiệu công ty")

@section('seo')
    <x-client.head-seo
        :description="$webInfo->description"
        :image="$webInfo->logo"
    ></x-client.head-seo>
@endsection

@section('content')
    <main class="py-4">
        <section class="content container">
            {!! $webInfo->detail !!}
        </section>
    </main>
@endsection
