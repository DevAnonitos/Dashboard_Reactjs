import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Widget from '../../components/Widget/Widget';
import Featured from '../../components/Featured/Featured';
import Chart from '../../components/Chart/Chart';
import List from '../../components/Table/Table';
import './home.scss'

const Home = () => {
  return (
    <div className='Home'>
      <Sidebar />
      <div className="Home-container">
        <Navbar />
        Home container
        <div className="widgets">
          <Widget type='user' />
          <Widget type='order' />
          <Widget type='earning' />
          <Widget type='balance' />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Home