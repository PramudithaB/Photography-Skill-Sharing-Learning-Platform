import React from 'react'
import SlideBar from '../components/SlideBar'
import BlogAll from '../components/blog/BlogAll'
import BlogData from '../data/BlogData'

function Blog() {
  return (
    <div>
         {/*================Blog Area =================*/}
      <section className="blog_area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
            {BlogData.slice(5, 8).map(blog => (
                  <BlogAll key={blog.id} blog={blog} />
                ))}
            </div>
            <div className="col-lg-4">
                <SlideBar/>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog