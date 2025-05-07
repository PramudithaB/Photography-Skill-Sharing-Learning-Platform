import React from 'react'

function SingleTrending({ blog }) {
    return (
        <div>
            {/* Single */}
            <div className="single-recent">
                <div className="what-img">
                    <img src={blog.image} alt="" />
                </div>
                <div className="what-cap">
                    <h4><a href="#"> </a><h4><a href="#" /><a href="latest_news.html">{blog.title}</a></h4></h4>
                    <p> {blog.date} </p>
                    <a className="popup-video btn-icon" href="https://www.youtube.com/watch?v=1aP-TXUpNoU"><span className="flaticon-play-button" /></a>
                </div>
            </div>
        </div>
    )
}

export default SingleTrending