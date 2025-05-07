import React from 'react'

function SingleBloghorizontal({ blog }) {
    return (
        <div>
            <div className="most-recent-single">
                <div className="most-recent-images">
                    <img src={blog.img} alt="" style={{ width: '80px', height: '79px', objectFit: 'cover' }} />
                </div>
                <div className="most-recent-capt">
                    <h4><a href="latest_news.html">{blog.title}</a></h4>
                    <p>{blog.user_name}  |  {blog.date}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleBloghorizontal