<?php

namespace App\View\Components\Forms;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class Button extends Component
{
    public string $type;
    public string $formId;

    public function __construct($formId, $type)
    {
        $this->formId = $formId;
        $this->type = $type;
    }

    public function render(): View|Closure|string
    {
        return view('components.forms.button');
    }
}
