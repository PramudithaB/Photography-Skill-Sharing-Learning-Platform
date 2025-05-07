import React from 'react'
import SingleBlog from '../components/blog/SingleBlog'
import SinglePost from '../components/SinglePost'
import CommentData from '../data/commentData'
import CommentView from '../components/CommentView'
import CommentCreate from '../components/CommentCreate'
import SlideBar from '../components/SlideBar'

function BlogDetails() {
  return (
    <div>
        {/*================Blog Area =================*/}
      <section className="blog_area single-post-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 posts-list">
              <SinglePost/>
              
            
              <div className="comments-area">
                <h4>05 Comments</h4>
                {CommentData.slice(0, 4).map(comment => (
                  <CommentView key={comment.id} comment={comment} />
                ))}
                
                
               
              </div>
              <CommentCreate/>
            </div>
            <div className="col-lg-4">
              <SlideBar/>
            </div>
          </div>
        </div>
      </section>
      {/*================ Blog Area end =================*/}
    </div>
  )
}

export default BlogDetails