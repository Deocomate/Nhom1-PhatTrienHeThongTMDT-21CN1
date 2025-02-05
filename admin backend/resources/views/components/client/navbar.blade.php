<ul>
    @foreach ($menuData->where('parent_id', null) as $menu)
        @include('components.client.menu-item', ['menu' => $menu, 'menuData' => $menuData])
    @endforeach
</ul>
