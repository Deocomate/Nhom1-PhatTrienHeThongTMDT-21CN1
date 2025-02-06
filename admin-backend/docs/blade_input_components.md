# Laravel Form Input Components

Đây là bộ các input component tùy chỉnh được xây dựng cho dự án Laravel của bạn, giúp tạo form một cách nhanh chóng và dễ dàng. Các component này được thiết kế để tái sử dụng, dễ bảo trì và mở rộng.

## Cài đặt

Để sử dụng các component này, đảm bảo rằng bạn đã:

1.  Cài đặt Laravel.
2.  Có thư mục `components` trong thư mục `app/View`. (Ví dụ: `app/View/Components/Inputs`)
3.  Đặt các component blade của bạn vào thư mục trên.

## Danh sách Component

Dưới đây là danh sách các component và hướng dẫn sử dụng:

### 1. `x-inputs.text`

*   **Mô tả:** Component cho input kiểu text thông thường.
*   **Sử dụng:**
    ```blade
    <x-inputs.text label="Tên người dùng" name="username" value="Giá trị mặc định"></x-inputs.text>
    ```
*   **Thuộc tính:**
    *   `label`: (bắt buộc) Nhãn cho input.
    *   `name`: (bắt buộc) Tên của input (để submit form).
    *   `value`: (tùy chọn) Giá trị mặc định của input. Nếu không có, sẽ lấy giá trị từ `old()` khi có lỗi validate.

### 2. `x-inputs.email`

*   **Mô tả:** Component cho input kiểu email.
*   **Sử dụng:**
    ```blade
    <x-inputs.email label="Email" name="email"></x-inputs.email>
    ```
*   **Thuộc tính:**
    *   `label`: (bắt buộc) Nhãn cho input.
    *   `name`: (bắt buộc) Tên của input (để submit form).
    *    `value`: (tùy chọn) Giá trị mặc định của input. Nếu không có, sẽ lấy giá trị từ `old()` khi có lỗi validate.

### 3. `x-inputs.number`

*   **Mô tả:** Component cho input kiểu number.
*   **Sử dụng:**
    ```blade
    <x-inputs.number label="Số lượng" name="quantity"></x-inputs.number>
    ```
*    **Thuộc tính:**
    *   `label`: (bắt buộc) Nhãn cho input.
    *   `name`: (bắt buộc) Tên của input (để submit form).
    *    `value`: (tùy chọn) Giá trị mặc định của input. Nếu không có, sẽ lấy giá trị từ `old()` khi có lỗi validate.

### 4. `x-inputs.text-area`

*   **Mô tả:** Component cho textarea.
*   **Sử dụng:**
    ```blade
    <x-inputs.text-area label="Mô tả" name="description"></x-inputs.text-area>
    ```
*    **Thuộc tính:**
    *   `label`: (bắt buộc) Nhãn cho input.
    *   `name`: (bắt buộc) Tên của input (để submit form).
    *    `value`: (tùy chọn) Giá trị mặc định của input. Nếu không có, sẽ lấy giá trị từ `old()` khi có lỗi validate.

### 5. `x-inputs.select`

*   **Mô tả:** Component cho select box (dropdown) có hỗ trợ Select2.
*   **Sử dụng:**
    ```blade
    <x-inputs.select label="Trạng thái" name="status">
        <option value="1">Đang kích hoạt</option>
        <option value="0">Chưa kích hoạt</option>
    </x-inputs.select>
    ```
*   **Thuộc tính:**
    *   `label`: (bắt buộc) Nhãn cho select box.
    *   `name`: (bắt buộc) Tên của select box (để submit form).
    *   Nội dung: Các option HTML (bắt buộc).

### 6. `x-inputs.select-multiple`

*   **Mô tả:** Component cho select box multiple (dropdown) có hỗ trợ Select2.
*   **Sử dụng:**
    ```blade
        <x-inputs.select-multiple label="Trạng thái" name="status">
            <option value="1">Đang kích hoạt</option>
            <option value="0">Chưa kích hoạt</option>
        </x-inputs.select-multiple>
    ```
