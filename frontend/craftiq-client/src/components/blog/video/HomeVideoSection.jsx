import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

import news2 from "../../../assets/clients/video/news2.mp4";

function HomeVideoSection() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const videos = [
    { src: news2, title: "Old Spondon News - 2020" },
    { src: news2, title: "Banglades News Video" },
    { src: news2, title: "Latest Video - 2020" },
    { src: news2, title: "Spondon News - 2019" },
    { src: news2, title: "Latest Video - 2020" }
  ];

  return (
    <div className="youtube-area video-padding d-none d-sm-block">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Slider {...sliderSettings} className="video-items-active" >
              {videos.map((video, idx) => (
                <div className="video-items text-center " key={idx} style={{ padding: '5px' }}>
                  <video controls>
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </Slider>
          </div>
        </div>

      </div> 
    </div>
  );
}

export default HomeVideoSection;
