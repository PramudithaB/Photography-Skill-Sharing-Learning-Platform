import React from 'react'

function Footer() {
  return (
    <div>
         <footer>
        {/* Footer Start*/}
        <div className="footer-main footer-bg">
          <div className="footer-area footer-padding">
            <div className="container">
              <div className="row d-flex justify-content-between">
                <div className="col-xl-3 col-lg-3 col-md-5 col-sm-8">
                  <div className="single-footer-caption mb-50">
                    <div className="single-footer-caption mb-30">
                      {/* logo */}
                      <div className="footer-logo">
                        <a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt="" /></a>
                      </div>
                      <div className="footer-tittle">
                        <div className="footer-pera">
                          <p className="info1">Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                          <p className="info2">198 West 21th Street, Suite 721 New York,NY 10010</p>
                          <p className="info2">Phone: +95 (0) 123 456 789 Cell: +95 (0) 123 456 789</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-5 col-sm-7">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Popular post</h4>
                    </div>
                    {/* Popular post */}
                    <div className="whats-right-single mb-20">
                      <div className="whats-right-img">
                        <img src="assets/img/gallery/footer_post1.png" alt="" />
                      </div>
                      <div className="whats-right-cap">
                        <h4><a href="latest_news.html">Scarlett’s disappointment at latest accolade</a></h4>
                        <p>Jhon  |  2 hours ago</p> 
                      </div>
                    </div>
                    {/* Popular post */}
                    <div className="whats-right-single mb-20">
                      <div className="whats-right-img">
                        <img src="assets/img/gallery/footer_post2.png" alt="" />
                      </div>
                      <div className="whats-right-cap">
                        <h4><a href="latest_news.html">Scarlett’s disappointment at latest accolade</a></h4>
                        <p>Jhon  |  2 hours ago</p> 
                      </div>
                    </div>
                    {/* Popular post */}
                    <div className="whats-right-single mb-20">
                      <div className="whats-right-img">
                        <img src="assets/img/gallery/footer_post3.png" alt="" />
                      </div>
                      <div className="whats-right-cap">
                        <h4><a href="latest_news.html">Scarlett’s disappointment at latest accolade</a></h4>
                        <p>Jhon  |  2 hours ago</p> 
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-5 col-sm-7">
                  <div className="single-footer-caption mb-50">
                    <div className="banner">
                      <img src="assets/img/gallery/body_card4.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* footer-bottom aera */}
          <div className="footer-bottom-area footer-bg">
            <div className="container">
              <div className="footer-border">
                <div className="row d-flex align-items-center">
                  <div className="col-xl-12 ">
                    <div className="footer-copy-right text-center">
                      <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        Copyright © All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End*/}
      </footer>
    </div>
  )
}

export default Footer