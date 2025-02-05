<?php /**cd67vcoj
 *
 * @var \App\Models\TourSystem\Tour[] $tours
 */ ?>
@extends("client.layouts.main")
@section("title","King Tours")
@section("content")
    <!-- Hero Section -->
    <section class="hero-sec-six">
        <div class="container">
            <div class="hero-content">
                <div class="row align-items-center">
                    <div class="col-md-12">
                        <div class="banner-content wow fadeInUp mb-4" data-wow-delay="0.3">
                            <h1 class="text-white display-5 mb-2">Booking a tour can be an exciting way to <br> explore
                                a
                                new destination!</h1>
                            <P class="text-white">Your ultimate destination for all things help you celebrate & remember
                                tour experience.</P>
                        </div>
                        <div class="banner-form-tab-six">
                            <ul class="nav">
                                <li>
                                    <a href="javascript:void(0);" class="nav-link active" data-bs-toggle="tab"
                                       data-bs-target="#Tour">
                                        <i class="fa-solid fa-camera me-2"></i>Tour
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="banner-form card mb-0">
                            <div class="card-body">
                                <div>
                                    <div class="tab-content">
                                        <div class="tab-pane fade" id="flight">
                                            <form action="flight-grid.html">
                                                <div
                                                    class="d-flex align-items-center justify-content-between flex-wrap mb-2">
                                                    <div class="d-flex align-items-center">
                                                        <div class="form-check d-flex align-items-center me-3 mb-2">
                                                            <input class="form-check-input mt-0" type="radio"
                                                                   name="Radio"
                                                                   id="oneway" value="oneway" checked>
                                                            <label class="form-check-label fs-14 ms-2" for="oneway">
                                                                Oneway
                                                            </label>
                                                        </div>
                                                        <div class="form-check d-flex align-items-center me-3 mb-2">
                                                            <input class="form-check-input mt-0" type="radio"
                                                                   name="Radio"
                                                                   id="roundtrip" value="roundtrip">
                                                            <label class="form-check-label fs-14 ms-2" for="roundtrip">
                                                                Round Trip
                                                            </label>
                                                        </div>
                                                        <div class="form-check d-flex align-items-center me-3 mb-2">
                                                            <input class="form-check-input mt-0" type="radio"
                                                                   name="Radio"
                                                                   id="multiway" value="multiway">
                                                            <label class="form-check-label fs-14 ms-2" for="multiway">
                                                                Multi Trip
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <h6 class="fw-medium fs-16 mb-2">Millions of cheap flights. One
                                                        simple
                                                        search</h6>
                                                </div>
                                                <div class="normal-trip">
                                                    <div class="d-lg-flex">
                                                        <div class="d-flex  form-info">
                                                            <div class="form-item dropdown">
                                                                <div data-bs-toggle="dropdown"
                                                                     data-bs-auto-close="outside"
                                                                     aria-expanded="false" role="menu">
                                                                    <label
                                                                        class="form-label fs-14 text-default mb-1">From</label>
                                                                    <input type="text" class="form-control"
                                                                           value="Newyork">
                                                                    <p class="fs-12 mb-0">Ken International Airport</p>
                                                                </div>
                                                                <div class="dropdown-menu dropdown-md p-0">
                                                                    <div class="input-search p-3 border-bottom">
                                                                        <div class="input-group">
                                                                            <input type="text" class="form-control"
                                                                                   placeholder="Search Location">
                                                                            <span
                                                                                class="input-group-text px-2 border-start-0"><i
                                                                                    class="isax isax-search-normal"></i></span>
                                                                        </div>
                                                                    </div>
                                                                    <ul>
                                                                        <li class="border-bottom">
                                                                            <a class="dropdown-item"
                                                                               href="javascript:void(0);">
                                                                                <h6 class="fs-16 fw-medium">Newyork</h6>
                                                                                <p>Ken International Airport</p>
                                                                            </a>
                                                                        </li>
                                                                        <li class="border-bottom">
                                                                            <a class="dropdown-item"
                                                                               href="javascript:void(0);">
                                                                                <h6 class="fs-16 fw-medium">Boston</h6>
                                                                                <p>Boston Logan International
                                                                                    Airport</p>
                                                                            </a>
                                                                        </li>
                                                                        <li class="border-bottom">
                                                                            <a class="dropdown-item"
                                                                               href="javascript:void(0);">
                                                                                <h6 class="fs-16 fw-medium">Northern
                                                                                    Virginia</h6>
                                                                                <p>Dulles International Airport</p>
                                                                            </a>
                                                                        </li>
                                                                        <li class="border-bottom">
                                                                            <a class="dropdown-item"
                                                                               href="javascript:void(0);">
                                                                                <h6 class="fs-16 fw-medium">Los
                                                                                    Angeles</h6>
                                                                                <p>Los Angeles International Airport</p>
                                                                            </a>
                                                                        </li>
                                                                        <li class="border-bottom">
                                                                            <a class="dropdown-item"
                                                                               href="javascript:void(0);">
                                                                                <h6 class="fs-16 fw-medium">Orlando</h6>
                                                                                <p>Orlando International Airport</p>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div class="form-item dropdown ps-2 ps-sm-3">
                                                                <div data-bs-toggle="dropdown"
                                                                     data-bs-auto-close="outside"
                                                                     aria-expanded="false" role="menu">
                                                                    <label
                                                                        class="form-label fs-14 text-default mb-1">To</label>
                                                                    <h5>Las Vegas</h5>
                                                                    <p class="fs-12 mb-0">Martini International
                                                                        Airport</p>
                                                                    <span
                                                                        class="way-icon badge badge-primary rounded-pill translate-middle">
                                                                        <i class="fa-solid fa-arrow-right-arrow-left"></i>
                                                                    </span>
                                                                </div>
                                                                <div class="dropdown-menu dropdown-md p-0">
                                                                    <div class="input-search p-3 border-bottom">
                                                                        <div class="input-group">
                                                                            <input type="text" class="form-control"
                                                                                   placeholder="Search Location">
                                                                            <span
                                                                                class="input-group-text px-2 border-start-0"><i
                                                                                    class="isax isax-search-normal"></i></span>
                                                                        </div>
                                                                    </div>
                                                                    <ul>
                                                                        <li class="border-bottom">
                                                                            <a class="dropdown-item"
                                                                               href="javascript:void(0);">
                                                                                <h6 class="fs-16 fw-medium">Newyork</h6>
                                                                                <p>Ken International Airport</p>
                                                                            </a>
                                                                        </li>
                                                                        <li class="border-bottom">
                                                                            <a class="dropdown-item"
                                                                               href="javascript:void(0);">
                                                                                <h6 class="fs-16 fw-medium">Boston</h6>
                                                                                <p>Boston Logan International
                                                                                    Airport</p>
                                                                            </a>
                                                                        </li>
                                                                        <li class="border-bottom">
                                                                            <a class="dropdown-item"
                                                                               href="javascript:void(0);">
                                                                                <h6 class="fs-16 fw-medium">Northern
                                                                                    Virginia</h6>
                                                                                <p>Dulles International Airport</p>
                                                                            </a>
                                                                        </li>
                                                                        <li class="border-bottom">
                                                                            <a class="dropdown-item"
                                                                               href="javascript:void(0);">
                                                                                <h6 class="fs-16 fw-medium">Los
                                                                                    Angeles</h6>
                                                                                <p>Los Angeles International Airport</p>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a class="dropdown-item"
                                                                               href="javascript:void(0);">
                                                                                <h6 class="fs-16 fw-medium">Orlando</h6>
                                                                                <p>Orlando International Airport</p>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div class="form-item">
                                                                <label
                                                                    class="form-label fs-14 text-default mb-1">Departure</label>
                                                                <input type="text" class="form-control datetimepicker"
                                                                       value="21-10-2024">
                                                                <p class="fs-12 mb-0">Monday</p>
                                                            </div>
                                                            <div class="form-item round-drip">
                                                                <label
                                                                    class="form-label fs-14 text-default mb-1">Return</label>
                                                                <input type="text" class="form-control datetimepicker"
                                                                       value="23-10-2024">
                                                                <p class="fs-12 mb-0">Wednesday</p>
                                                            </div>
                                                            <div class="form-item dropdown">
                                                                <div data-bs-toggle="dropdown"
                                                                     data-bs-auto-close="outside"
                                                                     aria-expanded="false" role="menu">
                                                                    <label class="form-label fs-14 text-default mb-1">Travellers
                                                                        and cabin class</label>
                                                                    <h5>4 <span class="fw-normal fs-14">Persons</span>
                                                                    </h5>
                                                                    <p class="fs-12 mb-0">1 Adult, Economy</p>
                                                                </div>
                                                                <div
                                                                    class="dropdown-menu dropdown-menu-end dropdown-xl">
                                                                    <h5 class="mb-3">Select Travelers & Class</h5>
                                                                    <div class="mb-3 border br-10 info-item pb-1">
                                                                        <h6 class="fs-16 fw-medium mb-2">Travellers</h6>
                                                                        <div class="row">
                                                                            <div class="col-md-4">
                                                                                <div class="mb-3">
                                                                                    <label
                                                                                        class="form-label text-gray-9 mb-2">Adults
                                                                                        <span
                                                                                            class="text-default fw-normal">( 12+ Yrs )</span></label>
                                                                                    <div class="custom-increment">
                                                                                        <div class="input-group">
                                                                                            <span
                                                                                                class="input-group-btn float-start">
                                                                                                <button type="button"
                                                                                                        class="quantity-left-minus btn btn-light btn-number"
                                                                                                        data-type="minus"
                                                                                                        data-field="">
                                                                                                <span><i
                                                                                                        class="isax isax-minus"></i></span>
                                                                                            </button>
                                                                                            </span>
                                                                                            <input type="text"
                                                                                                   name="quantity"
                                                                                                   class=" input-number"
                                                                                                   value="01">
                                                                                            <span
                                                                                                class="input-group-btn float-end">
                                                                                                <button type="button"
                                                                                                        class="quantity-right-plus btn btn-light btn-number"
                                                                                                        data-type="plus"
                                                                                                        data-field="">
                                                                                                    <span><i
                                                                                                            class="isax isax-add"></i></span>
                                                                                            </button>
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-md-4">
                                                                                <div class="mb-3">
                                                                                    <label
                                                                                        class="form-label text-gray-9 mb-2">Childrens
                                                                                        <span
                                                                                            class="text-default fw-normal">( 2-12 Yrs )</span></label>
                                                                                    <div class="custom-increment">
                                                                                        <div class="input-group">
                                                                                            <span
                                                                                                class="input-group-btn float-start">
                                                                                                <button type="button"
                                                                                                        class="quantity-left-minus btn btn-light btn-number"
                                                                                                        data-type="minus"
                                                                                                        data-field="">
                                                                                                <span><i
                                                                                                        class="isax isax-minus"></i></span>
                                                                                            </button>
                                                                                            </span>
                                                                                            <input type="text"
                                                                                                   name="quantity"
                                                                                                   class=" input-number"
                                                                                                   value="01">
                                                                                            <span
                                                                                                class="input-group-btn float-end">
                                                                                                <button type="button"
                                                                                                        class="quantity-right-plus btn btn-light btn-number"
                                                                                                        data-type="plus"
                                                                                                        data-field="">
                                                                                                    <span><i
                                                                                                            class="isax isax-add"></i></span>
                                                                                            </button>
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-md-4">
                                                                                <div class="mb-3">
                                                                                    <label
                                                                                        class="form-label text-gray-9 mb-2">Infants<span
                                                                                            class="text-default fw-normal">( 0-12 Yrs )</span></label>
                                                                                    <div class="custom-increment">
                                                                                        <div class="input-group">
                                                                                            <span
                                                                                                class="input-group-btn float-start">
                                                                                                <button type="button"
                                                                                                        class="quantity-left-minus btn btn-light btn-number"
                                                                                                        data-type="minus"
                                                                                                        data-field="">
                                                                                                <span><i
                                                                                                        class="isax isax-minus"></i></span>
                                                                                            </button>
                                                                                            </span>
                                                                                            <input type="text"
                                                                                                   name="quantity"
                                                                                                   class=" input-number"
                                                                                                   value="01">
                                                                                            <span
                                                                                                class="input-group-btn float-end">
                                                                                                <button type="button"
                                                                                                        class="quantity-right-plus btn btn-light btn-number"
                                                                                                        data-type="plus"
                                                                                                        data-field="">
                                                                                                    <span><i
                                                                                                            class="isax isax-add"></i></span>
                                                                                            </button>
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="mb-3 border br-10 info-item pb-1">
                                                                        <h6 class="fs-16 fw-medium mb-2">Travellers</h6>
                                                                        <div
                                                                            class="d-flex align-items-center flex-wrap">
                                                                            <div class="form-check me-3 mb-3">
                                                                                <input class="form-check-input"
                                                                                       type="radio"
                                                                                       value="Economy"
                                                                                       name="cabin-class"
                                                                                       id="economy" checked>
                                                                                <label class="form-check-label"
                                                                                       for="economy">
                                                                                    Economy
                                                                                </label>
                                                                            </div>
                                                                            <div class="form-check me-3 mb-3">
                                                                                <input class="form-check-input"
                                                                                       type="radio"
                                                                                       value="Economy"
                                                                                       name="cabin-class"
                                                                                       id="premium-economy">
                                                                                <label class="form-check-label"
                                                                                       for="premium-economy">
                                                                                    Premium Economy
                                                                                </label>
                                                                            </div>
                                                                            <div class="form-check me-3 mb-3">
                                                                                <input class="form-check-input"
                                                                                       type="radio"
                                                                                       value="Business"
                                                                                       name="cabin-class"
                                                                                       id="business">
                                                                                <label class="form-check-label"
                                                                                       for="business">
                                                                                    Business
                                                                                </label>
                                                                            </div>
                                                                            <div class="form-check mb-3">
                                                                                <input class="form-check-input"
                                                                                       type="radio"
                                                                                       value="First Class"
                                                                                       name="cabin-class"
                                                                                       id="first-class">
                                                                                <label class="form-check-label"
                                                                                       for="first-class">
                                                                                    First Class
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="d-flex justify-content-end">
                                                                        <a href="javascript:void(0);"
                                                                           class="btn btn-light btn-sm me-2">Cancel</a>
                                                                        <button type="submit"
                                                                                class="btn btn-primary btn-sm">Apply
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button type="submit"
                                                                class="btn btn-primary search-btn rounded">
                                                            Search
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="multi-trip">
                                                    <div class="d-lg-flex">
                                                        <div class="d-flex  form-info">
                                                            <div class="form-item dropdown">
                                                                <div data-bs-toggle="dropdown"
                                                                     data-bs-auto-close="outside"
                                                                     aria-expanded="false" role="menu">
                                                                    <label
                                                                        class="form-label fs-14 text-default mb-1">From</label>
                                                                    <input type="text" class="form-control"
                                                                           value="Newyork">
                                                                    <p class="fs-12 mb-0">Ken International Airport</p>
                                                                </div>
                                                                <div class="dropdown-menu dropdown-md p-0">
                                                                    <div class="input-search p-3 border-bottom">
                                                                        <div class="input-group">
                                                                            <input type="text" class="form-control"
                                                                                   placeholder="Search Location">
                                                                            <span
                                                                                class="input-group-text px-2 border-start-0"><i
                                                                                    class="isax isax-search-normal"></i></span>
                                                                        </div>
                                                                    </div>
                                                                    <ul>
                                                                        <li class="border-bottom">
                                                                            <a class="dropdown-item"
                                                                               href="javascript:void(0);">
                                                                                <h6 class="fs-16 fw-medium">Newyork</h6>
                                                                                <p>Ken International Airport</p>
                                                                            </a>
                                                                        </li>
                                                                        <li class="border-bottom">
                                                                            <a class="dropdown-item"
                                                                               href="javascript:void(0);">
                                                                                <h6 class="fs-16 fw-medium">Boston</h6>
                                                                                <p>Boston Logan International
                                                                                    Airport</p>
                                                                            </a>
                                                                        </li>
                                                                        <li class="border-bottom">
                                                                            <a class="dropdown-item"
                                                                               href="javascript:void(0);">
                                                                                <h6 class="fs-16 fw-medium">Northern
                                                                                    Virginia</h6>
                                                                                <p>Dulles International Airport</p>
                                                                            </a>
                                                                        </li>
                                                                        <li class="border-bottom">
                                                                            <a class="dropdown-item"
                                                                               href="javascript:void(0);">
                                                                                <h6 class="fs-16 fw-medium">Los
                                                                                    Angeles</h6>
                                                                                <p>Los Angeles International Airport</p>
                                                                            </a>
                                                                        </li>
                                                                        <li class="border-bottom">
                                                                            <a class="dropdown-item"
                                                                               href="javascript:void(0);">
                                                                                <h6 class="fs-16 fw-medium">Orlando</h6>
                                                                                <p>Orlando International Airport</p>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div class="form-item dropdown ps-2 ps-sm-3">
                                                                <div data-bs-toggle="dropdown"
                                                                     data-bs-auto-close="outside"
                                                                     aria-expanded="false" role="menu">
                                                                    <label
                                                                        class="form-label fs-14 text-default mb-1">To</label>
                                                                    <h5>Las Vegas</h5>
                                                                    <p class="fs-12 mb-0">Martini International
                                                                        Airport</p>
                                                                    <span
                                                                        class="way-icon badge badge-primary rounded-pill translate-middle">
                                                                        <i class="fa-solid fa-arrow-right-arrow-left"></i>
                                                                    </span>
                                                                </div>
                                                                <div class="dropdown-menu dropdown-md p-0">
                                                                    <div class="input-search p-3 border-bottom">
                                                                        <div class="input-group">
                                                                            <input type="text" class="form-control"
                                                                                   placeholder="Search Location">
                                                                            <span
                                                                                class="input-group-text px-2 border-start-0"><i
                                                                                    class="isax isax-search-normal"></i></span>
                                                                        </div>
                                                                    </div>
                                                                    <ul>
                                                                        <li class="border-bottom">
                                                                            <a class="dropdown-item"
                                                                               href="javascript:void(0);">
                                                                                <h6 class="fs-16 fw-medium">Newyork</h6>
                                                                                <p>Ken International Airport</p>
                                                                            </a>
                                                                        </li>
                                                                        <li class="border-bottom">
                                                                            <a class="dropdown-item"
                                                                               href="javascript:void(0);">
                                                                                <h6 class="fs-16 fw-medium">Boston</h6>
                                                                                <p>Boston Logan International
                                                                                    Airport</p>
                                                                            </a>
                                                                        </li>
                                                                        <li class="border-bottom">
                                                                            <a class="dropdown-item"
                                                                               href="javascript:void(0);">
                                                                                <h6 class="fs-16 fw-medium">Northern
                                                                                    Virginia</h6>
                                                                                <p>Dulles International Airport</p>
                                                                            </a>
                                                                        </li>
                                                                        <li class="border-bottom">
                                                                            <a class="dropdown-item"
                                                                               href="javascript:void(0);">
                                                                                <h6 class="fs-16 fw-medium">Los
                                                                                    Angeles</h6>
                                                                                <p>Los Angeles International Airport</p>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a class="dropdown-item"
                                                                               href="javascript:void(0);">
                                                                                <h6 class="fs-16 fw-medium">Orlando</h6>
                                                                                <p>Orlando International Airport</p>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div class="form-item">
                                                                <label
                                                                    class="form-label fs-14 text-default mb-1">Departure</label>
                                                                <input type="text" class="form-control datetimepicker"
                                                                       value="21-10-2024">
                                                                <p class="fs-12 mb-0">Monday</p>
                                                            </div>
                                                        </div>
                                                        <button type="submit"
                                                                class="btn btn-primary search-btn rounded">
                                                            Search
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="tab-pane fade" id="Hotels">
                                            <form action="hotel-grid.html">
                                                <div
                                                    class="d-flex align-items-center justify-content-between flex-wrap mb-2">
                                                    <h6 class="fw-medium fs-16 mb-2">Book Hotel - Villas, Apartments &
                                                        more.</h6>
                                                </div>
                                                <div class="d-lg-flex">
                                                    <div class="d-flex  form-info">
                                                        <div class="form-item dropdown">
                                                            <div data-bs-toggle="dropdown" data-bs-auto-close="outside"
                                                                 aria-expanded="false" role="menu">
                                                                <label class="form-label fs-14 text-default mb-1">City,
                                                                    Property name or Location</label>
                                                                <input type="text" class="form-control" value="Newyork">
                                                                <p class="fs-12 mb-0">USA</p>
                                                            </div>
                                                            <div class="dropdown-menu dropdown-md p-0">
                                                                <div class="input-search p-3 border-bottom">
                                                                    <div class="input-group">
                                                                        <input type="text" class="form-control"
                                                                               placeholder="Search for City, Property name or Location">
                                                                        <span
                                                                            class="input-group-text px-2 border-start-0"><i
                                                                                class="isax isax-search-normal"></i></span>
                                                                    </div>
                                                                </div>
                                                                <ul>
                                                                    <li class="border-bottom">
                                                                        <a class="dropdown-item"
                                                                           href="javascript:void(0);">
                                                                            <h6 class="fs-16 fw-medium">USA</h6>
                                                                            <p>2000 Properties</p>
                                                                        </a>
                                                                    </li>
                                                                    <li class="border-bottom">
                                                                        <a class="dropdown-item"
                                                                           href="javascript:void(0);">
                                                                            <h6 class="fs-16 fw-medium">Japan</h6>
                                                                            <p>3000 Properties</p>
                                                                        </a>
                                                                    </li>
                                                                    <li class="border-bottom">
                                                                        <a class="dropdown-item"
                                                                           href="javascript:void(0);">
                                                                            <h6 class="fs-16 fw-medium">Singapore</h6>
                                                                            <p>8000 Properties</p>
                                                                        </a>
                                                                    </li>
                                                                    <li class="border-bottom">
                                                                        <a class="dropdown-item"
                                                                           href="javascript:void(0);">
                                                                            <h6 class="fs-16 fw-medium">Russia</h6>
                                                                            <p>8000 Properties</p>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="dropdown-item"
                                                                           href="javascript:void(0);">
                                                                            <h6 class="fs-16 fw-medium">Germany</h6>
                                                                            <p>2000 Properties</p>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="form-item">
                                                            <label class="form-label fs-14 text-default mb-1">Check
                                                                In</label>
                                                            <input type="text" class="form-control datetimepicker"
                                                                   value="21-10-2025">
                                                            <p class="fs-12 mb-0">Monday</p>
                                                        </div>
                                                        <div class="form-item">
                                                            <label class="form-label fs-14 text-default mb-1">Check
                                                                Out</label>
                                                            <input type="text" class="form-control datetimepicker"
                                                                   value="21-10-2025">
                                                            <p class="fs-12 mb-0">Monday</p>
                                                        </div>
                                                        <div class="form-item dropdown">
                                                            <div data-bs-toggle="dropdown" data-bs-auto-close="outside"
                                                                 aria-expanded="false" role="menu">
                                                                <label
                                                                    class="form-label fs-14 text-default mb-1">Guests</label>
                                                                <h5>4 <span class="fw-normal fs-14">Persons</span></h5>
                                                                <p class="fs-12 mb-0">4 Adult, 2 Rooms</p>
                                                            </div>
                                                            <div class="dropdown-menu dropdown-menu-end dropdown-xl">
                                                                <h5 class="mb-3">Select Travelers & Class</h5>
                                                                <div class="mb-3 border br-10 info-item pb-1">
                                                                    <div class="row">
                                                                        <div class="col-md-12">
                                                                            <div
                                                                                class="mb-3 d-flex align-items-center justify-content-between">
                                                                                <label
                                                                                    class="form-label text-gray-9 mb-2">Rooms</label>
                                                                                <div class="custom-increment">
                                                                                    <div class="input-group">
                                                                                        <span
                                                                                            class="input-group-btn float-start">
                                                                                            <button type="button"
                                                                                                    class="quantity-left-minus btn btn-light btn-number"
                                                                                                    data-type="minus"
                                                                                                    data-field="">
                                                                                            <span><i
                                                                                                    class="isax isax-minus"></i></span>
                                                                                        </button>
                                                                                        </span>
                                                                                        <input type="text"
                                                                                               name="quantity"
                                                                                               class=" input-number"
                                                                                               value="01">
                                                                                        <span
                                                                                            class="input-group-btn float-end">
                                                                                            <button type="button"
                                                                                                    class="quantity-right-plus btn btn-light btn-number"
                                                                                                    data-type="plus"
                                                                                                    data-field="">
                                                                                                <span><i
                                                                                                        class="isax isax-add"></i></span>
                                                                                        </button>
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-12">
                                                                            <div
                                                                                class="mb-3 d-flex align-items-center justify-content-between">
                                                                                <label
                                                                                    class="form-label text-gray-9 mb-2">Adults</label>
                                                                                <div class="custom-increment">
                                                                                    <div class="input-group">
                                                                                        <span
                                                                                            class="input-group-btn float-start">
                                                                                            <button type="button"
                                                                                                    class="quantity-left-minus btn btn-light btn-number"
                                                                                                    data-type="minus"
                                                                                                    data-field="">
                                                                                            <span><i
                                                                                                    class="isax isax-minus"></i></span>
                                                                                        </button>
                                                                                        </span>
                                                                                        <input type="text"
                                                                                               name="quantity"
                                                                                               class=" input-number"
                                                                                               value="01">
                                                                                        <span
                                                                                            class="input-group-btn float-end">
                                                                                            <button type="button"
                                                                                                    class="quantity-right-plus btn btn-light btn-number"
                                                                                                    data-type="plus"
                                                                                                    data-field="">
                                                                                                <span><i
                                                                                                        class="isax isax-add"></i></span>
                                                                                        </button>
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-12">
                                                                            <div
                                                                                class="mb-3 d-flex align-items-center justify-content-between">
                                                                                <label
                                                                                    class="form-label text-gray-9 mb-2">Children
                                                                                    <span
                                                                                        class="text-default fw-normal">( 2-12 Yrs )</span></label>
                                                                                <div class="custom-increment">
                                                                                    <div class="input-group">
                                                                                        <span
                                                                                            class="input-group-btn float-start">
                                                                                            <button type="button"
                                                                                                    class="quantity-left-minus btn btn-light btn-number"
                                                                                                    data-type="minus"
                                                                                                    data-field="">
                                                                                            <span><i
                                                                                                    class="isax isax-minus"></i></span>
                                                                                        </button>
                                                                                        </span>
                                                                                        <input type="text"
                                                                                               name="quantity"
                                                                                               class=" input-number"
                                                                                               value="01">
                                                                                        <span
                                                                                            class="input-group-btn float-end">
                                                                                            <button type="button"
                                                                                                    class="quantity-right-plus btn btn-light btn-number"
                                                                                                    data-type="plus"
                                                                                                    data-field="">
                                                                                                <span><i
                                                                                                        class="isax isax-add"></i></span>
                                                                                        </button>
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-12">
                                                                            <div
                                                                                class="mb-3 d-flex align-items-center justify-content-between">
                                                                                <label
                                                                                    class="form-label text-gray-9 mb-2">Infants
                                                                                    <span
                                                                                        class="text-default fw-normal">( 0-12 Yrs )</span></label>
                                                                                <div class="custom-increment">
                                                                                    <div class="input-group">
                                                                                        <span
                                                                                            class="input-group-btn float-start">
                                                                                            <button type="button"
                                                                                                    class="quantity-left-minus btn btn-light btn-number"
                                                                                                    data-type="minus"
                                                                                                    data-field="">
                                                                                            <span><i
                                                                                                    class="isax isax-minus"></i></span>
                                                                                        </button>
                                                                                        </span>
                                                                                        <input type="text"
                                                                                               name="quantity"
                                                                                               class=" input-number"
                                                                                               value="01">
                                                                                        <span
                                                                                            class="input-group-btn float-end">
                                                                                            <button type="button"
                                                                                                    class="quantity-right-plus btn btn-light btn-number"
                                                                                                    data-type="plus"
                                                                                                    data-field="">
                                                                                                <span><i
                                                                                                        class="isax isax-add"></i></span>
                                                                                        </button>
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="mb-3 border br-10 info-item pb-1">
                                                                    <h6 class="fs-16 fw-medium mb-2">Travellers</h6>
                                                                    <div class="d-flex align-items-center flex-wrap">
                                                                        <div class="form-check me-3 mb-3">
                                                                            <input class="form-check-input" type="radio"
                                                                                   name="room" id="room1" checked>
                                                                            <label class="form-check-label" for="room1">
                                                                                Single
                                                                            </label>
                                                                        </div>
                                                                        <div class="form-check me-3 mb-3">
                                                                            <input class="form-check-input" type="radio"
                                                                                   name="room" id="room2">
                                                                            <label class="form-check-label" for="room2">
                                                                                Double
                                                                            </label>
                                                                        </div>
                                                                        <div class="form-check me-3 mb-3">
                                                                            <input class="form-check-input" type="radio"
                                                                                   name="room" id="room3">
                                                                            <label class="form-check-label" for="room3">
                                                                                Delux
                                                                            </label>
                                                                        </div>
                                                                        <div class="form-check mb-3">
                                                                            <input class="form-check-input" type="radio"
                                                                                   name="room" id="room4">
                                                                            <label class="form-check-label" for="room4">
                                                                                Suite
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="mb-3 border br-10 info-item pb-1">
                                                                    <h6 class="fs-16 fw-medium mb-2">Property Type</h6>
                                                                    <div class="d-flex align-items-center flex-wrap">
                                                                        <div class="form-check me-3 mb-3">
                                                                            <input class="form-check-input" type="radio"
                                                                                   name="property" id="property1"
                                                                                   checked>
                                                                            <label class="form-check-label"
                                                                                   for="property1">
                                                                                Villa
                                                                            </label>
                                                                        </div>
                                                                        <div class="form-check me-3 mb-3">
                                                                            <input class="form-check-input" type="radio"
                                                                                   name="property" id="property2">
                                                                            <label class="form-check-label"
                                                                                   for="property2">
                                                                                Condo
                                                                            </label>
                                                                        </div>
                                                                        <div class="form-check me-3 mb-3">
                                                                            <input class="form-check-input" type="radio"
                                                                                   name="property" id="property3">
                                                                            <label class="form-check-label"
                                                                                   for="property3">
                                                                                Cabin
                                                                            </label>
                                                                        </div>
                                                                        <div class="form-check mb-3">
                                                                            <input class="form-check-input" type="radio"
                                                                                   name="property" id="property4">
                                                                            <label class="form-check-label"
                                                                                   for="property4">
                                                                                Apartments
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="d-flex justify-content-end">
                                                                    <a href="javascript:void(0);"
                                                                       class="btn btn-light btn-sm me-2">Cancel</a>
                                                                    <button type="submit"
                                                                            class="btn btn-primary btn-sm">
                                                                        Apply
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="form-item dropdown">
                                                            <div data-bs-toggle="dropdown" data-bs-auto-close="outside"
                                                                 aria-expanded="false" role="menu">
                                                                <label class="form-label fs-14 text-default mb-1">Price
                                                                    per
                                                                    Night</label>
                                                                <input type="text" class="form-control"
                                                                       value="$1000 - $15000">
                                                                <p class="fs-12 mb-0">20 Offers Available</p>
                                                            </div>
                                                            <div class="dropdown-menu dropdown-md p-0">
                                                                <ul>
                                                                    <li class="border-bottom">
                                                                        <a class="dropdown-item"
                                                                           href="javascript:void(0);">
                                                                            <h6 class="fs-16 fw-medium">$500 -
                                                                                $2000</h6>
                                                                            <p>Upto 65% offers</p>
                                                                        </a>
                                                                    </li>
                                                                    <li class="border-bottom">
                                                                        <a class="dropdown-item"
                                                                           href="javascript:void(0);">
                                                                            <h6 class="fs-16 fw-medium">Upto 65%
                                                                                offers</h6>
                                                                            <p>Upto 40% offers</p>
                                                                        </a>
                                                                    </li>
                                                                    <li class="border-bottom">
                                                                        <a class="dropdown-item"
                                                                           href="javascript:void(0);">
                                                                            <h6 class="fs-16 fw-medium">$5000 -
                                                                                $8000</h6>
                                                                            <p>Upto 35% offers</p>
                                                                        </a>
                                                                    </li>
                                                                    <li class="border-bottom">
                                                                        <a class="dropdown-item"
                                                                           href="javascript:void(0);">
                                                                            <h6 class="fs-16 fw-medium">$9000 -
                                                                                $11000</h6>
                                                                            <p>Upto 20% offers</p>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="dropdown-item"
                                                                           href="javascript:void(0);">
                                                                            <h6 class="fs-16 fw-medium">$11000 -
                                                                                $15000</h6>
                                                                            <p>Upto 10% offers</p>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button type="submit" class="btn btn-primary search-btn rounded">
                                                        Search
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="tab-pane fade" id="Cars">
                                            <form action="car-grid.html">
                                                <div
                                                    class="d-flex align-items-center justify-content-between flex-wrap mb-2">
                                                    <div class="d-flex align-items-center flex-wrap">
                                                        <div class="form-check d-flex align-items-center me-3 mb-2">
                                                            <input class="form-check-input mt-0" type="radio"
                                                                   name="drop"
                                                                   id="same-drop" value="same-drop" checked>
                                                            <label class="form-check-label fs-14 ms-2" for="same-drop">
                                                                Same drop-off
                                                            </label>
                                                        </div>
                                                        <div class="form-check d-flex align-items-center me-3 mb-2">
                                                            <input class="form-check-input mt-0" type="radio"
                                                                   name="drop"
                                                                   id="different-drop" value="different-drop">
                                                            <label class="form-check-label fs-14 ms-2"
                                                                   for="different-drop">
                                                                Different Drop off
                                                            </label>
                                                        </div>
                                                        <div class="form-check d-flex align-items-center me-3 mb-2">
                                                            <input class="form-check-input mt-0" type="radio"
                                                                   name="drop"
                                                                   id="airport" value="airport">
                                                            <label class="form-check-label fs-14 ms-2" for="airport">
                                                                Airport
                                                            </label>
                                                        </div>
                                                        <div class="form-check d-flex align-items-center me-3 mb-2">
                                                            <input class="form-check-input mt-0" type="radio"
                                                                   name="drop"
                                                                   id="hourly-drop" value="hourly-drop">
                                                            <label class="form-check-label fs-14 ms-2"
                                                                   for="hourly-drop">
                                                                Hourly Package
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <h6 class="fw-medium fs-16 mb-2">Book Car for rental</h6>
                                                </div>
                                                <div class="d-lg-flex">
                                                    <div class="d-flex  form-info">
                                                        <div class="form-item dropdown from-location">
                                                            <div data-bs-toggle="dropdown" data-bs-auto-close="outside"
                                                                 aria-expanded="false" role="menu">
                                                                <label
                                                                    class="form-label fs-14 text-default mb-1">From</label>
                                                                <input type="text" class="form-control" value="Newyork">
                                                                <p class="fs-12 mb-0">USA</p>
                                                            </div>
                                                            <div class="dropdown-menu dropdown-md p-0">
                                                                <div class="input-search p-3 border-bottom">
                                                                    <div class="input-group">
                                                                        <input type="text" class="form-control"
                                                                               placeholder="Search for Cars">
                                                                        <span
                                                                            class="input-group-text px-2 border-start-0"><i
                                                                                class="isax isax-search-normal"></i></span>
                                                                    </div>
                                                                </div>
                                                                <ul>
                                                                    <li class="border-bottom">
                                                                        <a class="dropdown-item"
                                                                           href="javascript:void(0);">
                                                                            <h6 class="fs-16 fw-medium">USA</h6>
                                                                            <p>2000 Cars</p>
                                                                        </a>
                                                                    </li>
                                                                    <li class="border-bottom">
                                                                        <a class="dropdown-item"
                                                                           href="javascript:void(0);">
                                                                            <h6 class="fs-16 fw-medium">Japan</h6>
                                                                            <p>3000 Cars</p>
                                                                        </a>
                                                                    </li>
                                                                    <li class="border-bottom">
                                                                        <a class="dropdown-item"
                                                                           href="javascript:void(0);">
                                                                            <h6 class="fs-16 fw-medium">Singapore</h6>
                                                                            <p>8000 Cars</p>
                                                                        </a>
                                                                    </li>
                                                                    <li class="border-bottom">
                                                                        <a class="dropdown-item"
                                                                           href="javascript:void(0);">
                                                                            <h6 class="fs-16 fw-medium">Russia</h6>
                                                                            <p>8000 Cars</p>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="dropdown-item"
                                                                           href="javascript:void(0);">
                                                                            <h6 class="fs-16 fw-medium">Germany</h6>
                                                                            <p>6000 Cars</p>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="form-item dropdown pickup-airport">
                                                            <div data-bs-toggle="dropdown" data-bs-auto-close="outside"
                                                                 aria-expanded="false" role="menu">
                                                                <label
                                                                    class="form-label fs-14 text-default mb-1">From</label>
                                                                <input type="text" class="form-control" value="Newyork">
                                                                <p class="fs-12 mb-0">Ken International Airport</p>
                                                            </div>
                                                            <div class="dropdown-menu dropdown-md p-0">
                                                                <div class="input-search p-3 border-bottom">
                                                                    <div class="input-group">
                                                                        <input type="text" class="form-control"
                                                                               placeholder="Search for Airport">
                                                                        <span
                                                                            class="input-group-text px-2 border-start-0"><i
                                                                                class="isax isax-search-normal"></i></span>
                                                                    </div>
                                                                </div>
                                                                <ul>
                                                                    <li class="border-bottom">
                                                                        <a class="dropdown-item"
                                                                           href="javascript:void(0);">
                                                                            <h6 class="fs-16 fw-medium">
                                                                                Hartsfield-Jackson
                                                                                Atlanta International</h6>
                                                                            <p>USA</p>
                                                                        </a>
                                                                    </li>
                                                                    <li class="border-bottom">
                                                                        <a class="dropdown-item"
                                                                           href="javascript:void(0);">
                                                                            <h6 class="fs-16 fw-medium">Dallas/Fort
                                                                                Worth
                                                                                International</h6>
                                                                            <p>USA</p>
                                                                        </a>
                                                                    </li>
                                                                    <li class="border-bottom">
                                                                        <a class="dropdown-item"
                                                                           href="javascript:void(0);">
                                                                            <h6 class="fs-16 fw-medium">London
                                                                                Heathrow</h6>
                                                                            <p>UK</p>
                                                                        </a>
                                                                    </li>
                                                                    <li class="border-bottom">
                                                                        <a class="dropdown-item"
                                                                           href="javascript:void(0);">
                                                                            <h6 class="fs-16 fw-medium">Seoul
                                                                                Incheon</h6>
                                                                            <p>South Korea</p>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="dropdown-item"
                                                                           href="javascript:void(0);">
                                                                            <h6 class="fs-16 fw-medium">Singapore Changi
                                                                                International</h6>
                                                                            <p>Singapore</p>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="form-item dropdown to-location ps-2 ps-sm-3">
                                                            <div data-bs-toggle="dropdown" data-bs-auto-close="outside"
                                                                 aria-expanded="false" role="menu">
                                                                <label
                                                                    class="form-label fs-14 text-default mb-1">To</label>
                                                                <input type="text" class="form-control" value="Newyork">
                                                                <p class="fs-12 mb-0">USA</p>
                                                                <span
                                                                    class="way-icon badge badge-primary rounded-pill translate-middle">
                                                                    <i class="fa-solid fa-arrow-right-arrow-left"></i>
                                                                </span>
                                                            </div>
                                                            <div class="dropdown-menu dropdown-md p-0">
                                                                <div class="input-search p-3 border-bottom">
                                                                    <div class="input-group">
                                                                        <input type="text" class="form-control"
                                                                               placeholder="Search for Cars">
                                                                        <span
                                                                            class="input-group-text px-2 border-start-0"><i
                                                                                class="isax isax-search-normal"></i></span>
                                                                    </div>
                                                                </div>
                                                                <ul>
                                                                    <li class="border-bottom">
                                                                        <a class="dropdown-item"
                                                                           href="javascript:void(0);">
                                                                            <h6 class="fs-16 fw-medium">USA</h6>
                                                                            <p>2000 Cars</p>
                                                                        </a>
                                                                    </li>
                                                                    <li class="border-bottom">
                                                                        <a class="dropdown-item"
                                                                           href="javascript:void(0);">
                                                                            <h6 class="fs-16 fw-medium">Japan</h6>
                                                                            <p>3000 Cars</p>
                                                                        </a>
                                                                    </li>
                                                                    <li class="border-bottom">
                                                                        <a class="dropdown-item"
                                                                           href="javascript:void(0);">
                                                                            <h6 class="fs-16 fw-medium">Singapore</h6>
                                                                            <p>8000 Cars</p>
                                                                        </a>
                                                                    </li>
                                                                    <li class="border-bottom">
                                                                        <a class="dropdown-item"
                                                                           href="javascript:void(0);">
                                                                            <h6 class="fs-16 fw-medium">Russia</h6>
                                                                            <p>8000 Cars</p>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="dropdown-item"
                                                                           href="javascript:void(0);">
                                                                            <h6 class="fs-16 fw-medium">Germany</h6>
                                                                            <p>6000 Cars</p>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="form-item">
                                                            <label
                                                                class="form-label fs-14 text-default mb-1">Departure</label>
                                                            <input type="text" class="form-control datetimepicker"
                                                                   value="21-10-2024">
                                                            <p class="fs-12 mb-0">Monday</p>
                                                        </div>
                                                        <div class="form-item return-drop">
                                                            <label
                                                                class="form-label fs-14 text-default mb-1">Return</label>
                                                            <input type="text" class="form-control datetimepicker"
                                                                   value="23-10-2024">
                                                            <p class="fs-12 mb-0">Wednesday</p>
                                                        </div>
                                                        <div class="form-item">
                                                            <label class="form-label fs-14 text-default mb-1">Pickup
                                                                Time</label>
                                                            <input type="text" class="form-control timepicker"
                                                                   value="11:45 PM">
                                                        </div>
                                                        <div class="form-item dropoff-time">
                                                            <label class="form-label fs-14 text-default mb-1">Dropoff
                                                                Time</label>
                                                            <input type="text" class="form-control timepicker"
                                                                   value="11:45 PM">
                                                        </div>
                                                        <div class="form-item hourly-time">
                                                            <label
                                                                class="form-label fs-14 text-default mb-1">Hours</label>
                                                            <h5>02 Hrs 10 Kms</h5>
                                                        </div>
                                                    </div>
                                                    <button type="submit" class="btn btn-primary search-btn rounded">
                                                        Search
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="tab-pane fade" id="Cruise">
                                            <form action="cruise-grid.html">
                                                <div
                                                    class="d-flex align-items-center justify-content-between flex-wrap mb-2">
                                                    <h6 class="fw-medium fs-16 mb-2">Search For Cruise</h6>
                                                </div>
                                                <div class="d-lg-flex">
                                                    <div class="d-flex  form-info">
                                                        <div class="form-item dropdown">
                                                            <div data-bs-toggle="dropdown" data-bs-auto-close="outside"
                                                                 aria-expanded="false" role="menu">
                                                                <label class="form-label fs-14 text-default mb-1">Destination</label>
                                                                <input type="text" class="form-control" value="Newyork">
                                                                <p class="fs-12 mb-0">USA</p>
                                                            </div>
                                                            <div class="dropdown-menu dropdown-md p-0">
                                                                <div class="input-search p-3 border-bottom">
                                                                    <div class="input-group">
                                                                        <input type="text" class="form-control"
                                                                               placeholder="Search Location">
                                                                        <span
                                                                            class="input-group-text px-2 border-start-0"><i
                                                                                class="isax isax-search-normal"></i></span>
                                                                    </div>
                                                                </div>
                                                                <ul>
                                                                    <li class="border-bottom">
                                                                        <a class="dropdown-item"
                                                                           href="javascript:void(0);">
                                                                            <h6 class="fs-16 fw-medium">Newyork</h6>
                                                                            <p>Ken International Airport</p>
                                                                        </a>
                                                                    </li>
                                                                    <li class="border-bottom">
                                                                        <a class="dropdown-item"
                                                                           href="javascript:void(0);">
                                                                            <h6 class="fs-16 fw-medium">Boston</h6>
                                                                            <p>Boston Logan International Airport</p>
                                                                        </a>
                                                                    </li>
                                                                    <li class="border-bottom">
                                                                        <a class="dropdown-item"
                                                                           href="javascript:void(0);">
                                                                            <h6 class="fs-16 fw-medium">Northern
                                                                                Virginia</h6>
                                                                            <p>Dulles International Airport</p>
                                                                        </a>
                                                                    </li>
                                                                    <li class="border-bottom">
                                                                        <a class="dropdown-item"
                                                                           href="javascript:void(0);">
                                                                            <h6 class="fs-16 fw-medium">Los Angeles</h6>
                                                                            <p>Los Angeles International Airport</p>
                                                                        </a>
                                                                    </li>
                                                                    <li class="border-bottom">
                                                                        <a class="dropdown-item"
                                                                           href="javascript:void(0);">
                                                                            <h6 class="fs-16 fw-medium">Orlando</h6>
                                                                            <p>Orlando International Airport</p>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="form-item">
                                                            <label class="form-label fs-14 text-default mb-1">Start
                                                                Date</label>
                                                            <input type="text" class="form-control datetimepicker"
                                                                   value="21-10-2025">
                                                            <p class="fs-12 mb-0">Monday</p>
                                                        </div>
                                                        <div class="form-item">
                                                            <label class="form-label fs-14 text-default mb-1">End
                                                                Date</label>
                                                            <input type="text" class="form-control datetimepicker"
                                                                   value="21-10-2025">
                                                            <p class="fs-12 mb-0">Monday</p>
                                                        </div>
                                                        <div class="form-item dropdown">
                                                            <div data-bs-toggle="dropdown" data-bs-auto-close="outside"
                                                                 aria-expanded="false" role="menu">
                                                                <label class="form-label fs-14 text-default mb-1">Travellers
                                                                    & Cabin </label>
                                                                <h5>4 <span class="fw-normal fs-14">Persons</span></h5>
                                                                <p class="fs-12 mb-0">4 Adult, 2 Rooms</p>
                                                            </div>
                                                            <div class="dropdown-menu dropdown-menu-end dropdown-xl">
                                                                <h5 class="mb-3">Select Travelers & Class</h5>
                                                                <div class="mb-3 border br-10 info-item pb-1">
                                                                    <h6 class="fs-16 fw-medium mb-2">Travellers</h6>
                                                                    <div class="row">
                                                                        <div class="col-md-4">
                                                                            <div class="mb-3">
                                                                                <label
                                                                                    class="form-label text-gray-9 mb-2">Adults
                                                                                    <span
                                                                                        class="text-default fw-normal">( 12+ Yrs )</span></label>
                                                                                <div class="custom-increment">
                                                                                    <div class="input-group">
                                                                                        <span
                                                                                            class="input-group-btn float-start">
                                                                                            <button type="button"
                                                                                                    class="quantity-left-minus btn btn-light btn-number"
                                                                                                    data-type="minus"
                                                                                                    data-field="">
                                                                                            <span><i
                                                                                                    class="isax isax-minus"></i></span>
                                                                                        </button>
                                                                                        </span>
                                                                                        <input type="text"
                                                                                               name="quantity"
                                                                                               class=" input-number"
                                                                                               value="01">
                                                                                        <span
                                                                                            class="input-group-btn float-end">
                                                                                            <button type="button"
                                                                                                    class="quantity-right-plus btn btn-light btn-number"
                                                                                                    data-type="plus"
                                                                                                    data-field="">
                                                                                                <span><i
                                                                                                        class="isax isax-add"></i></span>
                                                                                        </button>
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-4">
                                                                            <div class="mb-3">
                                                                                <label
                                                                                    class="form-label text-gray-9 mb-2">Childrens
                                                                                    <span
                                                                                        class="text-default fw-normal">( 2-12 Yrs )</span></label>
                                                                                <div class="custom-increment">
                                                                                    <div class="input-group">
                                                                                        <span
                                                                                            class="input-group-btn float-start">
                                                                                            <button type="button"
                                                                                                    class="quantity-left-minus btn btn-light btn-number"
                                                                                                    data-type="minus"
                                                                                                    data-field="">
                                                                                            <span><i
                                                                                                    class="isax isax-minus"></i></span>
                                                                                        </button>
                                                                                        </span>
                                                                                        <input type="text"
                                                                                               name="quantity"
                                                                                               class=" input-number"
                                                                                               value="01">
                                                                                        <span
                                                                                            class="input-group-btn float-end">
                                                                                            <button type="button"
                                                                                                    class="quantity-right-plus btn btn-light btn-number"
                                                                                                    data-type="plus"
                                                                                                    data-field="">
                                                                                                <span><i
                                                                                                        class="isax isax-add"></i></span>
                                                                                        </button>
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-4">
                                                                            <div class="mb-3">
                                                                                <label
                                                                                    class="form-label text-gray-9 mb-2">Infants
                                                                                    <span
                                                                                        class="text-default fw-normal">( 0-12 Yrs )</span></label>
                                                                                <div class="custom-increment">
                                                                                    <div class="input-group">
                                                                                        <span
                                                                                            class="input-group-btn float-start">
                                                                                            <button type="button"
                                                                                                    class="quantity-left-minus btn btn-light btn-number"
                                                                                                    data-type="minus"
                                                                                                    data-field="">
                                                                                            <span><i
                                                                                                    class="isax isax-minus"></i></span>
                                                                                        </button>
                                                                                        </span>
                                                                                        <input type="text"
                                                                                               name="quantity"
                                                                                               class=" input-number"
                                                                                               value="01">
                                                                                        <span
                                                                                            class="input-group-btn float-end">
                                                                                            <button type="button"
                                                                                                    class="quantity-right-plus btn btn-light btn-number"
                                                                                                    data-type="plus"
                                                                                                    data-field="">
                                                                                                <span><i
                                                                                                        class="isax isax-add"></i></span>
                                                                                        </button>
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="mb-3 border br-10 info-item pb-1">
                                                                    <h6 class="fs-16 fw-medium mb-2">Select Cabin</h6>
                                                                    <div class="d-flex align-items-center flex-wrap">
                                                                        <div class="form-check me-3 mb-3">
                                                                            <input class="form-check-input" type="radio"
                                                                                   name="cabin" id="cabin1" checked>
                                                                            <label class="form-check-label"
                                                                                   for="cabin1">
                                                                                Solo cabins
                                                                            </label>
                                                                        </div>
                                                                        <div class="form-check me-3 mb-3">
                                                                            <input class="form-check-input" type="radio"
                                                                                   name="cabin" id="cabin2">
                                                                            <label class="form-check-label"
                                                                                   for="cabin2">
                                                                                Balcony
                                                                            </label>
                                                                        </div>
                                                                        <div class="form-check me-3 mb-3">
                                                                            <input class="form-check-input" type="radio"
                                                                                   value="Business" name="cabin"
                                                                                   id="cabin3">
                                                                            <label class="form-check-label"
                                                                                   for="cabin3">
                                                                                Oceanview
                                                                            </label>
                                                                        </div>
                                                                        <div class="form-check mb-3">
                                                                            <input class="form-check-input" type="radio"
                                                                                   name="cabin" id="cabin4">
                                                                            <label class="form-check-label"
                                                                                   for="cabin4">
                                                                                Balcony rooms
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="d-flex justify-content-end">
                                                                    <a href="javascript:void(0);"
                                                                       class="btn btn-light btn-sm me-2">Cancel</a>
                                                                    <button type="submit"
                                                                            class="btn btn-primary btn-sm">
                                                                        Apply
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button type="submit" class="btn btn-primary search-btn rounded">
                                                        Search
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="tab-pane fade active show" id="Tour">
                                            <form action="#">
                                                <div
                                                    class="d-flex align-items-center justify-content-between flex-wrap mb-2">
                                                    <h6 class="fw-medium fs-16 mb-2">Search tour packages &
                                                        trips</h6>
                                                </div>
                                                <div class="d-lg-flex">
                                                    <div class="d-flex  form-info">
                                                        <div class="form-item dropdown">
                                                            <div data-bs-toggle="dropdown" data-bs-auto-close="outside"
                                                                 aria-expanded="false" role="menu">
                                                                <label class="form-label fs-14 text-default mb-1">Where
                                                                    would like to go?</label>
                                                                <input list="destinations" id="destination" type="text"
                                                                       class="form-control"
                                                                       value="Ha Long Bay">
                                                                <p class="fs-12 mb-0">VietNam</p>
                                                            </div>
                                                            <datalist id="destinations">
                                                                @foreach($destinations as $destination)
                                                                    <option
                                                                        value="{{$destination->name}}">{{$destination->name}}</option>
                                                                @endforeach
                                                            </datalist>
                                                        </div>
                                                        <div class="form-item">
                                                            <label
                                                                class="form-label fs-14 text-default mb-1">Dates</label>
                                                            <input type="text" class="form-control datetimepicker"
                                                                   value="21-10-2025">
                                                            <p class="fs-12 mb-0">Monday</p>
                                                        </div>
                                                        <div class="form-item">
                                                            <label class="form-label fs-14 text-default mb-1">Check
                                                                Out</label>
                                                            <input type="text" class="form-control datetimepicker"
                                                                   value="21-10-2025">
                                                            <p class="fs-12 mb-0">Wednesday</p>
                                                        </div>
                                                        <div class="form-item dropdown">
                                                            <div data-bs-toggle="dropdown" data-bs-auto-close="outside"
                                                                 aria-expanded="false" role="menu">
                                                                <label
                                                                    class="form-label fs-14 text-default mb-1">Travellers</label>
                                                                <h5>4 <span class="fw-normal fs-14">Persons</span></h5>
                                                                <p class="fs-12 mb-0">2 Adult</p>
                                                            </div>
                                                            <div class="dropdown-menu dropdown-menu-end dropdown-xl">
                                                                <h5 class="mb-3">Select Travelers</h5>
                                                                <div class="mb-3 border br-10 info-item pb-1">
                                                                    <div class="row">
                                                                        <div class="col-md-12">
                                                                            <div
                                                                                class="mb-3 d-flex align-items-center justify-content-between">
                                                                                <label
                                                                                    class="form-label text-gray-9 mb-2">Adult</label>
                                                                                <div class="custom-increment">
                                                                                    <div class="input-group">
                                                                                        <span
                                                                                            class="input-group-btn float-start">
                                                                                            <button type="button"
                                                                                                    class="quantity-left-minus btn btn-light btn-number"
                                                                                                    data-type="minus"
                                                                                                    data-field="">
                                                                                            <span><i
                                                                                                    class="isax isax-minus"></i></span>
                                                                                        </button>
                                                                                        </span>
                                                                                        <input type="text"
                                                                                               name="quantity"
                                                                                               class=" input-number"
                                                                                               value="01">
                                                                                        <span
                                                                                            class="input-group-btn float-end">
                                                                                            <button type="button"
                                                                                                    class="quantity-right-plus btn btn-light btn-number"
                                                                                                    data-type="plus"
                                                                                                    data-field="">
                                                                                                <span><i
                                                                                                        class="isax isax-add"></i></span>
                                                                                        </button>
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                class="mb-3 d-flex align-items-center justify-content-between">
                                                                                <label
                                                                                    class="form-label text-gray-9 mb-2">Childrens
                                                                                    <span
                                                                                        class="text-default fw-normal">( 12+ Yrs )</span></label>
                                                                                <div class="custom-increment">
                                                                                    <div class="input-group">
                                                                                        <span
                                                                                            class="input-group-btn float-start">
                                                                                            <button type="button"
                                                                                                    class="quantity-left-minus btn btn-light btn-number"
                                                                                                    data-type="minus"
                                                                                                    data-field="">
                                                                                            <span><i
                                                                                                    class="isax isax-minus"></i></span>
                                                                                        </button>
                                                                                        </span>
                                                                                        <input type="text"
                                                                                               name="quantity"
                                                                                               class=" input-number"
                                                                                               value="01">
                                                                                        <span
                                                                                            class="input-group-btn float-end">
                                                                                            <button type="button"
                                                                                                    class="quantity-right-plus btn btn-light btn-number"
                                                                                                    data-type="plus"
                                                                                                    data-field="">
                                                                                                <span><i
                                                                                                        class="isax isax-add"></i></span>
                                                                                        </button>
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                class="mb-3 d-flex align-items-center justify-content-between">
                                                                                <label
                                                                                    class="form-label text-gray-9 mb-2">Infants
                                                                                    <span
                                                                                        class="text-default fw-normal">( 12+ Yrs )</span></label>
                                                                                <div class="custom-increment">
                                                                                    <div class="input-group">
                                                                                        <span
                                                                                            class="input-group-btn float-start">
                                                                                            <button type="button"
                                                                                                    class="quantity-left-minus btn btn-light btn-number"
                                                                                                    data-type="minus"
                                                                                                    data-field="">
                                                                                            <span><i
                                                                                                    class="isax isax-minus"></i></span>
                                                                                        </button>
                                                                                        </span>
                                                                                        <input type="text"
                                                                                               name="quantity"
                                                                                               class=" input-number"
                                                                                               value="01">
                                                                                        <span
                                                                                            class="input-group-btn float-end">
                                                                                            <button type="button"
                                                                                                    class="quantity-right-plus btn btn-light btn-number"
                                                                                                    data-type="plus"
                                                                                                    data-field="">
                                                                                                <span><i
                                                                                                        class="isax isax-add"></i></span>
                                                                                        </button>
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="d-flex justify-content-end">
                                                                    <a href="javascript:void(0);"
                                                                       class="btn btn-light btn-sm me-2">Cancel</a>
                                                                    <button type="submit"
                                                                            class="btn btn-primary btn-sm">
                                                                        Apply
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button type="submit" class="btn btn-primary search-btn rounded">
                                                        Search
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /Hero Section -->

    <!-- Destination Section -->
    <section class="section destination-section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 wow fadeInUp" data-wow-delay="0.2s">
                    <div class="section-header-six">
                        <span class="badge badge-soft-primary rounded-pill mb-1">Tour Destinations</span>
                        <h2>Tour Destinations<span class="text-primary">.</span></h2>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="text-end">
                        <a href="#" class="btn btn-dark sec-head-btn">View All Destinations<i
                                class="isax isax-arrow-right-3 ms-2"></i></a>
                    </div>
                </div>
            </div>
            <div class="categories-slider-six owl-carousel">
                @foreach($destinations as $destination)
                    <div class="categories-card wow fadeInUp" data-wow-delay="{{$loop->index}}">
                        <a href="#">
                            <img style="height: 300px!important;object-fit: cover" src="{{$destination->thumbnail}}"
                                 alt="{{$destination->title}}"></a>
                        <div class="cat-content d-flex align-items-center justify-content-between">
                            <div>
                                <h5 class="text-white mb-1">{{$destination->name}}</h5>
                                {{--                                <span class="text-white">25 Tours</span>--}}
                            </div>
                            <a href="#" class="loc-view-bottom"><i class="isax isax-arrow-right-1"></i></a>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </section>
    <!-- /Destination Section -->

    <!-- Benefit Section -->
    <section class="section work-section-six">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xxl-3 col-lg-4">
                    <div class="section-header-six mb-0 wow fadeInUp" data-wow-delay="1.5">
                        <span class="badge badge-soft-primary rounded-pill mb-1">How it Works</span>
                        <h2>Here’s a breakdown of how our services work<span class="text-primary">.</span></h2>
                    </div>
                </div>
                <div class="col-xxl-9 col-lg-8">
                    <div class="row align-items-center">
                        <div class="col-md-4 col-sm-6">
                            <div class="bg-teal-trans mb-4 wow fadeInUp" data-wow-delay="1.5">
                                <div class="card border-0 mb-0">
                                    <div class="card-body">
                                        <div class="d-flex align-items-center justify-content-between mb-3">
                                            <span class="work-icon text-teal d-flex"><i
                                                    class="isax isax-buildings-25"></i></span>
                                            <span class="work-avatar">
												01
											</span>
                                        </div>
                                        <div>
                                            <h5 class="mb-2 text-truncate">Checking Availability</h5>
                                            <p class="text-truncate line-clamb-3">Ensure that the tour is available on
                                                the
                                                dates you plan to travel. Browse available tours in your
                                                destination.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="bg-prime-trans mb-4 wow fadeInUp" data-wow-delay="1.5">
                                <div class="card border-0 mb-0">
                                    <div class="card-body">
                                        <div class="d-flex align-items-center justify-content-between mb-3">
                                        <span class="work-icon text-primary d-flex"><i
                                                class="isax isax-calendar-edit5"></i></span>
                                            <span class="work-avatar">
												02
											</span>
                                        </div>
                                        <div>
                                            <h5 class="mb-2 text-truncate">Booking &amp; Confirmation</h5>
                                            <p class="text-truncate line-clamb-3">Upon arrival, check in at our
                                                reception.
                                                Our friendly staff will guide you through</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="bg-purple-trans mb-4 wow fadeInUp" data-wow-delay="1.5">
                                <div class="card border-0 mb-0">
                                    <div class="card-body">
                                        <div class="d-flex align-items-center justify-content-between mb-3">
                                        <span class="work-icon text-purple d-flex"><i
                                                class="isax isax-direct-send5"></i></span>
                                            <span class="work-avatar">
												03
											</span>
                                        </div>
                                        <div>
                                            <h5 class="mb-2">Enjoy Your Stay</h5>
                                            <p class="text-truncate line-clamb-3">Make sure to be at the meeting point
                                                on
                                                time, Ask questions and enjoy the experience!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /Benefit Section -->

    <!-- Tour List -->
    <section class="section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 wow fadeInUp" data-wow-delay="0.2s">
                    <div class="section-header-six">
                        <span class="badge badge-soft-primary rounded-pill mb-1">Top Rated Tours</span>
                        <h2>Popular Tours In Vietnam<span class="text-primary">.</span></h2>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="text-end">
                        <a href="#" class="btn btn-dark sec-head-btn">View All Tours<i
                                class="isax isax-arrow-right-3 ms-2"></i></a>
                    </div>
                </div>
            </div>
            <div class="cars-slider owl-dot-bottom owl-carousel wow fadeInUp" data-wow-delay="1.5">
                @foreach($tours as $tour)
                    <div class="place-item mb-4 flex-fill">
                        <div class="place-img">
                            <div class="img-slider image-slide owl-carousel nav-center">
                                <div class="slide-images">
                                    <a href="#">
                                        <img style="height: 200px;object-fit: cover" src="{{$tour->thumbnail}}"
                                             class="img-fluid" alt="img">
                                    </a>
                                </div>
                                @foreach($tour->images as $image)
                                    <div class="slide-images">
                                        <a href="#">
                                            <img style="height: 200px;object-fit: cover" src="{{$image}}"
                                                 class="img-fluid" alt="img">
                                        </a>
                                    </div>
                                @endforeach
                            </div>
                            <div class="fav-item">
                                <a href="javascript:void(0);" class="fav-icon selected">
                                    <i class="isax isax-heart5"></i>
                                </a>
                                <span class="badge bg-info d-inline-flex align-items-center"><i
                                        class="isax isax-ranking me-1"></i>{{@$tour->categories[0]}}</span>

                            </div>
                        </div>
                        <div class="place-content">
                            <div class="d-flex align-items-center justify-content-between mb-1">
                                <div class="d-flex flex-wrap align-items-center">
                                    <span class="me-1"><i class="ti ti-receipt text-primary"></i></span>
                                    <p class="fs-14 text-gray-9">
                                        @foreach($tour->categories as $category)
                                            {{$category}},
                                        @endforeach
                                        ...
                                    </p>
                                </div>
                                <span class="d-inline-block border vertical-splits">
								<span
                                    class="bg-light text-light d-flex align-items-center justify-content-center"></span>
                            </span>
                                <div class="d-flex align-items-center flex-wrap">
                                    <span
                                        class="badge badge-warning badge-xs text-gray-9 fs-13 fw-medium me-1">5.0</span>
                                </div>
                            </div>
                            <h5 class="mb-1 text-truncate"><a href="#">{{$tour->title}}</a></h5>
                            <p class="d-flex align-items-center mb-3"><i class="isax isax-location5 me-2"></i>
                                {{$tour->destinations}}
                            </p>
                            <div class="mb-3">
                                <h6 class="d-flex align-items-center text-gray-6 fs-14 fw-normal">Starts From <span
                                        class="ms-1 fs-18 fw-semibold text-success">{{number_format($tour->price_vnd)}}VND</span><span
                                        class="ms-1 fs-18 fw-semibold text-gray-3">-10%</span>
                                </h6>
                            </div>
                            <div class="d-flex align-items-center justify-content-between border-top pt-3">
                                <div class="d-flex flex-wrap align-items-center me-2">
                                    <span class="me-1"><i class="isax isax-calendar-tick text-gray-6"></i></span>
                                    <p class="fs-14 text-gray-9">{{$tour->duration}}</p>
                                </div>
                                <span class="d-inline-block border vertical-splits">
								<span
                                    class="bg-light text-light d-flex align-items-center justify-content-center"></span>
                            </span>
                                <div class="ms-2 d-flex align-items-center">
                                    <p class="fs-14 text-gray-9 mb-0 text-truncate d-flex align-items-center">
                                        USD: {{number_format($tour->price_usd)}}$
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- /Tours Grid -->
                @endforeach
            </div>
        </div>
    </section>
    <!-- /Tour List -->

    <!-- Support Section -->
    <section class="support-section section-skew support-sec-two bg-primary">
        <div class="horizontal-slide d-flex" data-direction="left" data-speed="slow">
            <div class="slide-list d-flex">
                @foreach($destinations as $destination)
                    <div class="support-item">
                        <h5>{{$destination->name}}</h5>
                    </div>
                @endforeach
            </div>
        </div>
    </section>
    <!-- /Support Section -->

    <!-- About Section -->
    <section class="section adavantages-sec bg-light-200">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5">
                    <div>
                        <div class="section-right-img-two wow fadeInUp" data-wow-delay="1.5">
                            <img src="/client/assets/img/section-img-02.png" alt="Img">
                            <div class="card review-rate-top border-0 mb-0">
                                <div class="card-body d-flex align-items-center">
                                    <div class="avatar-list-stacked avatar-group-md me-2">
                                        <span class="avatar avatar-rounded">
											<img class="border border-white" src="/client/assets/img/users/user-01.jpg"
                                                 alt="img">
										</span>
                                        <span class="avatar avatar-rounded">
											<img class="border border-white" src="/client/assets/img/users/user-04.jpg"
                                                 alt="img">
										</span>
                                        <span class="avatar avatar-rounded">
											<img class="border border-white" src="/client/assets/img/users/user-06.jpg"
                                                 alt="img">
										</span>
                                        <span class="avatar avatar-rounded">
											<img class="border border-white" src="/client/assets/img/users/user-07.jpg"
                                                 alt="img">
										</span>
                                    </div>
                                    <div>
                                        <div class="d-flex align-items-center fs-12">
                                            <i class="ti ti-star-filled text-warning"></i>
                                            <i class="ti ti-star-filled text-warning"></i>
                                            <i class="ti ti-star-filled text-warning"></i>
                                            <i class="ti ti-star-filled text-warning"></i>
                                            <i class="ti ti-star-filled text-warning me-1"></i>
                                            <p class="fs-14 text-gray-9">5.0</p>
                                        </div>
                                        <p class="fs-14">2K+ Reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div>
                        <div class="section-header-six mb-4 wow fadeInUp" data-wow-delay="1.5">
                            <span class="badge badge-soft-primary rounded-pill mb-1">Get to know about Us</span>
                            <h2 class="mb-2">Provide high-quality Accommodations & service make journeys seamless &
                                enjoyable.</h2>
                            <p>We offer a diverse range of Tours, from compact cars ideal for city driving to spacious
                                SUVs
                                for family trips and luxurious models for special events.</p>
                        </div>
                        <div class="row g-2 mb-4">
                            <div class="col-md-6">
                                <span class="d-block mb-2">
									<i class="isax isax-tick-circle5 text-teal fs-24"></i>
								</span>
                                <h6 class="mb-1">Convenient Locations</h6>
                                <p>Multiple pick-up and drop-off locations to suit your travel plans.</p>
                            </div>
                            <div class="col-md-6">
                                <span class="d-block mb-2">
									<i class="isax isax-tick-circle5 text-orange fs-24"></i>
								</span>
                                <h6 class="mb-1">Customer-Centric Service</h6>
                                <p>Our team is always ready to assist you with any inquiries or needs.</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center mb-4">
                            <a href="#" class="btn btn-dark me-3">Get Started<i
                                    class="isax isax-arrow-right-3 ms-2"></i></a>
                            {{-- <a data-fancybox="" href="https://youtu.be/NSAOrGb9orM" class="btn btn-white"><i --}}
                            {{-- class="isax isax-play-circle5 me-2"></i>Watch Video</a> --}}
                        </div>
                        <div class="row g-4">
                            <div class="col-md-4 d-flex">
                                <div class="counter-item card shadow-none flex-fill mb-0">
                                    <div class="card-body">
                                        <h3 class="display-6 text-primary mb-2"><span
                                                class="counter text-dark">30</span>+
                                        </h3>
                                        <p>Destinations In VietNam</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 d-flex">
                                <div class="counter-item card shadow-none flex-fill mb-0">
                                    <div class="card-body">
                                        <h3 class="display-6 text-primary mb-2"><span
                                                class="counter text-dark">7098</span>+
                                        </h3>
                                        <p>Booking Completed</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 d-flex">
                                <div class="counter-item card shadow-none flex-fill mb-0">
                                    <div class="card-body">
                                        <h3 class="display-6 text-primary mb-2"><span
                                                class="counter text-dark">67</span>+
                                        </h3>
                                        <p>Client Globally</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /About Section -->

    <!-- Categories Section -->
    <section class="section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 wow fadeInUp" data-wow-delay="0.2s">
                    <div class="section-header-six">
                        <span class="badge badge-soft-primary rounded-pill mb-1">Most Popular Categories Tour</span>
                        <h2>Tour Categories<span class="text-primary">.</span></h2>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="text-end">
                        <a href="#" class="btn btn-dark sec-head-btn">View All Categories<i
                                class="isax isax-arrow-right-3 ms-2"></i></a>
                    </div>
                </div>
            </div>
            <div class="providers-slider owl-carousel owl-dot-bottom">
                @foreach($categories as $category)
                    <div class="card">
                        <div class="card-body text-center">
                            <a href="#" class="d-block mb-3">
                                <img
                                    style="width: 200px!important;height: 200px!important;object-fit: cover"
                                    src="{{$category->thumbnail}}"
                                    class="w-auto m-auto rounded-circle"
                                    alt="Img"></a>
                            <h5 class="mb-2"><a href="">{{$category->name}}</a></h5>
                            <div class="d-flex flex-column align-items-center justify-content-center">
                                <span>{{$category->description}}</span>
                            </div>
                            <div class="d-flex align-items-center justify-content-between mt-3 pt-3 border-top">
                                <div class="d-flex align-items-center">
                                    <span class="badge badge-warning badge-xs text-gray-9 fs-13 fw-medium me-2">5</span>
                                </div>
                                <span class="badge bg-teal">150 Tours</span>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </section>
    <!-- /Categories Section -->

    <!-- Testimonials Section -->
    <section class="section testi-sec-six pb-0">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div>
                        <img src="/client/assets/img/section-img-03.png" alt="Img">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="testi-info-six">
                        <div class="section-header-six mb-4">
                            <span class="badge badge-soft-primary rounded-pill mb-1">Testimonials</span>
                            <h2>What Our Clients Says</h2>
                        </div>
                        <div>
                            <div class="d-flex align-items-center fs-12 mb-4">
                                <i class="ti ti-star-filled text-primary"></i>
                                <i class="ti ti-star-filled text-primary"></i>
                                <i class="ti ti-star-filled text-primary"></i>
                                <i class="ti ti-star-filled text-primary"></i>
                                <i class="ti ti-star-filled  text-primary me-1"></i>
                                <p class="fs-14 text-gray-9">5.0</p>
                            </div>
                            <p class="mb-4 testi-para">I had an I recently booked a flight through, and I couldn’t be
                                happier with the experience.After finally selecting a flight, I was hit with unexpected
                                fees
                                during checkout that weren’t clearly stated upfront.
                            </p>
                            <div class="bg-white rounded-pill p-3 d-inline-flex align-items-center">
                                <a href="javascript:void(0);" class="avatar avtar-lg me-2">
                                    <img src="/client/assets/img/users/user-28.jpg" class="rounded-circle" alt="Img">
                                </a>
                                <div>
                                    <h6><a href="javascript:void(0);">Rachel Mariscal</a></h6>
                                    <span class="d-block">United States</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="client-logos-sec">
            <div class="container">
                <div>
                    <h6 class="text-white mb-3">40+ Clients Around the Globe</h6>
                </div>
                <div class="owl-carousel client-slider">
                    <div class="client-img">
                        <img src="/client/assets/img/clients/client-01.svg" class="img-white" alt="img">
                    </div>
                    <div class="client-img">
                        <img src="/client/assets/img/clients/client-02.svg" class="img-white" alt="img">
                    </div>
                    <div class="client-img">
                        <img src="/client/assets/img/clients/client-03.svg" class="img-white" alt="img">
                    </div>
                    <div class="client-img">
                        <img src="/client/assets/img/clients/client-04.svg" class="img-white" alt="img">
                    </div>
                    <div class="client-img">
                        <img src="/client/assets/img/clients/client-05.svg" class="img-white" alt="img">
                    </div>
                    <div class="client-img">
                        <img src="/client/assets/img/clients/client-06.svg" class="img-white" alt="img">
                    </div>
                    <div class="client-img">
                        <img src="/client/assets/img/clients/client-07.svg" class="img-white" alt="img">
                    </div>
                    <div class="client-img">
                        <img src="/client/assets/img/clients/client-04.svg" class="img-white" alt="img">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /Testimonials Section -->

    <!-- Experts Section -->
    <section class="section bg-light-200 faq-sec">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="tourism-text-info">
                        <div class="text-header">
                            <h2>Trusted Solution Of Your <span class="text-primary"> <img
                                        src="/client/assets/img/tours/tour-img.jpg" alt="Img"> Tourism</span> Services
                            </h2>
                        </div>
                        <div class="card border-secondary shadow-none bg-secondary-transparent">
                            <div class="card-body d-flex align-items-center">
                                <span class="avatar bg-secondary rounded-circle flex-shrink-0">
									<i class="isax isax-lock-1 text-gray-9 fs-20"></i>
								</span>
                                <div class="ms-3">
                                    <h5 class="mb-1">VIP Packages</h5>
                                    <p>Include premium seating, meet-and-greet experiences, backstage tours.</p>
                                </div>
                            </div>
                        </div>
                        <div class="card border-purple shadow-none bg-purple-transparent">
                            <div class="card-body d-flex align-items-center">
                                <span class="avatar bg-purple rounded-circle flex-shrink-0">
									<i class="isax isax-receipt-add fs-20"></i>
								</span>
                                <div class="ms-3">
                                    <h5 class="mb-1">Travel Packages</h5>
                                    <p>Bundles that include concert tickets, accommodations.</p>
                                </div>
                            </div>
                        </div>
                        <div class="card border-teal shadow-none bg-teal-transparent">
                            <div class="card-body d-flex align-items-center">
                                <span class="avatar bg-teal rounded-circle flex-shrink-0">
									<i class="isax isax-location-tick fs-20"></i>
								</span>
                                <div class="ms-3">
                                    <h5 class="mb-1">Best Price Guarantee</h5>
                                    <p>Such as private rehearsals, soundcheck access.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="faq-cards-six">
                        <div class="section-header-six mb-4">
                            <span class="badge badge-soft-primary rounded-pill mb-1">Most Popular Providers</span>
                            <h2>Try Relaxing Accomodations.</h2>
                        </div>
                        <div class="accordion accordion-flush" id="accordionFaq">
                            <div class="accordion-item show wow fadeInUp" data-wow-delay="0.2s">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#faq-collapseOne" aria-expanded="false"
                                            aria-controls="faq-collapseOne">
                                        What types of tours do you offer?
                                    </button>
                                </h2>
                                <div id="faq-collapseOne" class="accordion-collapse collapse show"
                                     data-bs-parent="#accordionFaq">
                                    <div class="accordion-body">
                                        <p class="mb-0">We offer a wide range of tours, including cultural, adventure,
                                            luxury, and customized itineraries.</p>
                                        <p>Popular destinations include Europe, Africa (e.g., Morocco), </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#faq-collapsetwo" aria-expanded="false"
                                            aria-controls="faq-collapsetwo">
                                        Are the tours customizable?
                                    </button>
                                </h2>
                                <div id="faq-collapsetwo" class="accordion-collapse collapse"
                                     data-bs-parent="#accordionFaq">
                                    <div class="accordion-body">
                                        <p>We offer a wide range of tours, including cultural, adventure, luxury, and
                                            customized itineraries.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#faq-collapsthree" aria-expanded="false"
                                            aria-controls="faq-collapsthree">
                                        What safety measures do you follow?
                                    </button>
                                </h2>
                                <div id="faq-collapsthree" class="accordion-collapse collapse"
                                     data-bs-parent="#accordionFaq">
                                    <div class="accordion-body">
                                        <p>We offer a wide range of tours, including cultural, adventure, luxury, and
                                            customized itineraries.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#faq-collapsefour" aria-expanded="false"
                                            aria-controls="faq-collapsefour">
                                        How far in advance should I book?
                                    </button>
                                </h2>
                                <div id="faq-collapsefour" class="accordion-collapse collapse"
                                     data-bs-parent="#accordionFaq">
                                    <div class="accordion-body">
                                        <p>We offer a wide range of tours, including cultural, adventure, luxury, and
                                            customized itineraries.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item wow fadeInUp" data-wow-delay="1.0s">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#faq-collapsefive" aria-expanded="false"
                                            aria-controls="faq-collapsefive">
                                        What is your cancellation policy?
                                    </button>
                                </h2>
                                <div id="faq-collapsefive" class="accordion-collapse collapse"
                                     data-bs-parent="#accordionFaq">
                                    <div class="accordion-body">
                                        <p>We offer a wide range of tours, including cultural, adventure, luxury, and
                                            customized itineraries.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /Experts Section -->

    <!-- Blog Section -->
    <section class="section blog-section blog-sec-six">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 wow fadeInUp" data-wow-delay="0.2s">
                    <div class="section-header-six">
                        <span class="badge badge-soft-primary rounded-pill mb-1">Recent Blog</span>
                        <h2>Checkout our Recent Articles<span class="text-primary">.</span></h2>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="text-end">
                        <a href="blog-grid.html" class="btn btn-dark sec-head-btn">View All Blogs<i
                                class="isax isax-arrow-right-3 ms-2"></i></a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-6">
                    <div class="card shadow-none blog-grid-six">
                        <div class="card-img">
                            <a href="blog-details.html">
                                <img src="/client/assets/img/blog/blog-30.jpg" class="rounded" alt="Img">
                            </a>
                            <span class="badge bg-primary">Booking</span>
                        </div>
                        <div class="card-body">
                            <h5 class="mb-2"><a href="blog-details.html">It empowers designers to swiftly created</a>
                            </h5>
                            <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor
                                incididunt u</p>
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);" class="avatar avatar-md flex-shrink-0 me-2">
                                        <img src="/client/assets/img/users/user-01.jpg" class="rounded-circle"
                                             alt="img">
                                    </a>
                                    <h6 class="fs-16 fw-normal"><a href="javascript:void(0);">Andrew</a></h6>
                                </div>
                                <span class="d-inline-flex align-items-center"><i
                                        class="isax isax-calendar me-2 fs-20"></i>27 Sep 2025</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="card shadow-none blog-grid-six">
                        <div class="row align-items-center">
                            <div class="col-md-6 d-flex">
                                <div class="card-img flex-fill">
                                    <a href="blog-details.html">
                                        <img src="/client/assets/img/blog/blog-31.jpg" class="rounded w-100 h-100"
                                             alt="Img">
                                    </a>
                                    <span class="badge bg-primary">Booking</span>
                                </div>
                            </div>
                            <div class="col-md-6 d-flex">
                                <div class="card-body ps-md-0 flex-fill">
                                    <h5 class="mb-2"><a href="blog-details.html">It empowers designers to swiftly
                                            created</a></h5>
                                    <p class="mb-4 text-truncate line-clamb-3">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor incididunt u</p>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <a href="javascript:void(0);" class="avatar avatar-md flex-shrink-0 me-2">
                                                <img src="/client/assets/img/users/user-01.jpg" class="rounded-circle"
                                                     alt="img">
                                            </a>
                                            <h6 class="fs-16 fw-normal"><a href="javascript:void(0);">Andrew</a></h6>
                                        </div>
                                        <span class="d-inline-flex align-items-center"><i
                                                class="isax isax-calendar me-2 fs-20"></i>27 Sep 2025</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card shadow-none blog-grid-six">
                        <div class="row align-items-center">
                            <div class="col-md-6 d-flex">
                                <div class="card-img flex-fill">
                                    <a href="blog-details.html">
                                        <img src="/client/assets/img/blog/blog-32.jpg" class="rounded w-100 h-100"
                                             alt="Img">
                                    </a>
                                    <span class="badge bg-primary">Booking</span>
                                </div>
                            </div>
                            <div class="col-md-6 d-flex">
                                <div class="card-body ps-md-0 flex-fill">
                                    <h5 class="mb-2"><a href="blog-details.html">It empowers designers to swiftly
                                            created</a></h5>
                                    <p class="mb-4 text-truncate line-clamb-3">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor incididunt u</p>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <a href="javascript:void(0);" class="avatar avatar-md flex-shrink-0 me-2">
                                                <img src="/client/assets/img/users/user-01.jpg" class="rounded-circle"
                                                     alt="img">
                                            </a>
                                            <h6 class="fs-16 fw-normal"><a href="javascript:void(0);">Andrew</a></h6>
                                        </div>
                                        <span class="d-inline-flex align-items-center"><i
                                                class="isax isax-calendar me-2 fs-20"></i>27 Sep 2025</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /Blog Section -->
@endsection
