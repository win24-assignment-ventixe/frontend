import React from 'react'

const SignedIn = () => {
  return (
    <div className='signed-in-user'>
        <div className="profile-image"></div>
        <div className="profile-info">
            <span className="profile-name">John Doe</span>
            <span className="profile-role">Guest User</span>
        </div>
    </div>
  )
}

export default SignedIn