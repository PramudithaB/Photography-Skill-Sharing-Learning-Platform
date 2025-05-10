// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from "../assets/clients/img/logo/logo.png";
import usericon from "../assets/clients/img/icon/user.png"
import '@fortawesome/fontawesome-free/css/all.min.css';

function Header() {
  return (
    <div>
      <header>
        {/* Header Start */}
        <div className="header-area">
          <div className="main-header ">
            <div className="header-top black-bg d-none d-sm-block">
              <div className="container">
                <div className="col-xl-12">
                  <div className="row d-flex justify-content-between align-items-center">
               
                   
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="header-bottom header-sticky">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-8 col-lg-8 col-md-12 header-flex">
                    {/* sticky */}
                    <div className="sticky-logo">
                      <Link to="/user/home"><img src="assets/img/logo/logo.png" alt="" /></Link> {/* Use Link for navigation */}
                    </div>
                    {/* Main-menu */}
                    <div className="main-menu d-none d-md-block">
                      <nav>
                        <ul id="navigation">
                          <li><Link to="/user/home">Home</Link></li> {/* Use Link for navigation */}
                          <li><Link to="/user/skill-post-view">Category</Link></li>
                          <li><Link to="/user/blog-details">Blog Details</Link></li>
                          <li><Link to="/user/event-workshop-all">Events & Workshops</Link></li>
                       <li><Link to="/user/learning-plans">Learning Plans</Link></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="header-right f-right d-none d-lg-block">
                      {/* Header social */}
                      <ul className="header-social">
                        <li>
                          <Link to="/user/user-profile">
                            <i className="fas fa-user" />
                          </Link>
                        </li>
                        <li>
                        <Link to="/register">
                            <i className="fas fa-sign-out-alt" aria-hidden="true"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Mobile Menu */}
                  <div className="col-12">
                    <div className="mobile_menu d-block d-md-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Header End */}
      </header>
    </div>
  );
}

export default Header;
