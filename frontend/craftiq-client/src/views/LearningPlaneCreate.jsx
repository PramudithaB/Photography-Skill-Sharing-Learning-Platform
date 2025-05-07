import React from 'react'
import singleblog1 from "../assets/clients/img/blog/single_blog_1.png"
import SlideBar from '../components/SlideBar'
function LearningPlaneCreate() {
    return (
        <div>
            <section className="blog_area single-post-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 posts-list">
                            <div className="single-post">
                                <div className="feature-img">
                                    <img className="img-fluid" src={singleblog1} alt="" />
                                </div>
                                <div className="blog_details">

                                    <div className="row">
                                        <div className="col-12">
                                            <h2 className="contact-title">Create Your Plane</h2>
                                        </div>
                                        <div className="col-lg-12">
                                            <form
                                                className="form-contact contact_form"
                                                action="contact_process.php"
                                                method="post"
                                                id="contactForm"
                                                noValidate="novalidate"
                                            >
                                                <div className="row">
                                                    <div className="col-12">


                                                        <div className="form-group">
                                                            <input
                                                                className="form-control"
                                                                name="subject"
                                                                id="subject"
                                                                type="text"
                                                                onfocus="this.placeholder = ''"
                                                                onblur="this.placeholder = 'Enter Subject'"
                                                                placeholder="Enter Subject"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <input
                                                                className="form-control valid"
                                                                name="name"
                                                                id="name"
                                                                type="text"
                                                                onfocus="this.placeholder = ''"
                                                                onblur="this.placeholder = 'Enter your name'"
                                                                placeholder="Enter your name"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <input
                                                                className="form-control valid"
                                                                name="email"
                                                                id="email"
                                                                type="email"
                                                                onfocus="this.placeholder = ''"
                                                                onblur="this.placeholder = 'Enter email address'"
                                                                placeholder="Email"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <textarea
                                                                className="form-control w-100"
                                                                name="Description"
                                                                id="Description"
                                                                cols={30}
                                                                rows={9}
                                                                onfocus="this.placeholder = ''"
                                                                onblur="this.placeholder = 'Description"
                                                                placeholder=" Description"
                                                                defaultValue={""}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group mt-3">
                                                    <button type="submit" className="button button-contactForm boxed-btn">
                                                        Send
                                                    </button>
                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </div>




                        </div>
                        <div className="col-lg-4">
                            <SlideBar />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default LearningPlaneCreate