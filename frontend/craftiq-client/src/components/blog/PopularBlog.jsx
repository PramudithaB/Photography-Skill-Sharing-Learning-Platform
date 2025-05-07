import React from 'react';
import Slider from 'react-slick';
import BlogData from '../../data/BlogData';
import SingleBlogVertical from './SingleBlogVertical';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function PopularBlog() {
  const slidersetting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust as needed
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="col-lg-9">
      <div className="slider-wrapper">
        {/* Section Title */}
        <div className="row">
          <div className="col-lg-12">
            <div className="small-tittle mb-30">
              <h4>Most Popular</h4>
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="row">
          <div className="col-lg-12">
            <Slider {...slidersetting}>
              {BlogData.slice(0, 5).map(blog => (
                <div key={blog.id}>
                  <SingleBlogVertical blog={blog} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularBlog;
