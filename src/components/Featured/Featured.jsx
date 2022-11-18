import React from 'react'
import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize='small' className='icon' />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={'70%'} strokeWidth={1} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe quos fugiat voluptatum quae recusandae accusantiu
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowUpOutlinedIcon fontSize='small' />
              <div className="resultAmount">$2.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last week</div>
            <div className="itemResult positive">
              <KeyboardArrowDownIcon fontSize='small' />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last month</div>
            <div className="itemResult positive">
              <KeyboardArrowDownIcon fontSize='small' />
              <div className="resultAmount">$32.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured