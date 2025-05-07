import React from 'react'
import SocialFans from '../components/SocialFans'
import CategoriSection from '../components/blog/CategoriSection'

function Categori() {
  return (
    <div>
     
 <CategoriSection/>

       {/*Start pagination */}
       <div className="pagination-area  gray-bg pb-45">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="single-wrap">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-start">
                    <li className="page-item"><a className="page-link" href="#">
                        {/* SVG icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="15px">
                          <path fillRule="evenodd" fill="rgb(221, 221, 221)" d="M8.142,13.118 L6.973,14.135 L0.127,7.646 L0.127,6.623 L6.973,0.132 L8.087,1.153 L2.683,6.413 L23.309,6.413 L23.309,7.856 L2.683,7.856 L8.142,13.118 Z" />
                        </svg>
                      </a></li>
                    <li className="page-item active"><a className="page-link" href="#">01</a></li>
                    <li className="page-item"><a className="page-link" href="#">02</a></li>
                    <li className="page-item"><a className="page-link" href="#">03</a></li>
                    <li className="page-item"><a className="page-link" href="#">
                        {/* SVG iocn */}
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="40px" height="15px">
                          <path fillRule="evenodd" fill="rgb(255, 11, 11)" d="M31.112,13.118 L32.281,14.136 L39.127,7.646 L39.127,6.624 L32.281,0.132 L31.167,1.154 L36.571,6.413 L0.491,6.413 L0.491,7.857 L36.571,7.857 L31.112,13.118 Z" />
                        </svg>
                      </a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End pagination  */}
        
    </div>
  )
}

export default Categori