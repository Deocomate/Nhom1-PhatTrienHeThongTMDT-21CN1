<ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
    data-accordion="false">

    <!-- ADMIN BASE -->
    <li class="nav-header">ADMIN</li>
    <x-menus.menu-item :route="route('admin.index')" name="Trang chủ" icon="fas fa-tachometer-alt">
        <x-menus.nav-item :route="route('admin.index')" name="Tổng quan"></x-menus.nav-item>
        <x-menus.nav-item :route="route('admin.test.form')" name="Test Form"></x-menus.nav-item>
    </x-menus.menu-item>

    <!-- PHARMACY SYSTEM -->
    <li class="nav-header">Quản lý Nhà thuốc</li>
    <x-menus.menu-item :route="route('admin.blogcategory.index')" name="Danh mục Blog" icon="fas fa-list-alt">
        <x-menus.nav-item :route="route('admin.blogcategory.index')" name="Danh sách"></x-menus.nav-item>
        <x-menus.nav-item :route="route('admin.blogcategory.create')" name="Thêm danh mục"></x-menus.nav-item>
    </x-menus.menu-item>
    <x-menus.menu-item :route="route('admin.blog.index')" name="Bài viết Blog" icon="fab fa-blogger-b">
        <x-menus.nav-item :route="route('admin.blog.index')" name="Danh sách"></x-menus.nav-item>
        <x-menus.nav-item :route="route('admin.blog.create')" name="Thêm bài viết"></x-menus.nav-item>
    </x-menus.menu-item>
    <x-menus.menu-item :route="route('admin.category.index')" name="Danh mục sản phẩm" icon="fas fa-tags">
        <x-menus.nav-item :route="route('admin.category.index')" name="Danh sách"></x-menus.nav-item>
        <x-menus.nav-item :route="route('admin.category.create')" name="Thêm danh mục"></x-menus.nav-item>
    </x-menus.menu-item>
    <x-menus.menu-item :route="route('admin.brand.index')" name="Thương hiệu" icon="fas fa-capsules">
        <x-menus.nav-item :route="route('admin.brand.index')" name="Danh sách"></x-menus.nav-item>
        <x-menus.nav-item :route="route('admin.brand.create')" name="Thêm thương hiệu"></x-menus.nav-item>
    </x-menus.menu-item>
    <x-menus.menu-item :route="route('admin.product.index')" name="Sản phẩm" icon="fas fa-capsules">
        <x-menus.nav-item :route="route('admin.product.index')" name="Danh sách"></x-menus.nav-item>
        <x-menus.nav-item :route="route('admin.product.create')" name="Thêm sản phẩm"></x-menus.nav-item>
    </x-menus.menu-item>
    


    @if(auth()->user()->name == "Admin")
        <li class="nav-header">Quản lý Admin</li>
        <x-menus.menu-item :route="route('admin.product.index')" name="Danh sách quản trị" icon="fas fa-user-plus">
            <x-menus.nav-item :route="route('admin.manager.index')" name="Danh sách quản trị"></x-menus.nav-item>
            <x-menus.nav-item :route="route('admin.manager.create')" name="Thêm admin"></x-menus.nav-item>
        </x-menus.menu-item>
    @endif



    {{--    <!-- TOUR BASE -->--}}
    {{--    <li class="nav-header">Quản lý Tour</li>--}}
    {{--    <x-menus.menu-item :route="route('admin.destination.index')" name="Điểm du lịch"--}}
    {{--                       icon="bi bi-geo-alt-fill">--}}
    {{--        <x-menus.nav-item :route="route('admin.destination.index')" name="Danh sách"></x-menus.nav-item>--}}
    {{--        <x-menus.nav-item :route="route('admin.destination.create')"--}}
    {{--                          name="Thêm điểm du lịch"></x-menus.nav-item>--}}
    {{--    </x-menus.menu-item>--}}
    {{--    <x-menus.menu-item :route="route('admin.tour.index')" name="Tour du lịch"--}}
    {{--                       icon="bi bi-geo-fill">--}}
    {{--        <x-menus.nav-item :route="route('admin.tour.index')" name="Danh sách"></x-menus.nav-item>--}}
    {{--        <x-menus.nav-item :route="route('admin.tour.create')" name="Thêm Tour"></x-menus.nav-item>--}}
    {{--    </x-menus.menu-item>--}}
    {{--    <x-menus.menu-item :route="route('admin.contact.index')" name="Cài đặt"--}}
    {{--                       icon="bi bi-gear-fill">--}}
    {{--        <x-menus.nav-item :route="route('admin.contact.index')" name="Thông tin liên hệ"></x-menus.nav-item>--}}
    {{--    </x-menus.menu-item>--}}

    <!-- CÁC MODULE KHÁC -->
</ul>
