
import React, { useState } from 'react'
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import {Link } from "react-router-dom";
import styled from 'styled-components'

const SidebarLink = styled(Link)`
    display:flex;
    color:grey;
    justify-content: space-between;
    align-item: center;
    padding: 10px;
    color: white;
    list-style:none;
    height:40px;
    text-decoration: none;
    font-size: 18px;

    &:hover{
        backgroung-color:#252831;
        border-left: 4px solid #632ce4;
        cursor: pointer;
    }

`;
const Dropdownlink = styled(Link)`
    background: rgba(19, 19, 50, 0.9);
    height:60px;
    padding-left:3rem;
    padding-top:1rem;
    display:flex;
    align-item: center;
    text-decoration:none;
    color: #f5f5f5;
    font-size:18px

        &:hover{
            background: #632ce4;
            cursor:pointer;
        }
`;

const SidebarLable = styled.span`
    margin-left : 0px;
    
`;

const Submenu = ({item}) => {
    const [subnav, setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subnav)
    return(
        <>
            <SidebarLink to="#" onClick={item.Smenu && showSubnav}>
                <div>
                    {/* {item.icons} */}
                    <i className={item.icons}></i>
                    <SidebarLable>{item.pname}</SidebarLable>
                </div>
                <div>
                    {item.Smenu && subnav 
                    ?  <FaChevronDown/>
                    : item.Smenu
                    ?<FaChevronRight/>
                    :null}
                </div>
            </SidebarLink>
            {subnav && item.Smenu.map((item,index) => {
                return(
                    <Dropdownlink to={item.url} key={index}>
                        {item.icon}
                        <SidebarLable>{item.sname}</SidebarLable>
                    </Dropdownlink>
                )
            })}
        </>
   )
}

export default Submenu;