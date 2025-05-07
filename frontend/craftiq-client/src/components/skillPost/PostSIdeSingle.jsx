import React from 'react'

function PostSIdeSingle({ skillPost }) {
    const { img, title, date } = skillPost;
    const formattedDate = `${date[0].day} ${date[0].month}, ${date[0].year}`;
  return (
    <div>
        <div className="media post_item mt-3">
        <img src={img} alt="post" style={{ width: '80px', height: '80px', objectFit: 'cover' }} />

              <div className="media-body">
                <a href="single-blog.html">
                  <h3>{title}</h3>
                </a>
                <p>{formattedDate}</p>
              </div>
            </div>
    </div>
  )
}

export default PostSIdeSingle