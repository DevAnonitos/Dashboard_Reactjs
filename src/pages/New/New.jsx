import React from 'react';
import './new.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar'

const New = () => {
  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add new Users</h1>
        </div>
        <div className="bottom">
          <div className="left">

          </div>
          <div className="right">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default New