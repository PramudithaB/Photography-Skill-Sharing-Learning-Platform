import React from 'react'
import CreatePost from '../components/skillPost/CreatePost'
import { Link } from 'react-router-dom'
import SkillPostData from '../data/SkillPostData'
import PostSIdeSingle from '../components/skillPost/PostSIdeSingle'

function SkillPost() {
    return (
        <div>
            <section className="blog_area single-post-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 posts-list">
                            <CreatePost />
                            <div className="d-flex justify-content-center">
                                <Link to="/user/user-edit" className="btn btn-info mt-3">
                                    Publish
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div>
                                <div className="blog_right_sidebar">
                                    <aside className="single_sidebar_widget popular_post_widget">
                                        <h3 className="widget_title">Your Post</h3>
                                        {SkillPostData.slice(0, 4).map(skillPost => (
                                            <PostSIdeSingle key={skillPost.id} skillPost={skillPost} />
                                        ))}
                                        <div className="pt-5">
                                            <Link to="/user/viewSkillPost" className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn mt-8">
                                                View More
                                            </Link>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default SkillPost