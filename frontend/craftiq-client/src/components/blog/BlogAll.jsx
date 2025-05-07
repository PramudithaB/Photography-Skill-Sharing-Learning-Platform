
import React from 'react'

function BlogAll({blog}) {
  return (
    <div>
        <div className="blog_left_sidebar">
                <article className="blog_item">
                  <div className="blog_item_img">
                    <img className="card-img rounded-0" src={blog.img} alt="" />
                    <a href="#" className="blog_item_date">
                      <h3>{blog.day}</h3>
                      <p> {blog.month} </p>
                    </a>
                  </div>
                  <div className="blog_details">
                    <a className="d-inline-block" href="single-blog.html">
                      <h2>{blog.title}</h2>
                    </a>
                    <p> {blog.pargrhap} </p>
                    <ul className="blog-info-link">
                      <li><a href="#"><i className="fa fa-user" /> {blog.category}</a></li>
                      <li><a href="#"><i className="fa fa-comments" /> {blog.commentCount}</a></li>
                    </ul>
                  </div>
                </article>
          
            
                <nav className="blog-pagination justify-content-center d-flex">
                  <ul className="pagination">
                    <li className="page-item">
                      <a href="#" className="page-link" aria-label="Previous">
                        <i className="ti-angle-left" />
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">1</a>
                    </li>
                    <li className="page-item active">
                      <a href="#" className="page-link">2</a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link" aria-label="Next">
                        <i className="ti-angle-right" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
    </div>
  )
}

export default BlogAll