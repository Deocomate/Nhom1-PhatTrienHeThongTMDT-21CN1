<?php

namespace App\View\Components\Client;

use App\Models\Menu;
use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class Navbar extends Component
{
    public $menuData;

    public function __construct()
    {
        $this->menuData = Menu::all();
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.client.navbar', ['menuData' => $this->menuData]);
    }
}
