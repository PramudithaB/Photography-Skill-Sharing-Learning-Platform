import React from 'react'
import BlogData from '../../data/BlogData'
import BlogCard from './BlogCard'
import SocialFans from "../../components/SocialFans";
function CategoriSection() {
  return (
    <div>
         {/* About US Start */}
  <div className="about-area2 gray-bg pt-60 pb-60">
    <div className="container">
      <div className="row">
        
        <div className="col-lg-8">
          <div className="whats-news-wrapper">
            {/* Heading & Nav Button */}
            <div className="row justify-content-between align-items-end mb-15">
              <div className="col-xl-4">
                <div className="section-tittle mb-30">
                  <h3>Whats New</h3>
                </div>
              </div>
              <div className="col-xl-8 col-md-9">
                <div className="properties__button">
                  {/*Nav Button  */}
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <a
                        className="nav-item nav-link active"
                        id="nav-home-tab"
                        data-toggle="tab"
                        href="#nav-home"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                      >
                        Lifestyle
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-profile-tab"
                        data-toggle="tab"
                        href="#nav-profile"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                      >
                        Travel
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-contact-tab"
                        data-toggle="tab"
                        href="#nav-contact"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false"
                      >
                        Fashion
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-last-tab"
                        data-toggle="tab"
                        href="#nav-last"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false"
                      >
                        Sports
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-Sports"
                        data-toggle="tab"
                        href="#nav-nav-Sport"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false"
                      >
                        Technology
                      </a>
                    </div>
                  </nav>
                  {/*End Nav Button  */}
                </div>
              </div>
            </div>
            {/* Tab content */}
            <div className="row">
              <div className="col-12">
                {/* Nav Card */}
                <div className="tab-content" id="nav-tabContent">
                  {/* card one */}
                  <div
                    className="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <div className="row">
                    {BlogData.map((blog, index) => (
          <div key={index} className="col-xl-6 col-lg-6 col-md-6">
            <BlogCard {...blog} />
          </div>
        ))}
                    
                    
                     
                    </div>
                  </div>
                </div>
                {/* End Nav Card */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          {/* Flow Socail */}
          <SocialFans />
          {/* New Poster */}
          <div className="news-poster d-none d-lg-block">
            <img src="assets/img/news/news_card.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>

    </div>
  )
}

export default CategoriSection