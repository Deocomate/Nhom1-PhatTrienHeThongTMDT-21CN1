<?php
/**
 * @var \App\Models\BusSystem\Province[] $provinces
 */
//dd($provinces);
?>

<section class="search-bar">
    <form action="{{ route('client.find_bus') }}" method="post">
        @csrf
        <div class="border p-3 bg-white rounded-3 shadow-lg"
             style="">
            <div class="row g-3">
                <div class="col-lg-10">
                    <div class="search-bar-inputs">
                        <div class="row g-1">
                            <div class="col-md-4">
                                <div class="search-bar-input input-pickup">
                                    <div class="d-flex align-items-center">
                                        <div class="p-2">
                                            <img src="/client/assets/images/search-bar/pickup.svg" alt="">
                                        </div>
                                        <div class="d-flex flex-column w-100">
                                            <label for="select-pickup">Điểm đi (Start)</label>
                                            <select class="library-choicesjs" id="select-pickup"
                                                    name="district_id_start">
                                                @foreach($provinces as $province)
                                                    @if($province->districts->count()<=0)
                                                        @continue
                                                    @else
                                                        <optgroup label="{{$province->name}}">
                                                            @foreach($province->districts as $district)
                                                                @php
                                                                    $name = "";
                                                                    if ($district->name == $district->province->name){
                                                                        $name = $district->name;
                                                                    }else{
                                                                        $name = $district->name." - ".$district->province->name;
                                                                    }
                                                                @endphp
                                                                <option
                                                                    @selected($district->id == $districtStart->id)
                                                                    value="{{$district->id}}">{{$name}}</option>
                                                            @endforeach
                                                        </optgroup>
                                                    @endif
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="search-bar-input input-pickup">
                                    <div class="d-flex align-items-center">
                                        <div class="p-2">
                                            <img src="/client/assets/images/search-bar/drop.svg" alt="">
                                        </div>
                                        <div class="d-flex flex-column w-100">
                                            <label for="select-dropoff">Điểm đến (End)</label>
                                            <select class="library-choicesjs" id="select-dropoff"
                                                    name="district_id_end">
                                                @foreach($provinces as $province)
                                                    @if($province->districts->count()<=0)
                                                        @continue
                                                    @else
                                                        <optgroup label="{{$province->name}}">
                                                            @foreach($province->districts as $district)
                                                                @php
                                                                    $name = "";
                                                                    if ($district->name == $district->province->name){
                                                                        $name = $district->name;
                                                                    }else{
                                                                        $name = $district->name." - ".$district->province->name;
                                                                    }
                                                                @endphp
                                                                <option
                                                                    @selected($district->id == $districtEnd->id)
                                                                    value="{{$district->id}}">{{$name}}</option>
                                                            @endforeach
                                                        </optgroup>
                                                    @endif
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="search-bar-input input-date">
                                    <div class="d-flex align-items-center">
                                        <div class="p-2">
                                            <img src="/client/assets/images/search-bar/date.svg" alt="">
                                        </div>
                                        <div class="d-flex flex-column w-100">
                                            <label for="input-date">Ngày đi (Date)</label>
                                            <input type="text"
                                                   name="date"
                                                   id="input-date"
                                                   value="{{session("date")}}"
                                                   class="form-control w-100 library-flatpickr">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="search-bar-button-submit h-100">
                        <button class="btn btn-warning w-100 h-100 d-block fw-bold">
                            Tìm kiếm (Search)
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</section>
