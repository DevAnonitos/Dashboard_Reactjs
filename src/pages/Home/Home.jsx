import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import './home.scss'

const Home = () => {
  return (
    <div className='Home'>
      <Sidebar />
      <div className="Home-container">container</div>
    </div>
  )
}

export default Home