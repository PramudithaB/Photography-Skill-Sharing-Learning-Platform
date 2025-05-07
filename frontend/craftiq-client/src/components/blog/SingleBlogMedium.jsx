import React from 'react'

function SingleBlogMedium({ blog}) {
    return (
        <div>
            <div className="weekly3-single">
                <div className="weekly3-img">
                    <img src={blog.img} alt="" />
                </div>
                <div className="weekly3-caption">
                    <h4><a href="latest_news.html">{blog.title}</a></h4>
                    <p>{blog.date}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleBlogMedium