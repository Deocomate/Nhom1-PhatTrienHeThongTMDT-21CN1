<?php

namespace App\View\Components\Client;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class HeadSeo extends Component
{
    public string $description;

    public string $image;

    public function __construct($description, $image)
    {
        $this->description = $description;
        $this->image = $image;
    }

    public function render(): View|Closure|string
    {
        return view('components.client.head-seo');
    }
}
