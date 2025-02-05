<?php

namespace App\View\Components\Forms;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class Update extends Component
{
    public string $formId;
    public string $formName;
    public string $route;


    public function __construct($formId, $formName, $route)
    {
        $this->formId = $formId;
        $this->formName = $formName;
        $this->route = $route;
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.forms.update');
    }
}
