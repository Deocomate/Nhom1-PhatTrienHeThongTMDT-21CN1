<button @class([
    'btn',
    'btn-success'=>$type=="create",
    'btn-warning'=>$type=="update"
])
        data-bs-toggle="modal"
        data-bs-target="#{{$formId}}">
    @if($type=="create")
        Create
    @else
        Update
    @endif
</button>
