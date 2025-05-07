import React from 'react'
import social1 from "../assets/clients/img/news/icon-fb.png"
import social2 from "../assets/clients/img/news/icon-tw.png"
import social3 from "../assets/clients/img/news/icon-ins.png"
import social4 from "../assets/clients/img/news/icon-yo.png"
function SocialFans() {
  return (
    <div>
      {/* Flow Socail */}
      <div className="single-follow mb-45">
        <div className="single-box">
          <div className="follow-us d-flex align-items-center">
            <div className="follow-social">
              <a href="#"><img src={social1} alt="" /></a>
            </div>
            <div className="follow-count">
              <span>8,045</span>
              <p>Fans</p>
            </div>
          </div>
          <div className="follow-us d-flex align-items-center">
            <div className="follow-social">
              <a href="#"><img src={social2} alt="" /></a>
            </div>
            <div className="follow-count">
              <span>8,045</span>
              <p>Fans</p>
            </div>
          </div>
          <div className="follow-us d-flex align-items-center">
            <div className="follow-social">
              <a href="#"><img src={social3} alt="" /></a>
            </div>
            <div className="follow-count">
              <span>8,045</span>
              <p>Fans</p>
            </div>
          </div>
          <div className="follow-us d-flex align-items-center">
            <div className="follow-social">
              <a href="#"><img src={social4} alt="" /></a>
            </div>
            <div className="follow-count">
              <span>8,045</span>
              <p>Fans</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialFans