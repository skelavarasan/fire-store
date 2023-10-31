import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';

export const sidebarData =  [
 {
    title : "Home",
    icon : <HomeIcon/>,
    link : "/homex"
 },

 {
    title : "Mailbox",
    icon : <EmailIcon/>,
    link : "/mailbox"
 },

 {
    title : "Analytics",
    icon : <AnalyticsIcon/>,
    link : "/analytics"
 },

 {
    title : "Dashboard",
    icon : <DashboardIcon/>,
    link : "/dashboard"
 },

 {
    title : "Friends",
    icon : <GroupIcon/>,
    link : "/friends"
 },


  
]
