import React from 'react'
import singleblog1 from "../assets/clients/img/blog/single_blog_1.png"
import author from "../assets/clients/img/blog/author.png"
import next from "../assets/clients/img/post/next.png"
import preview from "../assets/clients/img/post/preview.png"
function SinglePost() {
  return (
    <div>
        <div className="single-post">
                <div className="feature-img">
                  <img className="img-fluid" src={singleblog1} alt="" />
                </div>
                <div className="blog_details">
                  <h2>Second divided from form fish beast made every of seas
                    all gathered us saying he our
                  </h2>
                  <ul className="blog-info-link mt-3 mb-4">
                    <li><a href="#"><i className="fa fa-user" /> Travel, Lifestyle</a></li>
                    <li><a href="#"><i className="fa fa-comments" /> 03 Comments</a></li>
                  </ul>
                  <p className="excert">
                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                    should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                    fraction of the camp price. However, who has the willpower
                  </p>
                  <p>
                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                    should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                    fraction of the camp price. However, who has the willpower to actually sit through a
                    self-imposed MCSE training. who has the willpower to actually
                  </p>
                  <div className="quote-wrapper">
                    <div className="quotes">
                      MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                      should have to spend money on boot camp when you can get the MCSE study materials yourself at
                      a fraction of the camp price. However, who has the willpower to actually sit through a
                      self-imposed MCSE training.
                    </div>
                  </div>
                  <p>
                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                    should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                    fraction of the camp price. However, who has the willpower
                  </p>
                  <p>
                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                    should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                    fraction of the camp price. However, who has the willpower to actually sit through a
                    self-imposed MCSE training. who has the willpower to actually
                  </p>
                </div>
              </div>
              <div className="navigation-top">
                <div className="d-sm-flex justify-content-between text-center">
                  <p className="like-info"><span className="align-middle"><i className="fa fa-heart" /></span> Lily and 4
                    people like this</p>
                  <div className="col-sm-4 text-center my-2 my-sm-0">
                    {/* <p class="comment-count"><span class="align-middle"><i class="fa fa-comment"></i></span> 06 Comments</p> */}
                  </div>
                  <ul className="social-icons">
                    <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                    <li><a href="#"><i className="fab fa-twitter" /></a></li>
                    <li><a href="#"><i className="fab fa-dribbble" /></a></li>
                    <li><a href="#"><i className="fab fa-behance" /></a></li>
                  </ul>
                </div>
                <div className="navigation-area">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                      <div className="thumb">
                        <a href="#">
                          <img className="img-fluid" src={preview} alt="" />
                        </a>
                      </div>
                      <div className="arrow">
                        <a href="#">
                          <span className="lnr text-white ti-arrow-left" />
                        </a>
                      </div>
                      <div className="detials">
                        <p>Prev Post</p>
                        <a href="#">
                          <h4>Space The Final Frontier</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                      <div className="detials">
                        <p>Next Post</p>
                        <a href="#">
                          <h4>Telescopes 101</h4>
                        </a>
                      </div>
                      <div className="arrow">
                        <a href="#">
                          <span className="lnr text-white ti-arrow-right" />
                        </a>
                      </div>
                      <div className="thumb">
                        <a href="#">
                          <img className="img-fluid" src={next} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-author">
                <div className="media align-items-center">
                  <img src={author} alt="" />
                  <div className="media-body">
                    <a href="#">
                      <h4>Harvard milan</h4>
                    </a>
                    <p>Second divided from form fish beast made. Every of seas all gathered use saying you're, he
                      our dominion twon Second divided from</p>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default SinglePost