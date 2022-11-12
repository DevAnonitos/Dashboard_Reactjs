import React from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TocIcon from '@mui/icons-material/Toc';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className='search'>
          <input type="text" placeholder='Search...' />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon />
            English
          </div>
          <div className="item">
            <DarkModeIcon />
          </div>
          <div className="item">
            <FullscreenExitIcon />
          </div>
          <div className="item">
            <NotificationsNoneIcon />
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon />
          </div>
          <div className="item">
            <TocIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar