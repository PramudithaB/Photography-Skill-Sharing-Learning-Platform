// src/components/CommentView.jsx
import React from 'react';

function CommentView({ comment }) {
  return (
    <div className="comment-list">
      <div className="single-comment justify-content-between d-flex">
        <div className="user justify-content-between d-flex">
          <div className="thumb">
            <img src={comment.img} alt="" />
          </div>
          <div className="desc">
            <p className="comment">{comment.pargrhap}</p>
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <h5><a href="#">{comment.author}</a></h5>
                <p className="date">{comment.date}</p>
              </div>
              <div className="reply-btn">
                <a href="#" className="btn-reply text-uppercase">reply</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentView;
