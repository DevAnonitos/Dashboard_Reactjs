import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import './single.scss'

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://images.pexels.com/photos/3709094/pexels-photo-3709094.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Logo" className='itemImg' />
              Details
            </div>
          </div>
          <div className="right">

          </div>
        </div>
        <div className="bottom">

        </div>
      </div>
    </div>
  )
}

export default Single