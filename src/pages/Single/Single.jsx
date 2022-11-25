import React from 'react';
import Bannerview from '../../components/Accordion/Bannerview';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import List from '../../components/Table/Table';
import './single.scss'

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://images.pexels.com/photos/3709094/pexels-photo-3709094.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Logo" className='itemImg' />
              <div className="details">
                <h1 className="itemTitle">MooGose</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">MooGosedb@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+84 981123419</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">St.419 Forallnight Yd.VietNam</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">VietNam</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Bannerview />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last transaction</h1>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Single