import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import './home.scss'

const Home = () => {
  return (
    <div className='Home'>
      <Sidebar />
      <div className="Home-container">
        <Navbar />
        Home container
      </div>
    </div>
  )
}

export default Home