import React from 'react'

import SlideBar from '../components/SlideBar'
import SkillPostData from '../data/SkillPostData'
import AllPost from '../components/skillPost/AllPost'

function SkillPostView() {
  return (
    <div>
         <section className="blog_area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
            {SkillPostData.slice(0, 8).map(skillpost => (
                  <AllPost key={skillpost.id} skillpost={skillpost} />
                ))}
            </div>
            <div className="col-lg-4">
                <SlideBar/>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SkillPostView