<ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
    data-accordion="false">

    <!-- ADMIN BASE -->
    <li class="nav-header">ADMIN</li>
    <x-menus.menu-item :route="route('admin.index')" name="Home" icon="fas fa-tachometer-alt">
        <x-menus.nav-item :route="route('admin.index')" name="Home"></x-menus.nav-item>
        <x-menus.nav-item :route="route('admin.test.form')" name="Test Form"></x-menus.nav-item>
    </x-menus.menu-item>

    <!-- TOUR BASE -->
    <li class="nav-header">Quản lý Tour</li>
    <x-menus.menu-item :route="route('admin.destination.index')" name="Điểm du lịch"
                       icon="bi bi-geo-alt-fill">
        <x-menus.nav-item :route="route('admin.destination.index')" name="Danh sách"></x-menus.nav-item>
        <x-menus.nav-item :route="route('admin.destination.create')"
                          name="Thêm điểm du lịch"></x-menus.nav-item>
    </x-menus.menu-item>
    <x-menus.menu-item :route="route('admin.category.index')" name="Danh mục tour"
                       icon="fas fa-list-alt">
        <x-menus.nav-item :route="route('admin.category.index')" name="Danh sách"></x-menus.nav-item>
        <x-menus.nav-item :route="route('admin.category.create')" name="Thêm danh mục"></x-menus.nav-item>
    </x-menus.menu-item>
    <x-menus.menu-item :route="route('admin.tour.index')" name="Tour du lịch"
                       icon="bi bi-geo-fill">
        <x-menus.nav-item :route="route('admin.tour.index')" name="Danh sách"></x-menus.nav-item>
        <x-menus.nav-item :route="route('admin.tour.create')" name="Thêm danh mục"></x-menus.nav-item>
    </x-menus.menu-item>
    <x-menus.menu-item :route="route('admin.contact.index')" name="Cài đặt"
                       icon="bi bi-gear-fill">
        <x-menus.nav-item :route="route('admin.contact.index')" name="Thông tin liên hệ"></x-menus.nav-item>
    </x-menus.menu-item>

    <!-- CÁC MODULE KHÁC -->
</ul>
