import React from 'react'
import backgroundImage from '../assets/clients/img/gallery/section_bg02.jpg';

import team2 from "../assets/clients/img/gallery/team2.png"
import team1 from "../assets/clients/img/gallery/team1.png"
import team3 from "../assets/clients/img/gallery/team3.png"
import about from "../assets/clients/img/gallery/about.png"
function About() {
  return (
    <div>
      <div className="about-details section-padding30">
        <div className="container">
          <div className="row">
            <div className="offset-xl-1 col-lg-8">
              <div className="about-details-cap mb-50">
                <h4>Our Mission</h4>
                <p>Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
                </p>
                <p> Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.</p>
              </div>
              <div className="about-details-cap mb-50">
                <h4>Our Vision</h4>
                <p>Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
                </p>
                <p> Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      

        {/*? About Area Start*/}
        <div className="support-company-area pt-100 pb-100 section-bg fix" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="support-location-img">
                <img src={about} alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="right-caption">
                {/* Section Tittle */}
                <div className="section-tittles section-tittles2 mb-50">
                  <span>Our Top Services</span>
                  <h2>Our Best Services</h2>
                </div>
                <div className="support-caption">
                  <p className="pera-top">Mollit anim laborum duis adseu dolor iuyn voluptcate velit ess cillum dolore egru lofrre dsu quality mollit anim laborumuis au dolor in voluptate velit cillu.</p>
                  <p className="mb-65">Mollit anim laborum.Dvcuis aute serunt  iruxvfg dhjkolohr indd re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt moll.</p>
                  <a href="about.html" className="btn post-btn ">More About Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Area End*/}

       {/* Team Start */}
       <div className="team-area section-padding30">
        <div className="container">
          <div className="row">
            <div className="cl-xl-7 col-lg-8 col-md-10">
              {/* Section Tittle */}
              <div className="section-tittles mb-70">
                <span>Our Professional members </span>
                <h2>Our Team Mambers</h2>
              </div> 
            </div>
          </div>
          <div className="row">
            {/* single Tem */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
              <div className="single-team mb-30">
                <div className="team-img">
                  <img src={team2} alt="" />
                </div>
                <div className="team-caption">
                  <h3><a href="#">Ethan Welch</a></h3>
                  <span>UX Designer</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
              <div className="single-team mb-30">
                <div className="team-img">
                  <img src={team3} alt="" />
                </div>
                <div className="team-caption">
                  <h3><a href="#">Ethan Welch</a></h3>
                  <span>UX Designer</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
              <div className="single-team mb-30">
                <div className="team-img">
                  <img src={team1} alt="" />
                </div>
                <div className="team-caption">
                  <h3><a href="#">Ethan Welch</a></h3>
                  <span>UX Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}
    </div>
  )
}

export default About