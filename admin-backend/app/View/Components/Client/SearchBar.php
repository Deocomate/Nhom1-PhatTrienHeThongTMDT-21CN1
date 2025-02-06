<?php

namespace App\View\Components\Client;

use App\Models\BusSystem\Province;
use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class SearchBar extends Component
{
    public $provinces;
    public $districtStart;
    public $districtEnd;

    public function __construct()
    {
        $this->provinces = Province::orderByDesc("priority")->get();
        $this->districtStart = session("districtStart");
        $this->districtEnd = session("districtEnd");
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.client.search-bar');
    }
}
