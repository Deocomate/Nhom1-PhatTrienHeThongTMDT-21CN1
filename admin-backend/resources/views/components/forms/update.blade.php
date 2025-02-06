<div class="modal fade" id="{{$formId}}" tabindex="-1">
    <div class="modal-dialog" style="width: 80%;max-width: 90%;margin: 100px auto">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5">Update {{$formName}}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                        aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form action="{{$route}}"
                      method="post">
                    @csrf
                    {{$slot}}
                    <button class="btn btn-success">Update {{$formName}}</button>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                </button>
            </div>
        </div>
    </div>
</div>
