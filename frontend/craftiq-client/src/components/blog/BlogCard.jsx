import React from 'react'

function BlogCard({ img, title, author, date, description }) {
  return (
    <div>
      <div className="whats-news-single mb-40">
        <div className="whates-img">
          <img src={img} alt={title}  style={{ width: '320px', height: '218px', objectFit: 'cover' }} />
        </div>
        <div className="whates-caption whates-caption2">
          <h4>
            <a href="#">{title}</a>
          </h4>
          <span>by {author} - {date}</span>
          <p>{description}</p>
        </div>
      </div>
    </div>
 
  )
}

export default BlogCard