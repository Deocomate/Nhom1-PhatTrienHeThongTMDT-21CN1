import React, {useEffect, useState} from "react";
import {useAuth} from "@/auth/AuthProvider";
import {toast} from "react-toastify";
import apiService from "@/lib/api/apiService";

export const ProductComments = ({product}) => {

    let [comment, setComment] = useState("");
    let [comments, setComments] = useState([]);
    let {user} = useAuth()

    let fetchCommentsByProductId = async (id) => {
        if (id) {
            let res = await apiService.get("/comments/product/" + id)
            if (res.code == 200) {
                console.log(res)
                setComments(res.data)
            }
        }
    }

    let handleSubmitComment = async (e) => {
        e.preventDefault()

        if (user == null) {
            // toast
            toast.error("Hãy đăng nhập để bình luận!")
            return
        }

        let commentData = {
            productId: product.id, customerId: user.id, content: comment,
        }

        let res = await apiService.post("/comments", commentData)

        if (res.code == 201) {
            toast.success("Gửi bình luận thành công")
        } else {
            toast.error("Gửi bình luận không thành công")
        }
    }

    useEffect(() => {
        fetchCommentsByProductId(product.id).then()
    }, []);

    return (<>
        <div className="ltn__shop-details-tab-content-inner">
            <h4 className="title-2">Bình luận của sản phẩm</h4>
            {/*  Implement review display and submission  */}
            {comments && comments.length > 0 ? (comments.map((comment) => (
                <div key={comment.id} className="ltn__comment-item clearfix mb-3">
                    <div className="ltn__commenter-img">
                        {/*  You might want to link to a user profile if you have one */}
                        <img style={{
                            width: "80px", height: "80px",
                        }} src="/assets/default/user.jpg" alt="Reviewer"/>
                    </div>
                    <div className="ltn__commenter-comment">
                        <h6>{comment.customerName}</h6>
                        {/*  Display rating stars here if you have them */}
                        <p>{comment.content}</p>
                        {/*  Display reply if exists */}
                        {comment.replyCommentResponses && comment.replyCommentResponses.length > 0 && (
                            <div className="ltn__comment-reply">
                                {comment.replyCommentResponses.map(reply => (<div key={reply.id} className={"py-3"}>
                                    <b className="fw-bold fs-5">Trả lời:</b>
                                    <div className="ltn__comment-item clearfix">
                                        <div className="ltn__commenter-img">
                                            <img src="/assets/default/user.jpg" style={{
                                                width: "80px", height: "80px",
                                            }}
                                                 alt="Replier"/>
                                        </div>
                                        <div className="ltn__commenter-comment">
                                            <h6>Admin</h6>
                                            <p>{reply.replyContent}</p>
                                        </div>
                                    </div>
                                </div>))}
                            </div>)}
                    </div>
                </div>))) : (<p>Chưa có đánh giá nào.</p>)}


            {/* comment-reply */}
            <div className="ltn__comment-reply-area ltn__form-box mb-30">
                {/*  Implement review submission form  */}
                <form action="#" onSubmit={handleSubmitComment}>
                    <h4 className="title-2">Thêm bình luận</h4>
                    <div className="input-item input-item-textarea ltn__custom-icon">
                        <textarea placeholder="Nhập bình luận của bạn...."
                                  value={comment}
                                  onChange={(e) => setComment(e.target.value)}
                                  required/>
                    </div>
                    <div className="btn-wrapper">
                        <button
                            className="btn theme-btn-1 btn-effect-1 text-uppercase"
                            type="submit">
                            Gửi
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>)
}
