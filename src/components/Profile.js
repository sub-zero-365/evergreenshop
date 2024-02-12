import React from 'react'
import { useOutletContext } from "react-router-dom"
const Profile = () => {
    const { user } = useOutletContext()
    return (
        <div>Profile
            <p
                className='text-blue-500'
            >
                userid:{user?._id}
                user name:{user?.name}
                email : {user?.email}
            </p>

        </div>
    )
}

export default Profile