import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
    {
        title: 'Overview',
        path:'/overview',
        icons: <AiIcons.AiFillHome />,
        iconClosed:<RiIcons.RiArrowDownSFill />,
        iconOpened:<RiIcons.RiArrowUpSFill />,
        subnav: [
            {
                title: 'Users',
                path: '/overview/users',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Revenue',
                path: '/overview/revenue',
                icon: <FaIcons.FaHandshake />,
            },
        ]
    },
    {
        title: 'Reports',
        path:'/reports',
        icons: <AiIcons.AiFillHome />,
        iconClosed:<RiIcons.RiArrowDownSFill />,
        iconOpened:<RiIcons.RiArrowUpSFill />,
        subnav: [
            {
                title: 'Users',
                path: '/overview/users',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Revenue',
                path: '/overview/revenue',
                icon: <FaIcons.FaHandshake />,
            },
        ]
    },
    
    {
        title: 'Calender',
        path:'/calender',
        icons: <AiIcons.AiFillHome />,
        iconClosed:<RiIcons.RiArrowDownSFill />,
        iconOpened:<RiIcons.RiArrowUpSFill />,
        subnav: [
            {
                title: 'Yearly',
                path: '/overview/users',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Monthly',
                path: '/overview/monthly',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Daily',
                path: '/overview/revenue',
                icon: <FaIcons.FaHandshake />,
            }
        ]
        
    },
    {
        title: 'Overview',
        path:'/overview',
        icons: <AiIcons.AiFillHome />,
        iconClosed:<RiIcons.RiArrowDownSFill />,
        iconOpened:<RiIcons.RiArrowUpSFill />,
        subnav: [
            {
                title: 'Users',
                path: '/overview/users',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Revenue',
                path: '/overview/revenue',
                icon: <FaIcons.FaHandshake />,
            },
        ]
    },
]