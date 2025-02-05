<?php

namespace App\View\Components\Menus;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class MenuItem extends Component
{
    public string $icon;
    public string $name;
    public string $route;

    /**
     * Create a new component instance.
     */
    public function __construct($icon, $name, $route)
    {
        $this->icon = $icon;
        $this->name = $name;
        $this->route = $route;
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.menus.menu-item');
    }
}
