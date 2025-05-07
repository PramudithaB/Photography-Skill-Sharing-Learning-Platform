import React from 'react';

function SingleBlog1({ blog }) {
    return (
        <div>     
                <div className="whats-news-single mb-40">
                    <div className="whates-img">
                        <img src={blog.img} alt={blog.title} />
                    </div>
                    <div className="whates-caption">
                        <h4><a href="latest_news.html">{blog.title}</a></h4>
                        <span>by {blog.user_name} - {blog.date}</span>
                        <p>{blog.pargrhap}</p>
                    </div>
                </div>
        
        </div>
    );
}

export default SingleBlog1;
