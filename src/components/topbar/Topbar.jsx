import React from 'react'
import './topbar.css'
import {NotificationsNone, Language, Settings} from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">IrisAdmin</span>
        </div>

        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">12</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          
          <img src="/image/profile.jpeg" alt="profilePhoto" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}