*   **Thuộc tính:**
    *   `label`: (bắt buộc) Nhãn cho select box.
    *   `name`: (bắt buộc) Tên của select box (để submit form).
    *   Nội dung: Các option HTML (bắt buộc).

### 7. `x-inputs.date`

*   **Mô tả:** Component cho input kiểu date.
*   **Sử dụng:**
    ```blade
    <x-inputs.date label="Ngày sinh" name="birthday"></x-inputs.date>
    ```
*   **Thuộc tính:**
    *   `label`: (bắt buộc) Nhãn cho input.
    *   `name`: (bắt buộc) Tên của input (để submit form).
    *   `value`: (tùy chọn) Giá trị mặc định của input. Nếu không có, sẽ lấy giá trị từ `old()` khi có lỗi validate.

### 8. `x-inputs.time`

*   **Mô tả:** Component cho input kiểu time.
*   **Sử dụng:**
    ```blade
    <x-inputs.time label="Thời gian" name="time"></x-inputs.time>
    ```
*   **Thuộc tính:**
    *   `label`: (bắt buộc) Nhãn cho input.
    *   `name`: (bắt buộc) Tên của input (để submit form).
    *   `value`: (tùy chọn) Giá trị mặc định của input. Nếu không có, sẽ lấy giá trị từ `old()` khi có lỗi validate.

### 9. `x-inputs.editor`

*   **Mô tả:** Component cho trình soạn thảo văn bản (CKEditor 5).
*   **Sử dụng:**
    ```blade
    <x-inputs.editor label="Nội dung" name="content"></x-inputs.editor>
    ```
*   **Thuộc tính:**
    *   `label`: (bắt buộc) Nhãn cho editor.
    *   `name`: (bắt buộc) Tên của textarea (để submit form).
    *    `value`: (tùy chọn) Giá trị mặc định của input. Nếu không có, sẽ lấy giá trị từ `old()` khi có lỗi validate.
*   **Lưu ý:**
    *   Yêu cầu cài đặt CKEditor 5.
    *   Đảm bảo đã load file CKEditor script.

### 10. `x-inputs.image-link`

*   **Mô tả:** Component cho phép chọn ảnh từ CKFinder và hiển thị preview.
*   **Sử dụng:**
    ```blade
     <x-inputs.image-link label="Ảnh đại diện" name="avatar" value="đường dẫn ảnh mặc định"></x-inputs.image-link>
    ```
*   **Thuộc tính:**
    *   `label`: (bắt buộc) Nhãn cho input.
    *   `name`: (bắt buộc) Tên của input (để submit form).
     *    `value`: (tùy chọn) Giá trị mặc định của input. Nếu không có, sẽ lấy giá trị từ `old()` khi có lỗi validate.
*    **Lưu ý:**
        *   Yêu cầu cài đặt CKFinder.
        *   Đảm bảo đã cấu hình CKFinder trên project của bạn.

### 11. `x-inputs.text-array`

*   **Mô tả:** Component cho phép nhập một mảng các input text.
*   **Sử dụng:**
    ```blade
     <x-inputs.text-array label="Tags" name="tags" :value="['tag1','tag2']"></x-inputs.text-array>
    ```
*   **Thuộc tính:**
    *   `label`: (bắt buộc) Nhãn cho input.
    *   `name`: (bắt buộc) Tên của input (để submit form).
    *    `value`: (tùy chọn) Giá trị mặc định của input (dạng array).

### 12. `x-inputs.image-link-array`

*  **Mô tả:** Component cho phép chọn nhiều ảnh từ CKFinder và hiển thị preview, cho phép xoá ảnh.
*   **Sử dụng:**
    ```blade
    <x-inputs.image-link-array label="Thư viện ảnh" name="gallery" :value="['/path/to/image1.jpg', '/path/to/image2.jpg']"></x-inputs.image-link-array>
    ```
*   **Thuộc tính:**
    *   `label`: (bắt buộc) Nhãn cho input.
    *   `name`: (bắt buộc) Tên của input (để submit form).
    *   `value`: (tùy chọn) Giá trị mặc định của input (dạng array đường dẫn ảnh).
