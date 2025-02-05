<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Meta Tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield("title")</title>
    <meta name="description"
          content="">
    <meta name="keywords"
          content="travel booking template, tour booking,">
    <meta name="author" content="King Tours">
    <meta name="robots" content="index, follow">

    <!-- Apple Touch Icon -->
    <link rel="apple-touch-icon" sizes="180x180" href="/client/assets/img/apple-touch-icon.png">

    <!-- Favicon -->
    <link rel="icon" href="/client/assets/img/favicon.png" type="image/x-icon">
    <link rel="shortcut icon" href="/client/assets/img/favicon.png" type="image/x-icon">

    @include("client.components.styles")
    @stack("styles")
</head>

<body>

@include("client.components.header")

@yield("content")

@include("client.components.footer")

<!-- Cursor -->
<div class="xb-cursor tx-js-cursor">
    <div class="xb-cursor-wrapper">
        <div class="xb-cursor--follower xb-js-follower"></div>
    </div>
</div>
<!-- /Cursor -->

<div class="back-to-top">
    <a class="back-to-top-icon align-items-center justify-content-center d-flex" href="#top"><i
                class="fa-solid fa-arrow-up"></i></a>
</div>

@include("client.components.scripts")
@stack("scripts")

</body>

</html>
