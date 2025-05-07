import React from 'react';
import img9 from '../../assets/clients/img/blog/single_blog_4.png';
import { Link } from 'react-router-dom';

function AllSkillPost({skillPost}) {
    const { img, title, summary } = skillPost;
  return (
    <div className="all-skill-post-container">
      <div className="section-top-border">
        <blockquote className="generic-blockquote">
          <div className="custom-post-wrapper">
            {/* Fixed-size image */}
            <div className="custom-post-image">
              <img
                src={img}
                alt="Skill Post"
                className="img-fluid"
              />
            </div>

            {/* Text and buttons */}
            <div className="custom-post-content">
              <h2>{title}</h2>
              <p className="mb-2">
                “ {summary} ”
              </p>

              <div className="custom-button-group">
                <Link to={`/user/editSkillPost/${skillPost.id}`} className="button primary-bg text-white btn_1 boxed-btn">
                  Edit
                </Link>
                <Link to="/user/home" className="button primary-bg text-white btn_1 boxed-btn">
                  Delete
                </Link>
              </div>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
  );
}

export default AllSkillPost;
