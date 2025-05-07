import React from 'react';
import tranding1 from "../../../assets/clients/img/gallery/tranding1.png";

function TrendingBlog() {
  return (
    <div>
      {/* Recent Articles start */}
      <div className="recent-articles pt-80 pb-80">
        <div className="container">
          <div className="recent-wrapper">
            {/* Section Title */}
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle mb-30">
                  <h3>Trending News</h3>
                </div>
              </div>
            </div>

            {/* Articles */}
            <div className="row">
              <div className="col-12">
                <div className="recent-active dot-style d-flex">
                  {/* Single Article */}
                  <div className="single-recent">
                    <div className="what-img">
                      <img src={tranding1} alt="Trending" />
                    </div>
                    <div className="what-cap">
                      <h4>
                        <a href="latest_news.html">
                          What to Expect From the 2020 Oscar Nominations
                        </a>
                      </h4>
                      <p>Jun 19, 2020</p>
                      <a
                        className="popup-video btn-icon"
                        href="https://www.youtube.com/watch?v=1aP-TXUpNoU"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="flaticon-play-button" />
                      </a>
                    </div>
                  </div>

                  {/* Second Article */}
                  <div className="single-recent">
                    <div className="what-img">
                      <img src={tranding1} alt="Trending" />
                    </div>
                    <div className="what-cap">
                      <h4>
                        <a href="latest_news.html">
                          What to Expect From the 2020 Oscar Nominations
                        </a>
                      </h4>
                      <p>Jun 19, 2020</p>
                      <a
                        className="popup-video btn-icon"
                        href="https://www.youtube.com/watch?v=1aP-TXUpNoU"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="flaticon-play-button" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* Recent Articles End */}
    </div>
  );
}

export default TrendingBlog;
