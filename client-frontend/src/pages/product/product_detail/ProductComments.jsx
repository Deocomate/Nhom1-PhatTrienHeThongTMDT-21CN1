import React from "react";

export const ProductComments = ({comments}) => {
    console.log(comments)
    return (<>
        <div className="ltn__shop-details-tab-content-inner">
            <h4 className="title-2">Bình luận của sản phẩm</h4>
            {/*  Implement review display and submission  */}
            {comments && comments.length > 0 ? (comments.map((comment) => (
                <div key={comment.id} className="ltn__comment-item clearfix">
                    <div className="ltn__commenter-img">
                        {/*  You might want to link to a user profile if you have one */}
                        <img src="/assets/default/user.jpg" alt="Reviewer"/>
                    </div>
                    <div className="ltn__commenter-comment">
                        <h6>{comment.customerName}</h6>
                        {/*  Display rating stars here if you have them */}
                        <p>{comment.content}</p>
                        {/*  Display reply if exists */}
                        {comment.replyCommentResponses && comment.replyCommentResponses.length > 0 && (
                            <div className="ltn__comment-reply">
                                {comment.replyCommentResponses.map(reply => (<div key={reply.id}
                                                                                  className="ltn__comment-item clearfix">
                                    <div className="ltn__commenter-img">
                                        <img src="/assets/default/user.jpg"
                                             alt="Replier"/>
                                    </div>
                                    <div className="ltn__commenter-comment">
                                        <h6>Admin</h6>
                                        <p>{reply.replyContent}</p>
                                    </div>
                                </div>))}
                            </div>)}
                    </div>
                </div>))) : (<p>Chưa có đánh giá nào.</p>)}


            {/* comment-reply */}
            <div className="ltn__comment-reply-area ltn__form-box mb-30">
                {/*  Implement review submission form  */}
                <form action="#">
                    <h4 className="title-2">Thêm bình luận</h4>
                    <div className="input-item input-item-textarea ltn__custom-icon">
                        <textarea placeholder="Nhập bình luận của bạn...."/>
                    </div>
                    <div className="btn-wrapper">
                        <button
                            className="btn theme-btn-1 btn-effect-1 text-uppercase"
                            type="submit"
                        >
                            Gửi
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>)
}
