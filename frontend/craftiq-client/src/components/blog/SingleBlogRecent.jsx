import React from 'react';

function SingleBlogRecent({ blog }) {
    return (
        <div>
            <div className="most-recent mb-40">
                <div className="most-recent-img">
                    <img src={blog.img} alt={blog.title} />
                    <div className="most-recent-cap">
                        <span className="bgbeg">{blog.category}</span>
                        <h4><a href="latest_news.html">{blog.title}</a></h4>
                        <p>{blog.user_name} | {blog.date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleBlogRecent;
