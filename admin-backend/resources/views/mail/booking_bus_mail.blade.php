<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<h3>Cảm ơn bạn đã tin tưởng và đặt vé, chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất</h3>
<h3>Thanks For Your Booking!!! We will contact you as soon as possible <3</h3>
<ul>
    <li>Tên (Name): {{$mailData["name"]}}</li>
    <li>Email: {{$mailData["email"]}}</li>
    <li>Số điện thoại (Phone): {{$mailData["phone"]}}</li>
    <li>Thông tin vé: {{$mailData['company_route_bus']->bus->bus_company->name}}
        , {{$mailData['company_route_bus']->title}}</li>
    <li><a href="{{ route('client.detail_bus',['slug'=>$mailData['company_route_bus']->slug]) }}">Thông tin chi tiết xe ở đây</a></li>
</ul>
</body>
</html>
