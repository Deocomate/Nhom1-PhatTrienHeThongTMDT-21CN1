<?php
/**
 * @var \stdClass[] $categories
 */

// Function to build recursive tree structure
function buildCategoryTree($categories, $parentId = null)
{
    $tree = [];
    foreach ($categories as $category) {
        if ($category->parent_id == $parentId) {
            $category->children = buildCategoryTree($categories, $category->id);
            $tree[] = $category;
        }
    }
    return $tree;
}

$categoryTree = buildCategoryTree($categories);
?>

@extends('admin.layouts.main')
@section('title','Danh sách Danh mục')
@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Danh sách Danh mục</h3>
        </div>
        <div class="card-body p-0">
            @if(session('success'))
                <div class="alert alert-success">
                    {{ session('success') }}
                </div>
            @endif
            <a href="{{ route('admin.category.create') }}" class="btn btn-primary mb-3">Tạo mới</a>

            <table class="table table-hover">
                <tbody>
                @php
                    function renderCategoryTree($categories, $level = 0) {
                        foreach ($categories as $category) {
                @endphp
                <tr data-widget="expandable-table" aria-expanded="false">
                    <td>
                        @if(!empty($category->children))
                            <i class="expandable-table-caret fas fa-caret-right fa-fw"></i>
                        @endif
                        {{ $category->name }}

                        <div class="float-right">
                            <a class="btn btn-warning btn-sm mr-2"
                               href="{{ route('admin.category.edit', ['category' => $category->id]) }}">
                                Sửa
                            </a>
                            <form action="{{ route('admin.category.destroy', ['category' => $category->id]) }}"
                                  method="POST" style="display: inline-block;">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-danger btn-sm"
                                        onclick="return confirm('Bạn có chắc muốn xóa?')">
                                    Xoá
                                </button>
                            </form>
                        </div>
                    </td>
                </tr>

                @if(!empty($category->children))
                    <tr class="expandable-body d-none">
                        <td>
                            <div class="p-0" style="display: none;">
                                <table class="table table-hover">
                                    <tbody>
                                    @php
                                        renderCategoryTree($category->children, $level + 1);
                                    @endphp
                                    </tbody>
                                </table>
                            </div>
                        </td>
                    </tr>
                @endif
                @php
                    }
                }

                renderCategoryTree($categoryTree);
                @endphp
                </tbody>
            </table>
        </div>
    </div>
@endsection

@push('scripts')
    <script>
        $(document).ready(function () {
            // Expandable table functionality
            $('[data-widget="expandable-table"]').on('click', function () {
                var $this = $(this);
                var $expandableBody = $this.next('.expandable-body');

                // Toggle caret icon
                var $caret = $this.find('.expandable-table-caret');
                $caret.toggleClass('fa-caret-right fa-caret-down');

                // Toggle expandable body
                $expandableBody.toggleClass('d-none');
                $expandableBody.find('> td > div').toggle();
            });
        });
    </script>
@endpush
