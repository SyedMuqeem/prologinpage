import React from 'react'
import Calender from '../components/Calender'
import Sidenav from '../components/Sidenav'
import { ReactSession } from "react-client-session"


const MainDashboard = () => {
    return (
        
        <>
            <Sidenav token={ReactSession.get("token")} userid={ReactSession.get("userid")} fname={ReactSession.get("fname")} image={ReactSession.get("image")} />
            <Calender token={ReactSession.get("token")} userid={ReactSession.get("userid")} fname={ReactSession.get("fname")} image={ReactSession.get("image")} />
        </>
    )
}

export default MainDashboard;