*   **Lưu ý:**
    *   Yêu cầu cài đặt CKFinder.
    *   Đảm bảo đã cấu hình CKFinder trên project của bạn.

### 13. `x-inputs.editor-array`

*   **Mô tả:** Component cho phép tạo danh sách trình soạn thảo văn bản (CKEditor 5)
*   **Sử dụng:**
    ```blade
    <x-inputs.editor-array label="Nội dung bài viết" name="articles" :value="['<p>Nội dung 1</p>', '<p>Nội dung 2</p>']"></x-inputs.editor-array>
    ```
*    **Thuộc tính:**
    *   `label`: (bắt buộc) Nhãn cho editor.
    *   `name`: (bắt buộc) Tên của textarea (để submit form).
    *   `value`: (tùy chọn) Giá trị mặc định của input (dạng array).
*   **Lưu ý:**
    *   Yêu cầu cài đặt CKEditor 5.
    *   Đảm bảo đã load file CKEditor script.

### 14. `x-inputs.text-area-array`

*   **Mô tả:** Component cho phép nhập một mảng các textarea.
*   **Sử dụng:**
    ```blade
    <x-inputs.text-area-array label="Ghi chú" name="notes" :value="['Note 1','Note 2']"></x-inputs.text-area-array>
    ```
*   **Thuộc tính:**
    *   `label`: (bắt buộc) Nhãn cho input.
    *   `name`: (bắt buộc) Tên của input (để submit form).
    *   `value`: (tùy chọn) Giá trị mặc định của input (dạng array).

## Lưu ý chung

*   Tất cả các component đều có hỗ trợ hiển thị lỗi validation của Laravel.
*   Bạn có thể tùy chỉnh CSS cho các component để phù hợp với giao diện của dự án.
*   Các component phức tạp hơn như `editor`, `image-link` yêu cầu bạn phải cài đặt các thư viện tương ứng.

## Ví dụ sử dụng tổng quát

```blade
@extends('admin.layouts.main')
@section('title','Form Element')
@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Form Element</h3>
        </div>
        <div class="card-body">
            <form action="{{route('admin.test.form.post')}}" method="post">
                <div class="alert alert-primary">Đây là các input component có thể sử dụng trong form</div>
                @csrf
                <x-inputs.text label="Input Text" name="text"></x-inputs.text>
                <x-inputs.email label="Input Email" name="email"></x-inputs.email>
                <x-inputs.number label="Input Number" name="number"></x-inputs.number>
                <x-inputs.text-area label="Input Text Area" name="text-area"></x-inputs.text-area>
                <x-inputs.select label="Input Select 2" name="select-2">
                    <option value="1" @selected(true)>Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                    <option value="4">Option 4</option>
                    <option value="5">Option 5</option>
                </x-inputs.select>
                <x-inputs.select-multiple label="Input Select Multiple" name="select-multiple">
                    <option value="1" selected>Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3" selected>Option 3</option>
                    <option value="4">Option 4</option>
                    <option value="5">Option 5</option>
                </x-inputs.select-multiple>
                <x-inputs.date label="Input Date" name="date"></x-inputs.date>
                <x-inputs.time label="Input Time" name="time"></x-inputs.time>
                <x-inputs.editor label="Input Editor" name="editor"></x-inputs.editor>
                <!-- Input Image Link trả về đường dẫn của hình ảnh được lưu trong ckfinder -->
                <x-inputs.image-link label="Input Image Link" name="image"></x-inputs.image-link>

                <div class="alert alert-primary">Các phần tử nâng cao</div>
                <x-inputs.text-array label="Text Array" name="text_array"></x-inputs.text-array>
                <x-inputs.image-link-array label="Image Link Array" name="image_link_array"></x-inputs.image-link-array>
                <x-inputs.editor-array label="Editor Array" name="editor_array"></x-inputs.editor-array>
                  <x-inputs.text-area-array label="Text Area Array" name="text_area_array"></x-inputs.text-area-array>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
@endsection
