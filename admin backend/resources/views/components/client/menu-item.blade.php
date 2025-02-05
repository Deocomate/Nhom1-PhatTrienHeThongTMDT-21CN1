<li>
    <a href="{{ $menu->url }}">{{ $menu->name }}</a>
    @php
        $subMenus = $menuData->where('parent_id', $menu->id);
    @endphp
    @if ($subMenus->isNotEmpty())
        <ul>
            @foreach ($subMenus as $subMenu)
                @include('components.client.menu-item', ['menu' => $subMenu, 'menuData' => $menuData])
            @endforeach
        </ul>
    @endif
</li>
