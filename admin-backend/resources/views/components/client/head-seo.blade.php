<?php
/**
 * @var \App\Models\Info\WebInfo $webInfo
 */
?>

<meta name="description" content="{{$description != ""?$description:$webInfo->description}}">

<meta name="keywords" content="@yield('title'), {{$description != ""?$description:$webInfo->description}}">

<link rel="canonical" href="{{ Request::fullUrl() }}">

<link rel="icon" type="image/x-icon"
      href="{{ asset("/client/assets/icons/favicon.ico") }}">

<!-- Open Graph -->
<meta property="og:type" content="website">

<meta property="og:title" content="@yield('title')">

<meta property="og:description"
      content="{{$description != ""?$description:$webInfo->description}}"> <!-- Giới hạn độ dài description cho og -->

<meta property="og:url" content="{{ Request::fullUrl() }}">

<meta property="og:image"
      content="{{$image == ""?$webInfo->logo:$image}}"> <!-- Hình ảnh og, nếu không có thì dùng logo -->

<meta property="og:locale" content="vi_VN">

<meta property="og:site_name" content="@yield('title')">
