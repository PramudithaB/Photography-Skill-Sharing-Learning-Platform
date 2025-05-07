import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel";


import trending_top2 from "../assets/clients/img/trending/trending_top2.jpg";
import trending_top3 from "../assets/clients/img/trending/trending_top02.jpg";
import trending_top4 from "../assets/clients/img/trending/trending_top3.jpg";
import SingleBlog from "../components/blog/SingleBlog";
import BlogData from '../data/BlogData';
import SingleBlog1 from "../components/blog/SingleBlog1";
import SocialFans from "../components/SocialFans";
import SingleBlogRecent from "../components/blog/SingleBlogRecent";
import SingleBloghorizontal from "../components/blog/SingleBloghorizontal";

import PopularBlog from "../components/blog/popularBlog";
import TrendingBlog from "../components/blog/TrendingBlog/TrendingBlog";
import HomeVideoSection from "../components/blog/video/HomeVideoSection";

function Home() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const initializeSlider = () => {
      if (sliderRef.current && $(sliderRef.current).length) {
        $(sliderRef.current).slick({
          autoplay: true,
          autoplaySpeed: 3500,
          dots: false,
          fade: true,
          arrows: false,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              },
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
              },
            },
          ],
        });
      }
    };

    // Delay to ensure DOM elements are available
    const timeout = setTimeout(initializeSlider, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <div className="trending-area fix pt-25 gray-bg">
        <div className="container">
          <div className="trending-main">
            <div className="row">
              <div className="col-lg-8">
                {/* Attach ref to the slider div */}
                <div className="slider-active" ref={sliderRef}>
                  <div className="single-slider">
                    <div className="trending-top mb-30">
                      <div className="trend-top-img">
                        <img src={trending_top2} alt="Trending" />
                        <div className="trend-top-cap">
                          <span className="bgr">Business</span>
                          <h2>
                            <a href="latest_news.html">
                              Anna Lora Stuns In White At Her Australian Premiere
                            </a>
                          </h2>
                          <p>by Alice Cloe - Jun 19, 2020</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-slider">
                    <div className="trending-top mb-30">
                      <div className="trend-top-img">
                        <img src={trending_top2} alt="Trending" />
                        <div className="trend-top-cap">
                          <span className="bgr">Business</span>
                          <h2>
                            <a href="latest_news.html">
                              Secretart for Economic Airplane that looks like
                            </a>
                          </h2>
                          <p>by Alice Cloe - Jun 19, 2020</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-slider">
                    <div className="trending-top mb-30">
                      <div className="trend-top-img">
                        <img src={trending_top3} alt="Trending" />
                        <div className="trend-top-cap">
                          <span className="bgr">Tech</span>
                          <h2>
                            <a href="latest_news.html">
                              Secretart for Economic Airplane that looks like
                            </a>
                          </h2>
                          <p>by Alice Cloe - Jun 19, 2020</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sidebar */}
              <div className="col-lg-4">
                <div className="trending-top mb-30">
                  <div className="trend-top-img">
                    <img src={trending_top3} alt="Fashion" />
                    <div className="trend-top-cap trend-top-cap2">
                      <span className="bgb">Fashion</span>
                      <h2>
                        <a href="latest_news.html">
                          Secretart for Economic Airplane that looks like
                        </a>
                      </h2>
                      <p>by Alice Cloe - Jun 19, 2020</p>
                    </div>
                  </div>
                </div>
                <div className="trending-top mb-30">
                  <div className="trend-top-img">
                    <img src={trending_top4} alt="Tech" />
                    <div className="trend-top-cap trend-top-cap2">
                      <span className="bgg">Tech</span>
                      <h2>
                        <a href="latest_news.html">
                          Secretart for Economic Airplane that looks like
                        </a>
                      </h2>
                      <p>by Alice Cloe - Jun 19, 2020</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sidebar End */}
            </div>
          </div>
        </div>
      </div>

      {/* Whats New Start */}
      <section className="whats-news-area pt-50 pb-20 gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">

              {/* Heading & Nav Button */}
              <div className="row justify-content-between align-items-end mb-15">
                <div className="col-xl-4">
                  <div className="section-tittle mb-30">
                    <h3>Whats New</h3>
                  </div>
                </div>
                <div className="col-xl-8 col-md-9">
                  <div className="properties__button">
                    {/* Nav Button */}
                    <nav>
                      <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Lifestyle</a>
                        <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Travel</a>
                        <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Fashion</a>
                        <a className="nav-item nav-link" id="nav-sport-tab" data-toggle="tab" href="#nav-sport" role="tab" aria-controls="nav-sport" aria-selected="false">Sports</a>
                        <a className="nav-item nav-link" id="nav-tech-tab" data-toggle="tab" href="#nav-tech" role="tab" aria-controls="nav-tech" aria-selected="false">Technology</a>
                      </div>
                    </nav>
                    {/* End Nav Button */}
                  </div>
                </div>
              </div>
              {/* Tab content */}
              <div className="row">
                <div className="col-12">
                  {/* Nav Card */}
                  <div className="tab-content" id="nav-tabContent">
                    {/* card one */}
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                      <div className="row">
                        {/* Left Details Caption */}
                        {/* Left Details Caption */}
                        <div className="col-xl-6">
                          <SingleBlog1 blog={BlogData[BlogData.length - 1]} />

                        </div>

                        {/* Right single caption */}
                        <div className="col-xl-6 col-lg-12">
                          <div className="row">
                            {/* single */}
                            {BlogData.slice(0, 4).map(blog => (
                              <SingleBlog key={blog.id} blog={blog} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Card two */}
                    {/* 
                    Want to Change Under tab-pane fade after nav bar and all connected or remove nav bar  
                    */}
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                      <div className="row">
                        {/* Left Details Caption */}
                        <div className="col-xl-6">
                          <div className="whats-news-single mb-40">
                            <div className="whates-img">
                              <img src="assets/img/gallery/whats_right_img2.png" alt="" />
                            </div>
                            <div className="whates-caption">
                              <h4><a href="#">Secretart for Economic Air
                                plane that looks like</a></h4>
                              <span>by Alice cloe   -   Jun 19, 2020</span>
                              <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                            </div>
                          </div>
                        </div>
                        {/* Right single caption */}
                        <div className="col-xl-6 col-lg-12">
                          <div className="row">
                            {/* single */}
                            <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                              <div className="whats-right-single mb-20">
                                <div className="whats-right-img">
                                  <img src="assets/img/gallery/whats_right_img3.png" alt="" />
                                </div>
                                <div className="whats-right-cap">
                                  <span className="colorg">FASHION</span>
                                  <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                  <p>Jun 19, 2020</p>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Nav Card */}
                  {/* End Nav Card */}
                </div>
              </div>


              {/* Banner */}
              <div className="banner-one mt-20 mb-30">
                <img src="assets/img/gallery/body_card1.png" alt="" />
              </div>
            </div>
            <div className="col-lg-4">
              {/* Flow Socail */}
              <SocialFans />
              {/* Most Recent Area */}
              <div className="most-recent-area">
                {/* Section Tittle */}
                <div className="small-tittle mb-20">
                  <h4>Most Recent</h4>
                </div>
                {/* Details */}
                <SingleBlogRecent blog={BlogData[0]} />

                {/* Single */}
                {BlogData.slice(0, 2).map(blog => (
                  <SingleBloghorizontal key={blog.id} blog={blog} />
                ))}
                {/* Single */}

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Whats New End */}

      {/*   Weekly2-News start */}
      <div className="weekly2-news-area pt-50 pb-30 gray-bg">
        <div className="container">
          <div className="weekly2-wrapper">
            <div className="row">
              <PopularBlog />
            </div>
          </div>
        </div>
      </div>
      {/* End Weekly-News */}
      <TrendingBlog />

      <HomeVideoSection />

      

    </div>
  );
}

export default Home;
