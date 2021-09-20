import React from 'react'
import me from '../Profile/me.jpg'

const ProfilePhoto = () => {
    return (
        <div>
            <img className="Pimg" src={me} alt="pme" />
        </div>
    )
}

export default ProfilePhoto
