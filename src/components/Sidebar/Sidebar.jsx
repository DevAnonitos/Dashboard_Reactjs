import React from 'react';
import './sidebar.scss';

// components
import  DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import PortraitIcon from '@mui/icons-material/Portrait';
import LogoutIcon from '@mui/icons-material/Logout';

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to='/' style={{textDecoration: 'none'}}>
        <div className='top'>
          <span className='logo'>Baodmin</span>
        </div>
      </Link>
      <hr />
      <div className='center'>
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className='icons' />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to='/users' style={{textDecoration: 'none'}}>
            <li>
              <PersonIcon className='icons' />
              <span>Users</span>
            </li>
          </Link>
          <Link to='/products' style={{textDecoration: 'none'}}>
            <li>
              <StoreIcon className='icons' />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className='icons' />
            <span>Orders</span>
          </li>
          <li>
            <LocalPostOfficeIcon className='icons' />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <PeopleAltIcon className='icons' />
            <span>Stats</span>
          </li>
          <li>
            <CircleNotificationsIcon className='icons' />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICES</p>
          <li>
            <HealthAndSafetyIcon className='icons' />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className='icons' />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className='icons' />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <PortraitIcon className='icons' />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className='icons' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar