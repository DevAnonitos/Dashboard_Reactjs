import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Widget from '../../components/Widget/Widget';
import './home.scss'

const Home = () => {
  return (
    <div className='Home'>
      <Sidebar />
      <div className="Home-container">
        <Navbar />
        Home container
        <div className="widgets">
          <Widget />
          <Widget />
          <Widget />
          <Widget />
        </div>
      </div>
    </div>
  )
}

export default Home