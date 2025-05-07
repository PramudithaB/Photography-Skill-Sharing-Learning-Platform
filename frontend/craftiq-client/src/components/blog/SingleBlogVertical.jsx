import React from 'react'

function SingleBlogVertical({blog}) {
    return (
        <div>
            {/* Single */}
            <div className="weekly2-single">
                <div className="weekly2-img">
                    <img src={blog.img} alt="" style={{ width: '245px', height: '162px', objectFit: 'cover' }}/>
                </div>
                <div className="weekly2-caption">
                    <h4><a href="#"> {blog.title} </a></h4>
                    <p> {blog.user_name}  |  {blog.date}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleBlogVertical