import React from 'react'

function AllPost({ skillpost }) {
    return (
        <div>
            <div>
                <div className="blog_left_sidebar">
                    <article className="blog_item">
                        <div className="blog_item_img">
                            <img
                                className="card-img rounded-0"
                                src={skillpost.img}
                                alt=""
                                style={{ width: '770px', height: '370px' }}
                            />

                            {skillpost.date && skillpost.date.length > 0 && (
                                <a href="#" className="blog_item_date">
                                    <h3>{skillpost.date[0].day}</h3>
                                    <p>{skillpost.date[0].month}</p>
                                </a>
                            )}


                        </div>
                        <div className="blog_details">
                            <a className="d-inline-block" href="single-blog.html">
                                <h2>{skillpost.title}</h2>
                            </a>
                            <p> {skillpost.summary} </p>
                            <ul className="blog-info-link">
                                <li><a href="#"><i className="fa fa-user" /> {skillpost.category}</a></li>
                                <li><a href="#"><i className="fa fa-comments" /> {skillpost.commentCount}</a></li>
                            </ul>
                        </div>
                    </article>



                </div>
            </div>
        </div>
    )
}

export default AllPost