<?php

namespace App\Http\Controllers\Admin\PharmacySystem;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CommentController extends Controller
{
    public function index()
    {
        $comments = DB::table('comments')
            ->join('customers', 'comments.customer_id', '=', 'customers.id')
            ->join('products', 'comments.product_id', '=', 'products.id')
            ->select('comments.*', 'customers.full_name as customer_name', 'products.title as product_title')
            ->orderBy('comments.created_at', 'desc')
            ->get();

        return view("admin.modules.comment.index", compact('comments'));
    }

    /**
     * Xem chi tiết comment và viết reply comment cho comment đó
     */
    public function edit(string $id)
    {
        // Get comment details
        $comment = DB::table('comments')
            ->join('customers', 'comments.customer_id', '=', 'customers.id')
            ->join('products', 'comments.product_id', '=', 'products.id')
            ->select('comments.*', 'customers.full_name as customer_name', 'products.title as product_title')
            ->where('comments.id', $id)
            ->first();

        if (!$comment) {
            abort(404);
        }

        // Get existing replies for this comment
        $replies = DB::table('reply_comments')
            ->where('comment_id', $id)
            ->orderBy('created_at', 'asc')
            ->get();

        return view("admin.modules.comment.edit", compact('comment', 'replies'));
    }

    /**
     * Thêm reply comment cho một comment
     */
    public function add_reply_comment(Request $request)
    {
        $validated = $request->validate([
            'comment_id' => 'required|exists:comments,id',
            'reply_content' => 'required|string'
        ]);

        DB::table('reply_comments')->insert([
            'comment_id' => $validated['comment_id'],
            'reply_content' => $validated['reply_content'],
            'created_at' => now(),
            'updated_at' => now()
        ]);

        return redirect()
            ->route('admin.comment.edit', ['comment' => $validated['comment_id']])
            ->with('success', 'Phản hồi được thêm thành công!');
    }

    /**
     * Xoá comment của một người dùng
     */
    public function destroy(string $id)
    {
        // First delete all replies to this comment (cascade doesn't automatically work with Query Builder)
        DB::table('reply_comments')->where('comment_id', $id)->delete();

        // Then delete the comment itself
        DB::table('comments')->where('id', $id)->delete();

        return redirect()
            ->route('admin.comment.index')
            ->with('success', 'Bình luận đã được xoá thành công!');
    }
}
