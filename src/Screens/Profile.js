import React from 'react'
import {ReactSession} from "react-client-session"
import Sidenav from '../components/Sidenav'
import ProfilePage from './ProfilePage'
const Profile = () => {
    return (
        
        <>
            <Sidenav token={ReactSession.get("token")} userid={ReactSession.get("userid")} fname={ReactSession.get("fname")} image={ReactSession.get("image")} />
            <ProfilePage/>
        </>
    )
}

export default Profile
