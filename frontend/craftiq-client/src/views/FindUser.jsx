import React from 'react'
import UserData from '../data/UserData'
import FindUserCard from '../components/UserProfile/FindUserCard'

function FindUser() {
  return (
    <div className="whole-wrap">
      <div className="container box_1170">
        <div className="row">
          {UserData.map(user => (
            <div key={user.id} className="col-md-4 mb-4">
              <FindUserCard user={user} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FindUser
