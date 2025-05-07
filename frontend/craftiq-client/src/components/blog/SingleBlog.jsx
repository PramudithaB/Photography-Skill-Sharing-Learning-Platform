import React from 'react';

function SingleBlog({ blog }) {
    return (
        <div>
            <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                <div className="whats-right-single mb-20">
                    <div className="whats-right-img">
                        <img src={blog.img} alt={blog.title} style={{ width: '124px', height: '104px', objectFit: 'cover' }} />
                    </div>
                    <div className="whats-right-cap">
                        <span className="colorb">{blog.category}</span>
                        <h4><a href="latest_news.html">{blog.title}</a></h4>
                        <p>{blog.date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleBlog;
