import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import Submenu from './Submenu';
import Axios from 'axios'
import { SidebarData } from './SidebarData';
import Logout from './logout/Logout';
// react session
import { ReactSession } from "react-client-session"

const Nav = styled.div`
        background-image: linear-gradient(90deg, rgba(29, 29, 50, 0.9), rgba(30, 30, 50, 0.9));
        height:50px
        display: flex;
        justify-content: flex-start;
        align-items: center;
        
`;
const NavIcon = styled(Link)`
        margin-left: 2rem;
        font-size: 2rem;
        height:50px;
        color:white;
        &:hover{
            color:rgba(202, 201, 201, 0.9);
            cursor:pointer;
        }


`;
const NavIcon2 = styled(Link)`
        margin-left: 2rem;
        font-size: 1.5rem;
        height:50px;
        float:right;
        padding-right:20px;


`;

const SidebarNav = styled.nav`
    background-image: linear-gradient(90deg, rgba(29, 29, 50, 0.9), rgba(30, 30, 50, 0.9));
    width:250px;
    height: 100vh;
    display: flex;
    justify-content:center;
    position: fixed;
    top-right-radius:10px;
    top:0;
    left: ${({ sidebar }) => (sidebar ? '-100%' : '0')};
    transition: 350ms;
    z-index: 10;
`;

const SidebarWrap = styled.div`
    width:100%;
`;



const Sidenav = () => {

    const [menuDetails, setMenuDetails] = useState([])
    const [sidebar, setSidebar] = useState(true)
    const showSidebar = () => setSidebar(!sidebar)

    const hitapi = () => {
        const FetchDetails = async () => {
            try {
                const data = await Axios.put("https://api.perisync.com/show/menu", {
                    "token": ReactSession.get("token"),
                    "userid": ReactSession.get("userid"),
                    "type": "WEB"
                })
                console.log(data.data);
                console.log(ReactSession.get("userid"),ReactSession.get("token"));
                setMenuDetails(data.data)

            } catch (e) {
                console.log(e);
                // alert("wrong credentials")
            }
            console.log("2",);
        };

        FetchDetails();
    }
    useEffect(() => {

        hitapi();
    }, [])
    const [logoutPic, setLogoutPic] = useState(false)


    window.onload = () => {
        console.log(hitapi());
};

    return (
        <>

            <Nav>
                <NavIcon to="#">
                    <FaIcons.FaBars onClick={showSidebar} />
                    <NavIcon2>
                        <div className="profilelogout">
                            <div className="logoutInProfilePic">
                                <div style={{ display: logoutPic ? "block" : "none" }} >
                                    <Logout fname={ReactSession.get("fname")} image={ReactSession.get("image")} />
                                </div>
                            </div>
                            <div className="profilepicforlogout"
                                onClick={() => { setLogoutPic(!logoutPic) }} >
                                <div><img className="profilecicrle2" src={`data:image/jpeg;base64,${ReactSession.get("image")}`} alt="pic" width="100%" />
                                </div>
                            </div>
                        </div>
                    </NavIcon2>
                </NavIcon>
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap >
                    <NavIcon to="#">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </NavIcon>
                    {menuDetails.map((item, index) => {
                        return <Submenu item={item} key={index} />
                    })}
                </SidebarWrap>
            </SidebarNav>



        </>
    )
}

export default Sidenav;
